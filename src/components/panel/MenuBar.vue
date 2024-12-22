<script lang="ts">
    import * as THREE from 'three';
    import { defineComponent, nextTick } from 'vue';
    import { state } from '../../state';
    import VoxelMesh from '../../core/VoxelMesh';
import TransformationContext from '../../core/TransformationContext';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import MeshObject from '../../core/MeshObject';

    export default defineComponent({
        methods: {
            mouseIn(target: string) {
                (this as any)[target.replace('mouse', 'hover')] = true;
                if (!this.isAnyOpen) return;
                clearTimeout(this.timeout);
                this.timeout = 0;
                (this as any)[target] = true;
            },
            mouseOut(target: string) {
                (this as any)[target.replace('mouse', 'hover')] = false;
                this.timeout = setTimeout(() => {
                    this.isAnyOpen = false;
                }, 1000);
                (this as any)[target] = false;
            },
            close(target: string) {
                clearTimeout(this.timeout);
                this.timeout = 0;
                (this as any)[target.replace('mouse', 'hover')] = false;
                (this as any)[target] = false;
                this.isAnyOpen = false;
            },
            addVoxelMesh() {
                const vo = new VoxelMesh();
                vo.draw(new THREE.Vector3(), 'square', 5, 1);
                vo.update();
                const renderingContext = state.renderingContext();
                renderingContext?.clickableObjects.push(vo);
                renderingContext?.scene.add(vo);
                if (state.currentMode === 'object') {
                    vo.select();
                    TransformationContext.INSTANCE.selectedObjects.push(vo);
                    if (renderingContext?.outlinePass?.selectedObjects) {
                        renderingContext.outlinePass.selectedObjects = TransformationContext.INSTANCE.selectedObjects;
                    }
                }
                this.close("mouseInAdd");
            },
            addVoxel() {
                const vo = new VoxelMesh();
                vo.draw(new THREE.Vector3(), 'square', 0, 1);
                vo.update();
                const renderingContext = state.renderingContext();
                renderingContext?.clickableObjects.push(vo);
                renderingContext?.scene.add(vo);
                if (state.currentMode === 'object') {
                    vo.select();
                    TransformationContext.INSTANCE.selectedObjects.push(vo);
                    if (renderingContext.outlinePass?.selectedObjects) {
                        renderingContext.outlinePass.selectedObjects = TransformationContext.INSTANCE.selectedObjects;
                    }
                }
                this.close("mouseInAdd");
            },
            importFile() {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = '.glb,.gltf';
                input.multiple = false;
                input.addEventListener('change', (ev: Event) => {
                    if (!input.files?.[0]) {
                        return;
                    }
                    const reader = new FileReader();
                    reader.onload = () => {
                        const loader = new GLTFLoader();
                        loader.load(reader.result as string, (scene) => {
                            const meshObject = new MeshObject(new THREE.BoxGeometry(0, 0, 0), new THREE.MeshBasicMaterial());
                            scene.scene.traverse((child) => {
                                (child as any).meshObject = meshObject;
                                // child.userData.meshObject = meshObject;
                            });
                            meshObject.name = 'Imported';
                            meshObject.add(scene.scene);
                            const context = state.renderingContext();
                            if (context) {
                                context.scene.add(meshObject);
                                context.clickableObjects.push(meshObject);
                                context.selectObjects([meshObject]);
                            }
                        });
                    }
                    reader.onerror = () => {
                        
                    }
                    const file = input.files[0];
                    reader.readAsDataURL(file);
                });
                input.click();
                this.close("mouseInFile");
            },
            gitHub() {
                open('https://github.com/gharielsl/voxel-mesh-editor');
            }
        },
        data() {
            return {
                mouseInFile: false,
                mouseInEdit: false,
                mouseInAdd: false,
                hoverInFile: false,
                hoverInEdit: false,
                hoverInAdd: false,
                isAnyOpen: false,
                state
            }
        },
        setup() {
            return {
                timeout: 0
            }
        }
    });
</script>

<template>
    <div class="top-section">
        <div class="menu-bar">
            <div class="menu-left">
                <i title="GitHub" @click="gitHub" class="bi bi-github gh"></i>
                <div @click="isAnyOpen=true;mouseIn('mouseInFile')" @mouseenter="mouseIn('mouseInFile')" @mouseleave="mouseOut('mouseInFile')" class="menu-item">
                    <div :class="'menu-item-button ' + ((mouseInFile || hoverInFile) ? 'menu-item-button-open' : '')">
                        File
                    </div>
                    <div v-if="mouseInFile" class="menu-list">
                        <div class="menu-bar-item-btn">
                            <div>Open</div>
                            <div style="font-size: small; color: var(--color-text-disabled)">(Ctrl + O)</div>
                        </div>
                        <div class="menu-bar-item-btn">
                            <div>Save</div>
                            <div style="font-size: small; color: var(--color-text-disabled)">(Ctrl + S)</div>
                        </div>
                        <div @click.stop="importFile" class="menu-bar-item-btn">
                            <div>Import GLB/GLTF</div>
                            <div style="font-size: small; color: var(--color-text-disabled)"></div>
                        </div>
                        <div @click.stop="state.setExportOpen(true); close('mouseInFile')" class="menu-bar-item-btn">
                            <div>Export</div>
                            <div style="font-size: small; color: var(--color-text-disabled)"></div>
                        </div>
                    </div>
                </div>
                <div @click="isAnyOpen=true;mouseIn('mouseInEdit')" @mouseenter="mouseIn('mouseInEdit')" @mouseleave="mouseOut('mouseInEdit')" class="menu-item">
                    <div :class="'menu-item-button ' + ((mouseInEdit || hoverInEdit) ? 'menu-item-button-open' : '')">
                        Edit
                    </div>
                    <div v-if="mouseInEdit" class="menu-list">
                        <div @click.stop="state.renderingContext()?.copy();close('mouseInEdit')" class="menu-bar-item-btn">
                            <div>Copy</div>
                            <div style="font-size: small; color: var(--color-text-disabled)">(Ctrl + C)</div>
                        </div>
                        <div @click.stop="state.renderingContext()?.paste();close('mouseInEdit')" class="menu-bar-item-btn">
                            <div>Paste</div>
                            <div style="font-size: small; color: var(--color-text-disabled)">(Ctrl + V)</div>
                        </div>
                        <div @click.stop="state.renderingContext()?.undo();close('mouseInEdit')" class="menu-bar-item-btn">
                            <div>Undo</div>
                            <div style="font-size: small; color: var(--color-text-disabled)">(Ctrl + Z)</div>
                        </div>
                    </div>
                </div>
                <div @click="isAnyOpen=true;mouseIn('mouseInAdd')" @mouseenter="mouseIn('mouseInAdd')" @mouseleave="mouseOut('mouseInAdd')" class="menu-item">
                    <div :class="'menu-item-button ' + ((mouseInAdd || hoverInAdd) ? 'menu-item-button-open' : '')">
                        Add
                    </div>
                    <div v-if="mouseInAdd" class="menu-list">
                        <div @click.stop="addVoxelMesh" class="menu-bar-item-btn">
                            <div>Voxel Mesh</div>
                            <div style="font-size: small; color: var(--color-text-disabled)">(5x5x5)</div>
                        </div>
                        <div @click.stop="addVoxel" class="menu-bar-item-btn">
                            <div>Voxel</div>
                            <div style="font-size: small; color: var(--color-text-disabled)">(1x1x1)</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu-right">
                
            </div>
        </div>
    </div>
</template>

<style scoped>
    .gh {
        margin-top: 5px;
        margin-left: 11px;
        margin-right: 4px;
        transform: scale(1.3);
    }

    .gh:hover {
        cursor: pointer;
        color: var(--color-secondary);
    }

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
        justify-content: space-between;
    }

    .menu-left {
        height: 100%;
        flex: 1;
        display: flex;
    }

    .menu-right {
        height: 100%;
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

    .menu-bar-item-btn {
        border-bottom: 1px solid var(--color-foreground-2);
        padding-top: 2px;
        padding-bottom: 2px;
        padding-left: 12px;
        padding-right: 12px;
        display: flex;
        justify-content: space-between;
    }

    .menu-bar-item-btn:hover {
        background-color: var(--color-foreground-2-bright);
        cursor: pointer;
    }
</style>
