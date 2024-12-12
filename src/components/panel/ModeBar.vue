<script lang="ts">
    import { defineComponent } from 'vue';
    import Multiselect from 'vue-multiselect';
    import Brush from '../input/Brush.vue';
    import 'vue-multiselect/dist/vue-multiselect.css';
    import { state } from '../../state';

    export default defineComponent({
        components: {
            Multiselect,
            Brush
        },
        methods: {
            resize() {
                this.space = window.innerWidth < 1200 ? 4 : 8;
                this.rightVisible = window.innerWidth >= 1045;
            }
        },
        mounted() {
            window.addEventListener('resize', this.resize);
        },
        unmounted() {
            window.removeEventListener('resize', this.resize);
        },
        data: () => {
            return {
                options: ['Object mode', 'Geometry mode'],
                space: window.innerWidth  < 1200 ? 4 : 8,
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
                    <select>
                        <option value="" disabled selected>Render Mode</option>
                        <option value="Material Preview">Material Preview</option>
                        <option value="Unlit">Unlit</option>
                        <option value="Wireframe">Wireframe</option>
                        <option value="Lit">Lit</option>
                    </select>
                </div>
            </div>
            <div class="mode-bar-item">
                <div class="mode-bar-item-select">
                    <div @click="state.setCurrentMode('object')" class="mode-button" :style="state.currentMode === 'object' ? 'background-color: var(--color-secondary);' : ''">
                        <i class="bi bi-box-fill"></i>
                        Object Mode
                    </div>
                </div>
            </div>
            <div class="mode-bar-item">
                <div class="mode-bar-item-select">
                    <div @click="state.setCurrentMode('sculpt')" class="mode-button" :style="state.currentMode === 'sculpt' ? 'background-color: var(--color-secondary);' : ''">
                        <i class="bi bi-hammer"></i>
                        Sculpt Mode
                    </div>
                </div>
            </div>
            <div v-if="state.currentMode === 'sculpt'" class="mode-bar-item">
                <Brush />
            </div>
        </div>
        <div v-if="rightVisible" title="snap" class="mode-bar-right">
            <div class="mode-bar-item">
                <div class="mode-bar-item-select" style="width: 48px;">
                    <div @click="state.snapActive = !state.snapActive" class="mode-button" :style="`background-color: var(${state.snapActive ? '--color-secondary' : '--color-foreground-2'});`">
                        <i class="bi bi-magnet-fill"></i>
                    </div>
                </div>
            </div>
            <div title="grid" class="mode-bar-item">
                <div class="mode-bar-item-select" style="width: 48px;">
                    <div @click="state.setGridActive(!state.gridActive)" class="mode-button" :style="`background-color: var(${state.gridActive ? '--color-secondary' : '--color-foreground-2'});`">
                        <i class="bi bi-grid-3x3"></i>
                    </div>
                </div>
            </div>
            <div class="mode-bar-item">
                <div class="mode-bar-item-select">
                    <div class="mode-button">
                        <i class="bi bi-globe-americas"></i>
                        World Material
                    </div>
                </div>
            </div>
            <div class="mode-bar-item" :style="`width: ${space}px;`"></div>
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

    .mode-bar-left, .mode-bar-right {
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

    .mode-button:hover {
        color: var(--color-primary);
        cursor: pointer;
    }
</style>
