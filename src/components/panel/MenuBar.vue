<script lang="ts">
    import * as THREE from 'three';
    import { defineComponent } from 'vue';
    import { state } from '../../state';
    import VoxelMesh from '../../core/VoxelMesh';
import TransformationContext from '../../core/TransformationContext';

    export default defineComponent({
        methods: {
            mouseIn(target: string) {
                (this as any)[target] = true;
            },
            mouseOut(target: string) {
                (this as any)[target] = false;
            },
            addVoxelMesh() {
                const vo = new VoxelMesh();
                vo.draw(new THREE.Vector3(), 'square', 5, 1);
                vo.update();
                state.renderingContext?.clickableObjects.push(vo);
                state.renderingContext?.scene.add(vo);
                if (state.currentMode === 'object') {
                    vo.select();
                    TransformationContext.INSTANCE.selectedObjects.push(vo);
                    if (state.renderingContext?.outlinePass?.selectedObjects) {
                        state.renderingContext.outlinePass.selectedObjects = TransformationContext.INSTANCE.selectedObjects;
                    }
                }
                this.mouseInAdd = false;
            },
            addVoxel() {
                const vo = new VoxelMesh();
                vo.draw(new THREE.Vector3(), 'square', 0, 1);
                vo.update();
                state.renderingContext?.clickableObjects.push(vo);
                state.renderingContext?.scene.add(vo);
                if (state.currentMode === 'object') {
                    vo.select();
                    TransformationContext.INSTANCE.selectedObjects.push(vo);
                    if (state.renderingContext?.outlinePass?.selectedObjects) {
                        state.renderingContext.outlinePass.selectedObjects = TransformationContext.INSTANCE.selectedObjects;
                    }
                }
                this.mouseInAdd = false;
            }
        },
        data() {
            return {
                mouseInFile: false,
                mouseInEdit: false,
                mouseInAdd: false
            }
        }
    });
</script>

<template>
    <div class="top-section">
        <div class="menu-bar">
            <div @mouseenter="mouseIn('mouseInFile')" @mouseleave="mouseOut('mouseInFile')" class="menu-item">
                <div :class="'menu-item-button ' + (mouseInFile ? 'menu-item-button-open' : '')">
                    File
                </div>
                <div v-if="mouseInFile" class="menu-list">
                    <div class="menu-list-item">AAA</div>
                    <div class="menu-list-item">AAA</div>
                    <div class="menu-list-item">AAA</div>
                </div>
            </div>
            <div @mouseenter="mouseIn('mouseInEdit')" @mouseleave="mouseOut('mouseInEdit')" class="menu-item">
                <div :class="'menu-item-button ' + (mouseInEdit ? 'menu-item-button-open' : '')">
                    Edit
                </div>
                <div v-if="mouseInEdit" class="menu-list">
                    <div class="menu-list-item">AAA</div>
                    <div class="menu-list-item">AAA</div>
                    <div class="menu-list-item">AAA</div>
                </div>
            </div>
            <div @mouseenter="mouseIn('mouseInAdd')" @mouseleave="mouseOut('mouseInAdd')" class="menu-item">
                <div :class="'menu-item-button ' + (mouseInAdd ? 'menu-item-button-open' : '')">
                    Add
                </div>
                <div v-if="mouseInAdd" class="menu-list">
                    <div @click="addVoxelMesh" class="menu-list-item">Voxel Mesh</div>
                    <div @click="addVoxel" class="menu-list-item">Voxel</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .top-section {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
    }

    .menu-bar {
        width: 100%;
        height: 32px;
        background-color: var(--color-foreground-1);
        border-bottom: 1px var(--color-border) solid;
        display: flex;
    }

    .menu-item {
        position: relative;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 8px;
        padding-right: 8px;
    }

    .menu-list {
        position: absolute;
        z-index: 999;
        top: 32px;
        left: 0;
        width: 233px;
        display: flex;
        flex-direction: column;
        background-color: var(--color-foreground-1);
        border: 1px solid var(--color-foreground-2);
        border-radius: 6px;
        overflow: hidden;
    }

    .menu-list-item {
        border-bottom: 1px solid var(--color-foreground-2);
        padding-top: 2px;
        padding-bottom: 2px;
    }

    .menu-list-item:hover {
        background-color: var(--color-foreground-2-bright);
        cursor: pointer;
    }

    .menu-item-button {
        padding-left: 8px;
        padding-right: 8px;
    }

    .menu-item-button:hover {
        cursor: pointer;
    }

    .menu-item-button-open {
        padding-left: 7px;
        padding-right: 7px;
        border-radius: 8px;
        border: 1px var(--color-secondary) dashed;
    }
</style>
