<script lang="ts">
    import { defineComponent } from 'vue';
    import SceneTree from './SceneTree.vue';
    import ObjectProperties from './ObjectProperties.vue';
    import { Splitpanes, Pane } from 'splitpanes';
import { state } from '../../state';

    export default defineComponent({
        components: {
            SceneTree,
            Splitpanes,
            Pane,
            ObjectProperties
        },
        methods: {
            resized() {
                this.panelHeight = this.panel?.clientHeight || 0;
                const properties = (this.$refs.properties as any)?.$el as HTMLElement;
                if (properties) {
                    if ((document.getElementById('editor-canvas') as HTMLCanvasElement).width < 864) {
                        properties.style.width = (window.innerWidth - 864) + 'px';
                    }
                    if (+properties.style.width.replace('px', '') < 256) {
                        properties.style.width = '256px';
                    }
                }
            },
            resize(ev: MouseEvent) {
                if (this.isResizing) {
                    state.cursorShape = 'col-resize';
                    const properties = (this.$refs.properties as any)?.$el as HTMLElement;
                    if (properties) {
                        properties.style.width = (+properties.style.width.replace('px', '') - ev.movementX) + 'px';
                    }
                    if (+properties.style.width.replace('px', '') < 256) {
                        properties.style.width = '256px';
                    }
                }
            },
            mouseUp() {
                if (this.isResizing) {
                    state.cursorShape = 'initial';
                }
                this.isResizing = false;
            }
        },
        mounted() {
            this.panel = document.querySelector(".properties-panel") as Element;
            this.observer = new ResizeObserver(this.resized);
            this.observer.observe(this.panel);
            document.addEventListener('mousemove', this.resize);
            document.addEventListener('mouseup', this.mouseUp);
            window.addEventListener('resize', this.resized);
            this.resized();
        },
        unmounted() {
            this.observer?.disconnect();
            document.removeEventListener('mousemove', this.resize);
            document.removeEventListener('mouseup', this.mouseUp);
            window.removeEventListener('resize', this.resized);
        },
        data() {
            return {
                observer: undefined as ResizeObserver | undefined,
                panel: undefined as Element | undefined,
                panelHeight: 0,
                isResizing: false
            }
        }
    });
</script>

<template>
    <div class="properties-panel">
        <div @mousedown="isResizing = true" class="resize">
            <div style="display: flex; justify-content: space-around; width: 100%;">
                <div style="width: 1px; height: 30px; background-color: #ffffff26;"></div>
                <div style="width: 1px; height: 30px; background-color: #ffffff26;"></div>
            </div>
        </div>
        <splitpanes ref="properties" class="default-theme" horizontal :style="`height: ${panelHeight + 'px'}`">
            <pane min-size="10">
                <SceneTree />
            </pane>
            <pane min-size="10" size="65">
                <ObjectProperties />
            </pane>
        </splitpanes>
    </div>
</template>

<style scoped>
    .properties-panel {
        height: calc(100vh - 35px);
        background-color: var(--color-background);
        display: flex;
        border: 1px var(--color-foreground-2) solid;
        overflow: hidden;
    }

    .resize {
        background-color: var(--color-foreground-2);
        height: 100%;
        width: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .resize:hover {
        cursor: col-resize;
    }
</style>
