<script lang="ts">
    import { defineComponent, ref } from 'vue';
import RenderingContext from '../core/RenderingContext';

    let renderingContext: RenderingContext;

    export default defineComponent({
        mounted() {
            const canvas = document.getElementById('editor-canvas') as HTMLCanvasElement;
            const canvasContainer = document.getElementById('canvas-container') as HTMLElement;
            if (canvas != null) {
                renderingContext = new RenderingContext(canvas, canvasContainer);
            }
        },
        deactivated() {
            renderingContext.destroy();
        }
    });
</script>

<template>
    <div id="canvas-container">
        <canvas id="editor-canvas"></canvas>
    </div>
</template>

<style scoped>
    #canvas-container {
        height: 100%;
    }

    canvas {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
 