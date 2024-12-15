<script lang="ts">
import { defineComponent } from 'vue';
import { state } from '../../state';

    export default defineComponent({
        methods: {
            resize(ev: MouseEvent) {
                if (this.isResizing) {
                    state.cursorShape = 'row-resize';
                    const bottomSection = this.$refs.bottomSection as HTMLElement;
                    if (bottomSection) {
                        bottomSection.style.minHeight = (+bottomSection.style.minHeight.replace('px', '') - ev.movementY) + 'px'
                    }
                }
            },
            mouseup() {
                if (this.isResizing) {
                    state.cursorShape = 'initial';
                }
                this.isResizing = false;
            }
        },
        mounted() {
            document.addEventListener('mouseup', this.mouseup);
            document.addEventListener('mousemove', this.resize);
        },
        unmounted() {
            document.removeEventListener('mouseup', this.mouseup);
            document.removeEventListener('mousemove', this.resize);
        },
        data() {
            return {
                isResizing: false
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
        <div ref="bottomSection" class="bottom-section" style="min-height: 256px;">
            <div class="tree-browser">
                
            </div>
            <div class="visual-browser-container">
                <div class="browser-tools">
                    <div class="browser-tools-add">Add +</div>
                    <div class="browser-tools-title">Material Browser</div>
                    <div class="browser-tools-search">
                        <input placeholder="Search" type="text">
                        <div class="browser-tools-search-icon">
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
                </div>
                <div class="visual-browser">
                    
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
        /* position: relative;
        bottom: 0;
        left: 0;
        right: 0; */
        min-height: 256px;
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

    .tree-browser {
        width: 256px;
        background-color: var(--color-foreground-1);
        border: 1px var(--color-foreground-2) solid;
    }

    .visual-browser-container {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .visual-browser {
        flex: 1;
        border-top: 1px var(--color-foreground-2) solid;
        border-bottom: 1px var(--color-foreground-2) solid;
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
