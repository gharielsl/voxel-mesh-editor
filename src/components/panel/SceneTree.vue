<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({

    });
</script>

<template>
    <div class="scene-tree-browser">
        <div class="scene-tree-options">
            <h5>Show internal</h5>
            <input type="checkbox">
        </div>
        <div class="scene-tree-list">
            
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
        width: 70%;
    }
</style>
