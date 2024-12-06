<script lang="ts">
    import { defineComponent } from 'vue';
    import SceneTree from './SceneTree.vue';

    export default defineComponent({
        components: {
            SceneTree
        }
    });
</script>

<template>
    <div class="properties-panel">
        <div>

        </div>
        <div class="properties-panel-content">
            <div class="scene-tree">
                <SceneTree />
            </div>
            <div class="properties-editor">

            </div>
        </div>
        <div>
            
        </div>
    </div>
</template>

<style scoped>
    .properties-panel {
        height: calc(100% - 2px);
        width: 256px;
        background-color: var(--color-background);
        display: flex;
        flex-direction: column;
        border: 1px var(--color-foreground-2) solid;
    }
</style>
