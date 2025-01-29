<script lang="ts">
import { defineComponent } from 'vue';
import { state } from '../../state';
import MaterialItem from './MaterialItem.vue';
import MaterialEditor from './MaterialEditor.vue';
import { VoxelMaterial } from '../../types/default';
import { filter } from 'jszip';

    export default defineComponent({
        components: {
            MaterialItem,
            MaterialEditor
        },
        methods: {
            resize(ev: MouseEvent) {
                if (this.isResizing) {
                    state.cursorShape = 'row-resize';
                    const bottomSection = this.$refs.bottomSection as HTMLElement;
                    const editor = this.$refs.editor as HTMLElement;
                    if (bottomSection && editor) {
                        bottomSection.style.height = (+bottomSection.style.height.replace('px', '') - ev.movementY) + 'px';
                        editor.style.height = (+bottomSection.style.height.replace('px', '') + 48 - ev.movementY) + 'px';
                    }
                }
            },
            resized() {
                // this.width = window.innerWidth;
                this.width = this.$refs.container.clientWidth;
                // this.filterVisible = window.innerWidth >= 1040;
            },
            mouseup() {
                if (this.isResizing) {
                    state.cursorShape = 'initial';
                }
                this.isResizing = false;
            },
            addNew() {
                let i = 0;
                for (; i <= state.materials.length; i++) {
                    if (!state.materials[i]) break;
                }
                state.materials[i] = { color: '#ffffff' };
                // state.materials.push({ color: '#ffffff' });
                window.dispatchEvent(new CustomEvent("materialedit"));
            },
            filter() {
                const input = this.$refs.filter as HTMLInputElement;
                this.materials = state.materials.filter((mat) => {
                    if (!mat) return false;
                    const matName = mat.name || ('Material ' + state.materials.indexOf(mat));
                    return input.value === '' || matName.toLowerCase().startsWith(input.value.toLowerCase()) || state.selectedMaterial === mat;
                });
            },
            areAllMatsSelected() {
                if (state.selectedMaterials.has(state.selectedMaterial)) {
                    return state.selectedMaterials.size === state.materials.length;
                }
                return state.selectedMaterials.size === state.materials.length - 1; 
            },
            deleteMats() {
                let matsLength = 0;
                state.materials.forEach((mat) => {
                    if (mat) matsLength++;
                });
                if (this.areAllMatsSelected() || matsLength === 1) {
                    return;
                }
                if (window.confirm('Are you sure you want to delete all selected materials?\n**This includes the current material as well.**')) {
                    state.materials = state.materials.map((mat) => {
                        if (!state.selectedMaterials.has(mat) && state.selectedMaterial !== mat) {
                            return mat;
                        }
                        return null;
                    });
                    let i = 0;
                    for (; i < state.materials.length; i++) {
                        if (state.materials[i]) break;
                    }
                    state.selectedMaterial = state.materials[i];
                    state.selectedMaterials = new Set();
                    setTimeout(() => {
                        window.dispatchEvent(new CustomEvent("materialedit"));
                        setTimeout(() => {
                            window.dispatchEvent(new CustomEvent("materialedit"));
                        }, 100);
                    }, 10);
                }
            }
        },
        mounted() {
            document.addEventListener('mouseup', this.mouseup);
            document.addEventListener('mousemove', this.resize);
            window.addEventListener("materialedit", this.filter);
            let i = 0;
            for (; i < state.materials.length; i++) {
                if (state.materials[i]) break;
            }
            state.selectedMaterial = state.materials[i];
            const bottomSection = this.$refs.bottomSection as HTMLElement;
            const editor = this.$refs.editor as HTMLElement;
            if (bottomSection && editor) {
                editor.style.height = (+bottomSection.style.height.replace('px', '') + 48) + 'px';
            }
            this.observer = new ResizeObserver(this.resized);
            this.observer.observe(bottomSection);
            // window.addEventListener("resize", this.resized);
            this.resized();
        },
        unmounted() {
            document.removeEventListener('mouseup', this.mouseup);
            document.removeEventListener('mousemove', this.resize);
            window.removeEventListener("materialsChange", this.filter);
            // window.removeEventListener('resize', this.resized);
            this.observer?.disconnect();
        },
        data() {
            return {
                isResizing: false,
                state,
                // filterVisible: true,
                width: window.innerWidth,
                materials: state.materials
            };
        },
        setup() {
            return {
                observer: undefined as ResizeObserver | undefined
            }
        }
    });
</script>

<template>
    <div class="bottom-section-container">
        <div ref="resize" @mousedown="isResizing = true" class="resize">
            <div style="display: flex; flex-direction: column; justify-content: space-around; height: 100%">
                <div style="width: 30px; height: 1px; background-color: #ffffff26;"></div>
                <div style="width: 30px; height: 1px; background-color: #ffffff26;"></div>
            </div>
        </div>
        <div class="bottom-section">
            <div ref="editor" class="editor">
                <MaterialEditor />
            </div>
            <div ref="container" class="visual-browser-container">
                <div class="browser-tools" style="position: relative;">
                    <div v-if="width > 640" style="display: flex;">
                        <div @click="addNew" class="browser-tools-add">Add +</div>
                        <div @click="deleteMats" v-if="!areAllMatsSelected()" class="browser-tools-add delete" style="width: auto">Delete selected</div>
                    </div>
                    <div v-else style="display: flex; position: absolute; flex-direction: column; right: 12px; top: 64px">
                        <div @click="addNew" class="browser-tools-add">+</div>
                        <div @click="deleteMats" v-if="!areAllMatsSelected()" class="browser-tools-add" style="margin-top:8px;"><i class="bi bi-trash-fill"></i></div>
                    </div>
                    <div v-if="width <= 640"></div>
                    <div v-if="width > 400" class="browser-tools-title">Material Browser</div>
                    <div v-else></div>
                    <div class="browser-tools-search">
                        <input ref="filter" @keyup="filter" placeholder="Filter" type="text">
                        <div class="browser-tools-search-icon">
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
                </div>
                <div @click="if (!state.justSelectedMat) state.selectedMaterials = new Set(); state.justSelectedMat = false" ref="bottomSection" class="visual-browser" style="height: 256px;">
                    <div class="visual-browser-items">
                        <MaterialItem v-for="(material, index) of materials" :index="index" :material="material" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .resize {
        background-color: var(--color-foreground-2);
        width: 100%;
        height: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .resize:hover {
        cursor: row-resize;
    }

    .bottom-section {
        background-color: var(--color-foreground);
        display: flex;
    }

    .bottom-section-container {
        z-index: 10;
        position: relative;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
    }

    .editor {
        width: 300px;
        overflow: auto;
        background-color: var(--color-foreground-1);
        border: 1px var(--color-foreground-2) solid;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .visual-browser-container {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .visual-browser {
        /* flex: 1; */
        /* height: 256px; */
        overflow: auto;
        border-top: 1px var(--color-foreground-2) solid;
        border-bottom: 1px var(--color-foreground-2) solid;
    }

    .visual-browser-items {
        display: flex;
        flex-wrap: wrap;
    }

    .browser-tools {
        height: 48px;
        background-color: var(--color-foreground-1);
        border-top: 1px var(--color-foreground-2) solid;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .browser-tools-add {
        margin-left: 32px;
        height: 32px;
        /* width: 64px; */
        padding-left: 8px;
        padding-right: 8px;
        background-color: var(--color-foreground-2);
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .browser-tools-add:hover {
        color: var(--color-primary);
        cursor: pointer;
    }

    .browser-tools-add.delete:hover {
        color: red !important;
    }

    .browser-tools-title {
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .browser-tools-search {
        margin-right: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-foreground-2);
        height: 32px;
        border-radius: 8px;
    }

    .browser-tools-search-icon {
        width: 32px;
        height: 100%;
        overflow: hidden;
        border-radius: 0px 8px 8px 0px;
        background-color: var(--color-foreground-2);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .browser-tools-search i {
        color: white;
    }

    .browser-tools-search input {
        flex: 1;
        margin-left: 8px;
    }
</style>
