<script lang="ts">
import * as THREE from "three";
import { defineComponent } from 'vue';
import { state } from '../../state';
import Multiselect from 'vue-multiselect';
import MeshObject from "../../core/MeshObject";
import { GLTFExporter } from "three/examples/jsm/Addons.js";
import VoxelMeshChunk from "../../core/VoxelMeshChunk";
import VoxelMesh from "../../core/VoxelMesh";
import { getTextureAsDataUrl, ShaderBaker } from "three-shader-baker";
import { createVoxelMaterial } from "../../core/voxel-shader";

export default defineComponent({
    components: {
        Multiselect
    },
    methods: {
        unwrapUvs(geometry) {
            const positions = geometry.attributes.position.array;
            const indices = geometry.index.array;
            const triangleCount = indices.length / 3;
            const gridSize = Math.ceil(Math.sqrt(triangleCount));
            const cellSize = 1 / gridSize;
            const uvs = new Float32Array((positions.length / 3) * 2);
            for (let i = 0; i < triangleCount; i++) {
                const col = i % gridSize;
                const row = Math.floor(i / gridSize);
                const baseU = col * cellSize;
                const baseV = row * cellSize;
                for (let j = 0; j < 3; j++) {
                    const vertexIndex = indices[i * 3 + j];
                    uvs[vertexIndex * 2] = baseU + (j === 1 ? cellSize : 0);
                    uvs[vertexIndex * 2 + 1] = baseV + (j === 2 ? cellSize : 0);
                }
            }
            geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
        },
        transformUvs(geometry: THREE.BufferGeometry, transform: (u: number, v: number) => THREE.Vector2) {
            const uvs = geometry.attributes.uv.array;

            for (let i = 0; i < uvs.length; i += 2) {
                let u = uvs[i];
                let v = uvs[i + 1];
                const uv = transform(u, v);
                uvs[i] = uv.x;
                uvs[i + 1] = uv.y;
            }
            geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
        },
        rotateUvs(geometry, angle) {
            const uvs = geometry.attributes.uv.array;
            const cosAngle = Math.cos(angle);
            const sinAngle = Math.sin(angle);

            for (let i = 0; i < uvs.length; i += 2) {
                let u = uvs[i];
                let v = uvs[i + 1];
                u -= 0.5;
                v -= 0.5;
                const rotatedU = cosAngle * u - sinAngle * v;
                const rotatedV = sinAngle * u + cosAngle * v;
                uvs[i] = rotatedU + 0.5;
                uvs[i + 1] = rotatedV + 0.5;
            }
            geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
        },
        toggleVisibleOnly() {
            this.visibleOnly = !this.visibleOnly;
            this.render();
        },
        toggleSelectedOnly() {
            this.selectedOnly = !this.selectedOnly;
            this.render();
        },
        async exportScene() {
            const exportScene = new THREE.Scene();
            const chunks = [];
            state.renderingContext().scene.traverse((child) => {
                if (child instanceof VoxelMeshChunk) {
                    const selected = child.voxelMesh.selected;
                    const visible = child.voxelMesh.visible;
                    const shouldExport = ((!this.selectedOnly || selected) &&
                        (!this.visibleOnly || visible));
                    if (shouldExport) {
                        chunks.push(child);
                    }
                }
            });
            for await (const chunk of chunks) {
                const geometry = chunk.createExportGeometry();
                const baker = new ShaderBaker();
                let result;
                this.unwrapUvs(geometry);
                let exportMesh;
                if (!chunk.voxelMesh.marchCubes) {
                    const prevGeometry = chunk.geometry;
                    const prevMaterial = chunk.material;
                    chunk.geometry = geometry;
                    chunk.material = createVoxelMaterial(VoxelMeshChunk.CHUNK_SIZE, VoxelMeshChunk.CHUNK_BORDER_SIZE, (prevMaterial as any).polygonOffset, true);

                    result = baker.bake(state.renderingContext().renderer, chunk);
                    const texUrl = getTextureAsDataUrl(state.renderingContext().renderer, result.texture);
                    chunk.geometry = prevGeometry;
                    chunk.material = prevMaterial;
                    this.transformUvs(geometry, (u, v) => {
                        return new THREE.Vector2(u, -v + 1);
                    });
                    exportMesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
                        map: await new THREE.TextureLoader().loadAsync(texUrl)
                    }));
                } else {
                    exportMesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0xffffff }));
                }
                exportMesh.position.copy(chunk.position);
                exportMesh.scale.copy(chunk.scale);
                exportMesh.rotation.copy(chunk.rotation);
                baker.dispose();
                result?.dispose();
                exportScene.add(exportMesh);
            }
            const exporter = new GLTFExporter();
            exporter.parse(exportScene, (gltf) => {
                let url;
                if (gltf instanceof ArrayBuffer) {
                    const blob = new Blob([gltf], { type: "model/gltf+binary" });
                    url = URL.createObjectURL(blob);
                } else {
                    const blob = new Blob([JSON.stringify(gltf)], { type: "model/gltf+json" });
                    url = URL.createObjectURL(blob);
                }
                const a = document.createElement("a");
                a.href = url;
                a.download = "scene." + this.format;
                a.click();
                state.setExportOpen(false);
            }, (error) => {
                console.error(error);
                state.setExportOpen(false);
            }, {
                binary: this.format === "glb"
            });
        },
        render() {
            if (this.scene) {
                this.scene.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        child.geometry.dispose();
                        child.material.dispose();
                    }
                });
            }
            const scene = new THREE.Scene();
            this.scene = scene;
            scene.add(state.renderingContext().ghostLight.clone());
            scene.add(state.renderingContext().nGhostLight.clone());
            state.renderingContext().scene.traverse((child) => {
                if (child instanceof MeshObject) {
                    if ((!this.selectedOnly || child.selected) &&
                        (!this.visibleOnly || child.visible)) {
                        scene.add(child.clone());
                    }
                }
            });
            this.camera.position.copy(state.renderingContext().camera.position);
            this.camera.lookAt(new THREE.Vector3());
            this.renderer?.render(this.scene, this.camera);
        }
    },
    mounted() {
        const canvas = this.$refs.canvas as HTMLCanvasElement;
        this.camera.aspect = canvas.width / canvas.height;
        this.renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true
        });
        this.renderer.setSize(canvas.width, canvas.height);
        state.setExportOpen = (open) => {
            state.exportOpen = open;
            this.render();
        }
    },
    data() {
        return {
            state,
            selectedOnly: false,
            visibleOnly: false,
            applyTranslate: false,
            applyScale: false,
            applyRotate: false,
            format: "gltf"
        }
    },
    setup() {
        return {
            camera: new THREE.PerspectiveCamera(75, 1, 0.1, 1000),
            renderer: undefined as THREE.WebGLRenderer | undefined,
            scene: undefined as THREE.Scene | undefined
        }
    }
});
</script>

<template>
    <div @click="state.setExportOpen(false)" class="the" :style="`display: ${state.exportOpen ? 'flex' : 'none'}`">
        <div @click="$event.stopPropagation()" class="content">
            <div class="left">
                <canvas ref="canvas" height="267" width="250" class="render">

                </canvas>
                <div class="format-container">
                    <div class="select-container" style="width:200px;position:relative">
                        <div class="select-title">Format</div>
                        <select @change="format = ($event.target as any).value" style="width:100%">
                            <option value="glft" selected>GLTF</option>
                            <option value="glb">GLB</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="options">
                    <h4 style="margin: 8px">Export options</h4>

                    <div class="option-group" style="margin-bottom: 8px">
                        <div class="option">
                            <span style="font-weight:500;margin-top: 4px;margin-bottom: 4px;">Limit to</span>
                        </div>

                        <div class="option">
                            <span>Selected Only</span>
                            <input @change="toggleSelectedOnly" type="checkbox">
                        </div>
                        <div class="option">
                            <span>Visible Only</span>
                            <input @change="toggleVisibleOnly" type="checkbox">
                        </div>
                    </div>

                    <div class="option-group">
                        <div class="option">
                            <span style="font-weight:500;margin-top: 4px;margin-bottom: 4px;">Apply transform</span>
                        </div>

                        <div class="option">
                            <span>Translation</span>
                            <input @change="applyTranslate = !applyTranslate" type="checkbox">
                        </div>
                        <div class="option">
                            <span>Scale</span>
                            <input @change="applyScale = !applyScale" type="checkbox">
                        </div>
                        <div class="option">
                            <span>Rotation</span>
                            <input @change="applyRotate = !applyRotate" type="checkbox">
                        </div>
                    </div>
                </div>
                <div class="export-buttons">
                    <div class="button" @click="state.setExportOpen(false)">Cancel</div>
                    <div class="button" @click="exportScene">Export</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.the {
    position: absolute;
    z-index: 100000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.75);
}

.option {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.option-group {
    /* background-color: var(--color-foreground-2); */
    border: 1px var(--color-foreground-2) solid;
    color: var(--color-text-disabled);
    border-radius: 12px;
    width: 80%;
    padding: 8px;
    overflow: hidden;
}

.content {
    border: 1px var(--color-foreground-2) solid;
    background-color: var(--color-background);
    position: absolute;
    z-index: 1000010;
    width: 500px;
    height: 350px;
    display: flex;
    border-radius: 12px;
    overflow: hidden;
}

.render {
    height: 267px;
    background-color: black;
    border-right: 1px var(--color-foreground-2) solid;
    border-bottom: 1px var(--color-foreground-2) solid;
    border-bottom-right-radius: 12px;
}

.left {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.right {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.format-container {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.options {
    max-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.export-buttons {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.button {
    padding: 8px;
    margin: 4px;
    background-color: var(--color-foreground-1);
    color: var(--color-text);
    border: 1px var(--color-foreground-2) solid;
    cursor: pointer;
}

.button:hover {
    background-color: var(--color-foreground-2);
    color: var(--color-secondary);
    border: 1px var(--color-secondary) solid;
}

input[type=checkbox] {
    filter: brightness(70%);
}

input[type=checkbox]:checked {
    filter: brightness(100%);
}

.select-container {
    color: var(--color-text-disabled);
}

select:hover {
    color: var(--color-secondary);
    border: 1px var(--color-secondary) solid;
}

.select-title {
    position: absolute;
    top: -10px;
    left: 12px;
    font-size: small;
    background-color: var(--color-background);
    border-radius: 4px;
}
</style>