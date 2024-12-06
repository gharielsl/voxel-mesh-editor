<script lang="ts">
    import { defineComponent } from 'vue';
    import MenuBar from '../components/panel/MenuBar.vue';
    import PropertiesEditor from '../components/panel/PropertiesEditor.vue';
    import AssetBrowser from '../components/panel/AssetBrowser.vue';
    import ModeBar from '../components/panel/ModeBar.vue';
    import ToolBar from '../components/panel/ToolBar.vue';
    import TransformBar from '../components/panel/TransformBar.vue';
    import Axis from '../components/panel/Axis.vue';
    import CanvasEditor from '../components/CanvasEditor.vue';

    export default defineComponent({
        components: {
            MenuBar,
            PropertiesEditor,
            AssetBrowser,
            ModeBar,
            ToolBar,
            TransformBar,
            Axis,
            CanvasEditor
        }
    });
    
</script>

<template>
    <div class="page">
        <MenuBar />
        <div class="page-row">
            <div class="page-content">
                <ModeBar />
                <div class="canvas-container">
                    <ToolBar />
                    <TransformBar />
                    <Axis />
                    <CanvasEditor />
                </div>
                <AssetBrowser />
            </div>
            <div>
                <PropertiesEditor />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .page {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
    }

    .page-row {
        flex: 1;
        display: flex;
    }

    .page-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        background-color: black;
    }

    .canvas-container {
        flex: 1;
        position: relative;
    }
</style>
 