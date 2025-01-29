<script lang="ts">
import { defineComponent, nextTick } from 'vue';
import { Vue3ColorPicker } from '@cyhnkckali/vue3-color-picker';
import ImageUpload from '../input/ImageUpload.vue';
import { state } from '../../state';
import { VoxelMaterial } from '../../types/default';

export default defineComponent({
    components: {
        Vue3ColorPicker,
        ImageUpload
    },
    methods: {
        materialUpdate() {
            window.dispatchEvent(new CustomEvent("materialedit"));
        },
        colorChange(value: string) {
            if (state.selectedMaterial) {
                state.selectedMaterial.color = value;
            }
        },
        selectTexture(value: string) {
            if (state.selectedMaterial) {
                state.selectedMaterial.texture = value;
                this.materialUpdate();
            }
        },
        selectNormal(value: string) {
            if (state.selectedMaterial) {
                state.selectedMaterial.normal = value;
                this.materialUpdate();
            }
        },
        mouseUp() {
            if (this.isPickingColor) {
                this.materialUpdate();
                this.isPickingColor = false;
            }
        },
        pickMat() {
            state.cursorShape = 'url(\'/voxel-mesh-editor/img/eyedropper.svg\'), auto';
            state.isPickingMat = true;
            const handlemousedown = (ev: MouseEvent) => {
                if (ev.button !== 0) {
                    return;
                }
                state.cursorShape = 'unset';
                const rect = state.renderingContext().canvas.getBoundingClientRect();
                const isInsideCanvas =
                    ev.clientX >= rect.left &&
                    ev.clientX <= rect.right &&
                    ev.clientY >= rect.top &&
                    ev.clientY <= rect.bottom;
                if (!isInsideCanvas) {
                    state.isPickingMat = false;
                }
                window.removeEventListener('mousedown', handlemousedown);
            }
            window.addEventListener('mousedown', handlemousedown);
        }
    },
    mounted() {
        window.addEventListener("mouseup", this.mouseUp);
    },
    unmounted() {
        window.removeEventListener("mouseup", this.mouseUp);
    },
    data() {
        return {
            colorOpen: false,
            textureOpen: false,
            normalOpen: false,
            nextTick,
            state,
            isPickingColor: false
        }
    },
    setup() {
        return {
            lastMaterialUpdate: 0
        }
    }
});

</script>

<template>
    <div class="material-editor">
        <div class="material-editor-title">
            <div @click="pickMat" :class="{'btn': true, 'pick': state.isPickingMat}"><i class="bi bi-eyedropper"></i></div>
            <div>Selected - Material {{ state.materials.indexOf(state.selectedMaterial as VoxelMaterial) }}</div>
            <div></div>
        </div>
    </div>
    <div v-if="state.selectedMaterial" class="material-properties">
        <div :class="{'object-option-group': true, 'color': true, 'collapse': !colorOpen}" style="margin-top: 8px;">
            <div @click="colorOpen = !colorOpen" class="group-title">
                <i :class="colorOpen ? 'bi bi-caret-down-fill' : 'bi bi-caret-right-fill'"></i>
                <h5 style="margin-left: 8px;">Color</h5>
            </div>
            <div @mousedown="isPickingColor = true" @keyup="materialUpdate" class="material-property">
                <Vue3ColorPicker @update:modelValue="colorChange" :modelValue="state.selectedMaterial.color || '#ffffff'" mode="solid" :showPickerMode="false" :showColorList="false" :showEyeDrop="false" type="RGBA" theme="dark" :showAlpha="false" style="width: 256px"/>
            </div>
        </div>
        <div :class="{'object-option-group': true, 'collapse': !textureOpen}" style="margin-top: 8px;">
            <div @click="textureOpen = !textureOpen" class="group-title">
                <i :class="textureOpen ? 'bi bi-caret-down-fill' : 'bi bi-caret-right-fill'"></i>
                <h5 style="margin-left: 8px;">Texture</h5>
            </div>
            <div class="material-property">
                <ImageUpload :value="state.selectedMaterial?.texture" @selectImage="selectTexture" />
            </div>
        </div>
        <div :class="{'object-option-group': true, 'collapse': !normalOpen}" style="margin-top: 8px;margin-bottom: 8px;">
            <div @click="normalOpen = !normalOpen" class="group-title">
                <i :class="normalOpen ? 'bi bi-caret-down-fill' : 'bi bi-caret-right-fill'"></i>
                <h5 style="margin-left: 8px;">Normal Texture</h5>
            </div>
            <div class="material-property">
                <ImageUpload :value="state.selectedMaterial?.normal" @selectImage="selectNormal" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .material-editor {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .material-properties {
        display: flex;
        flex-direction: column;
        width: 90%;
    }

    .material-property {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .material-editor-title {
        height: 48px;
        width: 90%;
        border-bottom: 1px var(--color-foreground-2) solid;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .object-option-group {
        border-radius: 8px;
        padding: 4px;
        background-color: var(--color-background);
        height: 288px;
        transition: height 0.3s ease-in;
        overflow: hidden;
    }

    .object-option-group.color {
        height: 320px;
        transition: height 0.3s ease-in;
    }

    .object-option-group.collapse {
        height: 32px;
        transition: height 0.3s ease-out;
    }

    .group-title {
        height: 32px;
        margin-bottom: 4px;
        font-weight: bold;
        display: flex;
        align-items: center;
        margin-left: 4px;
    }

    .group-title:hover {
        cursor: pointer;
        color: var(--color-primary)
    }

    .btn {
        height: 32px;
        /* width: 64px; */
        padding-left: 8px;
        padding-right: 8px;
        background-color: var(--color-foreground-2);
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn:hover {
        color: var(--color-primary);
        cursor: pointer;
    }

    .btn.pick {
        background-color: var(--color-secondary);
    }

    .btn.pick:hover {
        color: var(--color-text);
    }

    h5 {
        margin: 0
    }
</style>