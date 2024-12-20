<script lang="ts">
import { defineComponent } from 'vue';
import { state } from '../../state';
import MaterialItem from './MaterialItem.vue';
import MaterialEditor from './MaterialEditor.vue';
import { VoxelMaterial } from '../../types/default';

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
            mouseup() {
                if (this.isResizing) {
                    state.cursorShape = 'initial';
                }
                this.isResizing = false;
            },
            addNew() {
                state.materials.push({ color: '#ffffff' });
                window.dispatchEvent(new CustomEvent("materialedit"));
            }
        },
        mounted() {
            document.addEventListener('mouseup', this.mouseup);
            document.addEventListener('mousemove', this.resize);
            state.selectedMaterial = state.materials[0];
            const bottomSection = this.$refs.bottomSection as HTMLElement;
            const editor = this.$refs.editor as HTMLElement;
            if (bottomSection && editor) {
                editor.style.height = (+bottomSection.style.height.replace('px', '') + 48) + 'px';
            }
        },
        unmounted() {
            document.removeEventListener('mouseup', this.mouseup);
            document.removeEventListener('mousemove', this.resize);
        },
        data() {
            return {
                isResizing: false,
                state
            };
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
            <div class="visual-browser-container">
                <div class="browser-tools">
                    <div @click="addNew" class="browser-tools-add">Add +</div>
                    <div class="browser-tools-title">Material Browser</div>
                    <div class="browser-tools-search">
                        <input placeholder="Filter" type="text">
                        <div class="browser-tools-search-icon">
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
                </div>
                <div ref="bottomSection" class="visual-browser" style="height: 256px;">
                    <div class="visual-browser-items">
                        <MaterialItem v-for="(material, index) of state.materials" :index="index" :material="material" />
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
        width: 64px;
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
