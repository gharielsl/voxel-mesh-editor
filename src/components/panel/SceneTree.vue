<script lang="ts">
import { defineComponent } from 'vue';
import SceneTreeItem from './SceneTreeItem.vue';
import { state } from '../../state';

export default defineComponent({
    components: {
        SceneTreeItem
    },
    data() {
        return {
            state
        }
    }
});
</script>

<template>
    <div class="scene-tree-browser">
        <div class="scene-tree-options">
            <h5>Show internal</h5>
            <input @change="state.treeShowInternal = ($event.target as any).checked" type="checkbox">
        </div>
        <div class="scene-tree-list">
            <SceneTreeItem :default-collapsed="false" :item="state?.renderingContextProxy?.scene" :level="0" :index="0" />
        </div>
    </div>
</template>

<style scoped>
    .scene-tree-browser {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .scene-tree-options {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
    }

    .scene-tree-list {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
