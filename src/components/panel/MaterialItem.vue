<script lang="ts">
import * as THREE from "three";
import { defineComponent, nextTick } from 'vue';
import { state } from "../../state";
import { VoxelMaterial } from "../../types/default";

export default defineComponent({
    props: {
        material: Object,
        index: Number
    },
    methods: {
        async render() {
            const material = this.$props.material as VoxelMaterial;
            const renderer = new THREE.WebGLRenderer({
                canvas: this.$refs.canvas as HTMLCanvasElement,
                antialias: true,
                preserveDrawingBuffer: true
            });
            renderer.setClearColor(new THREE.Color('#292929'));
            renderer.setSize(94, 94);
            this.sphere.children.forEach((c) => this.sphere.remove(c));
            this.camera.position.set(0, 0, -2);
            this.camera.lookAt(new THREE.Vector3());
            const light = new THREE.DirectionalLight(0xffffff, 0.6);
            light.position.set(2, 2, -2);
            this.sphere.add(light);
            this.sphere.material.dispose();
            this.sphere.material = new THREE.MeshStandardMaterial();
            this.sphere.material.color = new THREE.Color(material?.color || 0xffffff);

            await new Promise<void>((resolve) => {
                if (material.texture) {
                    new THREE.TextureLoader().load(material.texture, (tex) => {
                        this.sphere.material.map = tex;
                        resolve();
                    });
                } else {
                    resolve();
                }
            });

            await new Promise<void>((resolve) => {
                if (material.normal) {
                    new THREE.TextureLoader().load(material.normal, (tex) => {
                        this.sphere.material.normalMap = tex;
                        resolve();
                    });
                } else {
                    resolve();
                }
            });

            renderer.render(this.sphere, this.camera);
            this.src = (this.$refs.canvas as HTMLCanvasElement).toDataURL();
            renderer.dispose();
            renderer.forceContextLoss();
        },
        materialEdit() {
            if (state.selectedMaterial !== this.$props.material) {
                return;
            }
            this.src = undefined;
            nextTick(this.render);
        }
    },
    mounted() {
        this.render();
        window.addEventListener("materialedit", this.materialEdit);
    },
    unmounted() {
        window.removeEventListener("materialedit", this.materialEdit);
    },
    data() {
        return {
            src: undefined as string | undefined,
            state
        }
    },
    setup() {
        return {
            sphere: new THREE.Mesh(new THREE.SphereGeometry(1), new THREE.MeshStandardMaterial()),
            camera: new THREE.PerspectiveCamera(75, 1, 0.1, 10)
        };
    }
});
</script>

<template>
    <div @click="state.selectedMaterial = material;" :class="{'item':true,'selected':state.selectedMaterial===material}">
        <div class="name">Material {{ index }}</div>
        <div class="preview">
            <canvas v-if="!src" ref="canvas" width="94" height="94"></canvas>
            <img v-if="src" :src="src">
        </div>
    </div>
</template>

<style scoped>
    .item {
        width: 128px;
        height: 128px; 
        background-color: var(--color-background);
        border: 1px var(--color-foreground-2) solid;
        margin: 8px;
        padding-bottom: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
    }

    .item.selected {
        border: 1px solid var(--color-secondary);
    }

    .item:hover {
        cursor: pointer;
    }

    .name {
        color: var(--color-text-disabled);
        width: 100%;
    }

    .preview {
        width: 94px;
        height: 94px;
        overflow: hidden;
        /* background-color: white; */
        border-radius: 8px;
        border: 1px var(--color-foreground-2-bright) solid;
        /* border-style: inset; */
    }
</style>