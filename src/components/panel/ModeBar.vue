<script lang="ts">
    import { defineComponent } from 'vue';
    import Multiselect from 'vue-multiselect'
    import 'vue-multiselect/dist/vue-multiselect.css';

    export default defineComponent({
        components: {
            Multiselect
        },
        data: () => {
            return {
                options: ['Object mode', 'Geometry mode']
            };
        }
    });
</script>

<template>
    <div class="mode-bar">
        <div class="mode-bar-left">
            <div class="mode-bar-item">
                <div class="mode-bar-item-select">
                    <select>
                        <option value="" disabled selected>Render Mode</option>
                        <option value="Material Preview">Material Preview</option>
                        <option value="Unlit">Unlit</option>
                        <option value="Wireframe">Wireframe</option>
                        <option value="Lit">Lit</option>
                    </select>
                </div>
            </div>
            <div class="mode-bar-item">
                <div class="mode-bar-item-select">
                    <div class="mode-button" style="background-color: var(--color-secondary);">
                        <i class="bi bi-box-fill"></i>
                        Object Mode
                    </div>
                </div>
            </div>
            <div class="mode-bar-item">
                <div class="mode-bar-item-select">
                    <div class="mode-button">
                        <i class="bi bi-hammer"></i>
                        Sculpt Mode
                    </div>
                </div>
            </div>
            <div class="mode-bar-item">
                <div class="mode-bar-brush-size">
                    <div class="mode-bar-brush-size-icon">
                        Brush size
                    </div>
                    <input placeholder="px" type="number">
                </div>
            </div>
            <div class="mode-bar-item">
                <div class="mode-bar-mat-preview">
                    <div class="mode-bar-mat-preview-icon">
                        Voxel color
                    </div>
                    <input placeholder="px" type="color">
                </div>
            </div>
            <div class="mode-bar-item">
                <div class="mode-bar-mat-preview">
                    <div class="mode-bar-mat-preview-icon">
                        Voxel material
                    </div>
                    <input placeholder="px" type="color">
                </div>
            </div>
        </div>
        <div title="snap" class="mode-bar-right">
            <div class="mode-bar-item">
                <div class="mode-bar-item-select" style="width: 48px;">
                    <div class="mode-button" style="background-color: var(--color-secondary);">
                        <i class="bi bi-magnet-fill"></i>
                    </div>
                </div>
            </div>
            <div title="grid" class="mode-bar-item">
                <div class="mode-bar-item-select" style="width: 48px;">
                    <div class="mode-button" style="background-color: var(--color-secondary);">
                        <i class="bi bi-grid-3x3"></i>
                    </div>
                </div>
            </div>
            <div class="mode-bar-item">
                <div class="mode-bar-item-select">
                    <div class="mode-button">
                        <i class="bi bi-globe-americas"></i>
                        World Material
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .mode-bar {
        width: 100%;
        height: 64px;
        background-color: var(--color-background);
        border: 1px var(--color-foreground-2) solid;
        display: flex;
        justify-content: space-between;
    }

    .mode-bar-left, .mode-bar-right {
        display: flex;
        height: 100%;
    }

    .mode-bar-item {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 8px;
        padding-right: 8px;
    }

    .mode-bar-item-select {
        padding-left: 8px;
        padding-right: 4px;
        display: flex;
    }

    .mode-select {
        width: 200px;
        background-color: var(--color-background);
        color: var(--text-color);
        outline: none;
        padding: 4px;
        border: 1px var(--color-foreground-2) solid;
        border-radius: 8px;
    }

    .multiselect__tags {
        background: none !important;
        border: none !important;
    }

    .mode-button {
        background-color: var(--color-foreground-2);
        width: 152px;
        height: 48px;
        border-radius: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .mode-button:hover {
        color: var(--color-primary);
        cursor: pointer;
    }

    .mode-bar-brush-size {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-foreground-2);
        height: 48px;
        border-radius: 8px;
    }

    .mode-bar-brush-size input {
        width: 120px;
        margin-left: 8px;
    }

    .mode-bar-brush-size-icon {
        /* width: 32px; */
        padding-left: 4px;
        padding-right: 4px;
        height: 100%;
        overflow: hidden;
        border-radius: 8px 0px 0px 8px;
        background-color: var(--color-foreground-1);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mode-bar-mat-preview {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-foreground-2);
        height: 48px;
        border-radius: 8px;
    }

    .mode-bar-mat-preview input {
        width: 30px;
        margin-left: 4px;
        margin-right: 4px;
    }

    .mode-bar-mat-preview-icon {
        /* width: 32px; */
        padding-left: 4px;
        padding-right: 4px;
        height: 100%;
        overflow: hidden;
        border-radius: 8px 0px 0px 8px;
        background-color: var(--color-foreground-1);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
