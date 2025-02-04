import * as THREE from 'three';
import { state } from '../../state';
import VoxelMeshChunk from '../VoxelMeshChunk';
import { getTextureAsDataUrl, ShaderBaker } from 'three-shader-baker';
import { createVoxelMaterialAsync } from '../voxel-shader';
import { GLTFExporter } from 'three/examples/jsm/Addons.js';

function unwrapUvs(geometry) {
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
}

function scaleUvTris(geometry: THREE.BufferGeometry, scale: THREE.Vector2) {
    const uvs = geometry.attributes.uv.array;
    const numVertices = uvs.length / 2;
    
    for (let i = 0; i < numVertices; i += 3) {
        const u0 = uvs[i * 2];
        const v0 = uvs[i * 2 + 1];
        const u1 = uvs[(i + 1) * 2];
        const v1 = uvs[(i + 1) * 2 + 1];
        const u2 = uvs[(i + 2) * 2];
        const v2 = uvs[(i + 2) * 2 + 1];
        
        const centerU = (u0 + u1 + u2) / 3;
        const centerV = (v0 + v1 + v2) / 3;
        
        uvs[i * 2] = (u0 - centerU) * scale.x + centerU;
        uvs[i * 2 + 1] = (v0 - centerV) * scale.y + centerV;

        uvs[(i + 1) * 2] = (u1 - centerU) * scale.x + centerU;
        uvs[(i + 1) * 2 + 1] = (v1 - centerV) * scale.y + centerV;

        uvs[(i + 2) * 2] = (u2 - centerU) * scale.x + centerU;
        uvs[(i + 2) * 2 + 1] = (v2 - centerV) * scale.y + centerV;
    }
    geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
}

function transformUvs(geometry: THREE.BufferGeometry, transform: (u: number, v: number) => THREE.Vector2) {
    const uvs = geometry.attributes.uv.array;

    for (let i = 0; i < uvs.length; i += 2) {
        let u = uvs[i];
        let v = uvs[i + 1];
        const uv = transform(u, v);
        uvs[i] = uv.x;
        uvs[i + 1] = uv.y;
    }
    geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
}

async function exportScene(selectedOnly: boolean, visibleOnly: boolean, format: string) {
    const exportScene = new THREE.Scene();
    const chunks = [];
    state.renderingContext().scene.traverse((child) => {
        if (child instanceof VoxelMeshChunk) {
            const selected = child.voxelMesh.selected;
            const visible = child.voxelMesh.visible;
            const shouldExport = ((!selectedOnly || selected) &&
                (!visibleOnly || visible));
            if (shouldExport) {
                chunks.push(child);
            }
        }
    });
    for await (const chunk of chunks) {
        const geometry = chunk.createExportGeometry();
        const baker = new ShaderBaker();
        let result;
        unwrapUvs(geometry);
        let exportMesh;
        if (!chunk.voxelMesh.marchCubes) {
            const prevGeometry = chunk.geometry;
            const prevMaterial = chunk.material;
            chunk.geometry = geometry;
            chunk.material = await createVoxelMaterialAsync(VoxelMeshChunk.CHUNK_SIZE, VoxelMeshChunk.CHUNK_BORDER_SIZE, false, true);

            result = baker.bake(state.renderingContext().renderer, chunk, {
                size: 2048
            });
            const texUrl = getTextureAsDataUrl(state.renderingContext().renderer, result.texture);
            chunk.geometry = prevGeometry;
            chunk.material.dispose();
            chunk.material = prevMaterial;
            transformUvs(geometry, (u, v) => {
                return new THREE.Vector2(u, -v + 1);
            });
            scaleUvTris(geometry, new THREE.Vector2(0.8, 0.8));
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
        a.download = "scene." + format;
        a.click();
    }, (error) => {
        console.error(error);
    }, {
        binary: format === "glb"
    });
}

export {
    unwrapUvs,
    scaleUvTris,
    transformUvs,
    exportScene
}