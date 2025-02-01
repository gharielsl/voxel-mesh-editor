<script lang="ts">
import * as THREE from "three";
import { defineComponent, nextTick } from 'vue';
import { state } from '../../state';
import VoxelMesh from '../../core/VoxelMesh';
import NumberInput from '../input/NumberInput.vue';
import Vector3Input from '../input/Vector3Input.vue';
import MeshObject from '../../core/MeshObject';
import { Vue3ColorPicker } from "@cyhnkckali/vue3-color-picker";
import { radToDeg } from "three/src/math/MathUtils.js";

export default defineComponent({
    components: {
        NumberInput,
        Vector3Input,
        Vue3ColorPicker
    },
    methods: {
        radToDeg,
        rgbaToHex(rgba: string) {
            const result = rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+),\s*(\d*\.?\d+)\)$/);
            const r = parseInt(result[1], 10);
            const g = parseInt(result[2], 10);
            const b = parseInt(result[3], 10);
            const a = parseFloat(result[4]);
            const red = r.toString(16).padStart(2, '0');
            const green = g.toString(16).padStart(2, '0');
            const blue = b.toString(16).padStart(2, '0');
            const alpha = Math.round(a * 255).toString(16).padStart(2, '0');
            return `#${red}${green}${blue}${alpha}`;
        },
        marchCubes(event: any) {
            if (state.selectedObject instanceof VoxelMesh) {
                state.selectedObject.marchCubes = event.target.checked;
                state.selectedObject.update();
            }
        },
        smoothNormals(event: any) {
            if (state.selectedObject instanceof VoxelMesh) {
                state.selectedObject.smoothNormals = event.target.checked;
                state.selectedObject.update();
            }
        },
        smoothGeometry(event: any) {
            if (state.selectedObject instanceof VoxelMesh) {
                state.selectedObject.smoothGeometry = event.target.checked;
                state.selectedObject.update();
            }
        },
        subdivideGeometry(event: any) {
            if (state.selectedObject instanceof VoxelMesh) {
                state.selectedObject.subdivide = event.target.checked;
                state.selectedObject.update();
            }
        },
        positionChange(v: THREE.Vector3) {
            if (state.selectedObject) {
                state.selectedObject.position.copy(v);
            }
        },
        scaleChange(v: THREE.Vector3) {
            if (state.selectedObject) {
                state.selectedObject.scale.copy(v);
            }
        },
        rotationChange(v: THREE.Vector3) {
            if (state.selectedObject) {
                state.selectedObject.rotation.x = THREE.MathUtils.degToRad(v.x);
                state.selectedObject.rotation.y = THREE.MathUtils.degToRad(v.y);
                state.selectedObject.rotation.z = THREE.MathUtils.degToRad(v.y);
            }
        },
        collapse(what: string) {
            const el = this.$refs[what] as HTMLElement;
            if ((this as any)[what + 'Open']) {
                el.style.maxHeight = 0 + 'px';
            } else {
                el.style.maxHeight = el.scrollHeight + 'px';
            }
            (this as any)[what + 'Open'] = !(this as any)[what + 'Open'];
        },
        mousedown(ev: MouseEvent) {
            if (!this.shouldColorPicker1Open) {
                this.backgroundColorPickerOpen = false;
            }
            this.shouldColorPicker1Open = false;
        },
        backgroundColorChange(newColor: string) {
            this.backgroundColor = this.rgbaToHex(newColor);
        }
    },
    mounted() {
        this.interval = setInterval(() => {
            this.$forceUpdate();
        }, 50);
        window.addEventListener('click', this.mousedown);
        this.backgroundColor = '#' + state.renderingContext().renderer.getClearColor(new THREE.Color()).getHexString();
    },
    unmounted() {
        clearInterval(this.interval);
        window.removeEventListener('click', this.mousedown);
    },
    updated() {
        ['position', 'scale', 'rotation', 'voxel'].forEach((i) => {
            const el = this.$refs[i] as HTMLElement;
            if (el && el.style && (this as any)[i + 'Open']) {
                el.style.maxHeight = el.scrollHeight + 'px';
            }
        });
    },
    data() {
        return {
            state,
            interval: 0,
            positionOpen: true,
            scaleOpen: true,
            rotationOpen: true,
            voxelOpen: true,
            backgroundColor: '#000000',
            backgroundColorPickerOpen: false
        }
    },
    setup() {
        return {
            shouldColorPicker1Open: false
        }
    }
});
</script>

<template>
    <!-- <div class="object-options-list" v-if="state.multipleSelections">
        Multiple - {{ state.selectedObject?.constructor.name }}
    </div> -->
    <div class="object-options-list" v-if="state.selectedObject">
        {{ state.selectedObject.constructor.name }}
        <div @click="collapse('position')" class="object-option-group-title" style="text-align: left;">
            <i :class="{'bi bi-caret-down-fill': positionOpen, 'bi bi-caret-right-fill': !positionOpen}"></i>
            <h5 style="margin-left: 8px;">Position</h5>
        </div>
        <div class="object-option-group" ref="position" :class="{'collapse': !positionOpen}">
            <Vector3Input 
                :xp="(state.selectedObject as MeshObject).position.x || 0" 
                :yp="(state.selectedObject as MeshObject).position.y || 0" 
                :zp="(state.selectedObject as MeshObject).position.z || 0" 
                @changeValue="positionChange"
                />
        </div>
        <div @click="collapse('scale')" class="object-option-group-title" style="text-align: left;">
            <i :class="{'bi bi-caret-down-fill': scaleOpen, 'bi bi-caret-right-fill': !scaleOpen}"></i>
            <h5 style="margin-left: 8px;">Scale</h5>
        </div>
        <div class="object-option-group" ref="scale" :class="{'collapse': !scaleOpen}">
            <Vector3Input 
                :xp="(state.selectedObject as MeshObject).scale.x || 0" 
                :yp="(state.selectedObject as MeshObject).scale.y || 0" 
                :zp="(state.selectedObject as MeshObject).scale.z || 0" 
                @changeValue="scaleChange"
                />
        </div>
        <div @click="collapse('rotation')" class="object-option-group-title" style="text-align: left;">
            <i :class="{'bi bi-caret-down-fill': rotationOpen, 'bi bi-caret-right-fill': !rotationOpen}"></i>
            <h5 style="margin-left: 8px;">Rotation</h5>
        </div>
        <div class="object-option-group" ref="rotation" :class="{'collapse': !rotationOpen}">
            <Vector3Input 
                :xp="radToDeg((state.selectedObject as MeshObject).rotation.x || 0)" 
                :yp="radToDeg((state.selectedObject as MeshObject).rotation.y || 0)" 
                :zp="radToDeg((state.selectedObject as MeshObject).rotation.z || 0)" 
                @changeValue="rotationChange"
                />
        </div>

        <div v-if="(state.selectedObject as VoxelMesh).isVoxelMesh" @click="collapse('voxel')" class="object-option-group-title" style="text-align: left;">
            <i :class="{'bi bi-caret-down-fill': voxelOpen, 'bi bi-caret-right-fill': !voxelOpen}"></i>
            <h5 style="margin-left: 8px;">Voxel mesh</h5>
        </div>
        <div v-if="(state.selectedObject as VoxelMesh).isVoxelMesh" class="object-option-group" ref="voxel" :class="{'collapse': !voxelOpen}">
            <div v-if="state.selectedObject.constructor.name === 'VoxelMesh'" class="object-option">
                <h5>March cubes</h5>
                <input @change="marchCubes" :checked="(state.selectedObject as VoxelMesh).marchCubes" type="checkbox">
            </div>
            <div v-if="(state.selectedObject as VoxelMesh).marchCubes && !(state.selectedObject as VoxelMesh).smoothGeometry" class="object-option">
                <h5>Smooth normals</h5>
                <input @change="smoothNormals" :checked="(state.selectedObject as VoxelMesh).smoothNormals" type="checkbox">
            </div>
            <div v-if="(state.selectedObject as VoxelMesh).marchCubes" class="object-option">
                <h5>Smooth</h5>
                <input @change="smoothGeometry" :checked="(state.selectedObject as VoxelMesh).smoothGeometry" type="checkbox">
            </div>
            <div v-if="(state.selectedObject as VoxelMesh).marchCubes && (state.selectedObject as VoxelMesh).smoothGeometry" class="object-option">
                <h5>Subdivide</h5>
                <input @change="subdivideGeometry" :checked="(state.selectedObject as VoxelMesh).subdivide" type="checkbox">
            </div>
        </div>
    </div>
    <div class="object-options-list" v-else>
        No object selected
        <!-- <div class="object-option-group-title" style="text-align: left;">
            <i class="bi bi-caret-down-fill"></i>
            <h5 style="margin-left: 8px;">Background</h5>
        </div>
        
        <div class="object-option-group">
            <div class="object-option">
                <h5>Color</h5>
                <div @click="backgroundColorPickerOpen = true; shouldColorPicker1Open = true;" class="color-picker-btn" :style="'background-color: ' + backgroundColor">
                    {{ backgroundColor }}
                    <Vue3ColorPicker v-if="backgroundColorPickerOpen" @update:modelValue="backgroundColorChange" class="color-picker-1" mode="solid" :modelValue="backgroundColor" :showPickerMode="false" :showColorList="false" :showEyeDrop="false" type="RGBA" theme="dark" :showAlpha="false" style="width: 256px"/>
                </div>
            </div>
            <div class="object-option">
                <h5>Sky box</h5>
                <input type="checkbox">
            </div>
        </div> -->
    </div>
    <div class="object-option-group-title" style="text-align: left;">
        <h5></h5>
    </div>
</template>

<style scoped>
    .object-option {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .object-option-group-title {
        display: flex;
        align-items: center;
        width: 90%;
    }
    .object-option-group-title:hover {
        color: var(--color-primary);
        cursor: pointer;
    }
    .object-option-group {
        width: 80%;
        padding-left: 8px;
        padding-right: 8px;
        border-radius: 8px;
        background-color: var(--color-foreground-2);
        transition: max-height 0.3s ease-in-out;
    }
    .object-option-group.collapse {
        transition: max-height 0.3s ease-out;
        max-height: 0;
        overflow: hidden;
    }
    .object-options-list {
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .color-picker-btn {
        position: relative;
        color: #676767;
        border: 1px white solid;
        border-radius: 4px;
        width: 144px;
        height: 24px;
    }

    .color-picker-btn:hover {
        cursor: pointer;
    }

    .color-picker-1 {
        position: absolute;
        top: 26px;
        left: -111px;
        border: 1px #676767 solid;
    }
</style>