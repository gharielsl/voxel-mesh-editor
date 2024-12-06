<script lang="ts">
    import { defineComponent, reactive } from 'vue';

    const { transformState } = reactive({
        transformState: {
            mode: 'select'
        }
    });

    export default defineComponent({

    });
</script>

<template>
    <div class="tool-bar">
        <div title="select" class="tool-bar-item" style="background-color: var(--color-secondary);">
            <i class="bi bi-cursor-fill"></i>
        </div>
        <div title="move" class="tool-bar-item">
            <i class="bi bi-arrows-move"></i>
        </div>
        <div title="scale" class="tool-bar-item">
            <i class="bi bi-arrows-fullscreen"></i>
        </div>
        <div title="rotate" class="tool-bar-item">
            <i class="bi bi-arrow-repeat"></i>
        </div>
    </div>
</template>

<style scoped>
    .tool-bar {
        position: absolute;
        top: 8px;
        right: 8px;
        z-index: 5;
        display: flex;
    }

    .tool-bar-item {
        width: 48px;
        height: 32px;
        border-radius: 8px;
        background-color: var(--color-foreground-1);
        margin: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tool-bar-item:hover {
        color: var(--color-primary);
    }
</style>
