<script lang="ts">
    import { defineComponent } from 'vue';
    import SceneTree from './SceneTree.vue';
    import ObjectProperties from './ObjectProperties.vue';
    import { Splitpanes, Pane } from 'splitpanes';

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
            }
        },
        mounted() {
            this.panel = document.querySelector(".properties-panel") as Element;
            this.observer = new ResizeObserver(this.resized);
            this.observer.observe(this.panel);
            this.resized();
        },
        unmounted() {
            this.observer?.disconnect();
        },
        data() {
            return {
                observer: undefined as ResizeObserver | undefined,
                panel: undefined as Element | undefined,
                panelHeight: 0
            }
        }
    });
</script>

<template>
    <div class="properties-panel">
        <splitpanes class="default-theme" horizontal :style="`height: ${panelHeight + 'px'}`">
            <pane min-size="10">
                <SceneTree />
            </pane>
            <pane min-size="10">
                <ObjectProperties />
            </pane>
        </splitpanes>
        <!-- <div class="properties-panel-content">
            <div class="scene-tree">
                <SceneTree />
            </div>
            <div class="properties-editor">

            </div>
        </div>
        <div>
            
        </div> -->
    </div>
</template>

<style scoped>
    .properties-panel {
        height: calc(100vh - 35px);
        width: 256px;
        background-color: var(--color-background);
        display: flex;
        flex-direction: column;
        border: 1px var(--color-foreground-2) solid;
        overflow: hidden;
    }
</style>
