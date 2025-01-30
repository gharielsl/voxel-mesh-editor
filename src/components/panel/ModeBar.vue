<script lang="ts">
import { defineComponent } from 'vue';
import Multiselect from 'vue-multiselect';
import * as THREE from 'three';
import Brush from '../input/Brush.vue';
import 'vue-multiselect/dist/vue-multiselect.css';
import { state } from '../../state';
import VoxelMesh from '../../core/VoxelMesh';

export default defineComponent({
    components: {
        Multiselect,
        Brush
    },
    methods: {
        resize() {
            this.space = window.innerWidth < 1200 ? 4 : 8;
            this.rightVisible = window.innerWidth >= 900;
        },
        fullscreenChange() {
            state.fullscreen = document.fullscreenElement !== null
        },
        fullscreen() {
            if (!state.fullscreen) {
                document.body.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        },
        lightingChange(ev: Event) {
            const value = (ev.target as HTMLSelectElement)?.value;
            if (value === 'Lit' || value === 'Shadows') {
                state.renderingContext().ghostLight.visible = true;
                state.renderingContext().nGhostLight.visible = true;
            }
            if (value === 'Lit' || value === 'Unlit') {
                state.renderingContext().scene.traverse((child) => {
                    child.castShadow = false;
                    child.receiveShadow = false;
                });
                state.renderingContext().ghostLight.shadow.autoUpdate = false;
            }
            if (value === 'Unlit') {
                state.renderingContext().ghostLight.visible = false;
                state.renderingContext().nGhostLight.visible = false;
            }
            if (value === 'Shadows') {
                state.renderingContext().scene.traverse((child) => {
                    if (child instanceof THREE.LineSegments) return;
                    if (child === state.renderingContext().lineX) return;
                    if (child === state.renderingContext().lineZ) return;
                    if (child === state.renderingContext().grid) return;
                    if (child === state.renderingContext().grid10) return;
                    if (child === state.renderingContext().grid40) return;
                    if (child === state.renderingContext().nGhostLight) return;
                    child.castShadow = true;
                    child.receiveShadow = true;
                });
                state.renderingContext().ghostLight.shadow.autoUpdate = true;
            }
        }
    },
    mounted() {
        window.addEventListener('resize', this.resize);
        document.addEventListener('fullscreenchange', this.fullscreenChange);
    },
    unmounted() {
        window.removeEventListener('resize', this.resize);
        document.removeEventListener('fullscreenchange', this.fullscreenChange);
    },
    data: () => {
        return {
            options: ['Object mode', 'Geometry mode'],
            space: window.innerWidth < 1200 ? 4 : 8,
            rightVisible: window.innerWidth >= 1045,
            state
        };
    }
});
</script>

<template>
    <div class="mode-bar">
        <div class="mode-bar-left">
            <div class="mode-bar-item">
                <div class="mode-bar-item-select">
                    <select @change="lightingChange" style="width: 144px;cursor: pointer;">
                        <option value="Lit" selected>Lit</option>
                        <option value="Shadows">Shadows</option>
                        <option value="Unlit">Unlit</option>
                    </select>
                </div>
            </div>
            <div class="mode-bar-item">
                <div class="mode-bar-item-select">
                    <div @click="state.setCurrentMode('object')" class="mode-button"
                        :class="{ selected: state.currentMode === 'object' }">
                        <i class="bi bi-box-fill"></i>
                        Object Mode
                    </div>
                </div>
            </div>
            <div v-if="(state.selectedObject as VoxelMesh)?.isVoxelMesh" class="mode-bar-item">
                <div class="mode-bar-item-select">
                    <div @click="state.setCurrentMode('sculpt')" class="mode-button"
                        :class="{ selected: state.currentMode === 'sculpt' }">
                        <i class="bi bi-hammer"></i>
                        Voxel Mode
                    </div>
                </div>
            </div>
            <div v-if="state.currentMode === 'sculpt'" class="mode-bar-item">
                <Brush />
            </div>
        </div>
        <div v-if="rightVisible" class="mode-bar-right">
            <div title="fullscreen" class="mode-bar-item">
                <div class="mode-bar-item-select" style="width: 48px;">
                    <div @click="fullscreen" class="mode-button" :class="{ 'selected': state.fullscreen }">
                        <i :class="!state.fullscreen ? 'bi bi-fullscreen' : 'bi bi-fullscreen-exit'"></i>
                    </div>
                </div>
            </div>
            <div title="snap" class="mode-bar-item">
                <div class="mode-bar-item-select" style="width: 48px;">
                    <div @click="state.snapActive = !state.snapActive" class="mode-button"
                        :class="{ selected: state.snapActive }">
                        <i class="bi bi-magnet-fill"></i>
                    </div>
                </div>
            </div>
            <div title="grid" class="mode-bar-item">
                <div class="mode-bar-item-select" style="width: 48px;">
                    <div @click="state.setGridActive(!state.gridActive)" class="mode-button"
                        :class="{ selected: state.gridActive }">
                        <i class="bi bi-grid-3x3"></i>
                    </div>
                </div>
            </div>
            <div :style="`width: ${space}px;`"></div>
        </div>
    </div>
</template>

<style scoped>
.mode-bar {
    /* width: 100%; */
    height: 64px;
    background-color: var(--color-background);
    border: 1px var(--color-foreground-2) solid;
    display: flex;
    justify-content: space-between;
}

.mode-bar-left,
.mode-bar-right {
    display: flex;
    height: 100%;
}

.mode-bar-item {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: v-bind(space + 'px');
}

.mode-bar-item-select {
    display: flex;
}

.mode-select {
    width: 200px;
    background-color: var(--color-background);
    color: var(--text-color);
    outline: none;
    padding: 4px;
    border: 1px var(--color-foreground-2) solid;
    border-radius: 8px;
}

.multiselect__tags {
    background: none !important;
    border: none !important;
}

.mode-button {
    background-color: var(--color-foreground-2);
    width: 152px;
    height: 48px;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.mode-button.selected {
    background-color: var(--color-secondary);
}

.mode-button:hover {
    color: var(--color-primary);
    cursor: pointer;
}

.mode-button.selected:hover {
    color: var(--color-text-disabled);
}
</style>
