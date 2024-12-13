<script lang="ts">
import * as THREE from "three";
import { defineComponent } from 'vue';
import { state } from '../../state';
import VoxelMesh from '../../core/VoxelMesh';
import NumberInput from '../input/NumberInput.vue';
import Vector3Input from '../input/Vector3Input.vue';
import MeshObject from '../../core/MeshObject';

export default defineComponent({
    components: {
        NumberInput,
        Vector3Input
    },
    methods: {
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
                state.selectedObject.rotation.x = v.x;
                state.selectedObject.rotation.y = v.y;
                state.selectedObject.rotation.z = v.z;
            }
        }
    },
    mounted() {
        this.interval = setInterval(() => {
            this.$forceUpdate();
        }, 50);
    },
    unmounted() {
        clearInterval(this.interval);
    },
    data() {
        return {
            state,
            interval: 0
        }
    }
});
</script>

<template>
    <div class="object-options-list" v-if="state.multipleSelections">
        Multiple - {{ state.selectedObject?.constructor.name }}
    </div>
    <div class="object-options-list" v-else-if="state.selectedObject">
        {{ state.selectedObject.constructor.name }}
        <div class="object-option-group-title" style="text-align: left;">
            <h5>Position</h5>
        </div>
        <div class="object-option-group">
            <Vector3Input 
                :xp="(state.selectedObject as MeshObject).position.x || 0" 
                :yp="(state.selectedObject as MeshObject).position.y || 0" 
                :zp="(state.selectedObject as MeshObject).position.z || 0" 
                @changeValue="positionChange"
                />
        </div>
        <div class="object-option-group-title" style="text-align: left;">
            <h5>Scale</h5>
        </div>
        <div class="object-option-group">
            <Vector3Input 
                :xp="(state.selectedObject as MeshObject).scale.x || 0" 
                :yp="(state.selectedObject as MeshObject).scale.y || 0" 
                :zp="(state.selectedObject as MeshObject).scale.z || 0" 
                @changeValue="scaleChange"
                />
        </div>
        <div class="object-option-group-title" style="text-align: left;">
            <h5>Rotation</h5>
        </div>
        <div class="object-option-group">
            <Vector3Input 
                :xp="(state.selectedObject as MeshObject).rotation.x || 0" 
                :yp="(state.selectedObject as MeshObject).rotation.y || 0" 
                :zp="(state.selectedObject as MeshObject).rotation.z || 0" 
                @changeValue="rotationChange"
                />
        </div>
        <!-- <div class="object-option-group">
            <div class="object-option">
                <h5>X:</h5>
                <NumberInput @changeValue="positionXChange" unit="m" :value="state.selectedObject.position.x" />
            </div>
            <div class="object-option">
                <h5>Y:</h5>
                <NumberInput @changeValue="positionYChange" unit="m" :value="state.selectedObject.position.y" />
            </div>
            <div class="object-option">
                <h5>Z:</h5>
                <NumberInput @changeValue="positionZChange" unit="m" :value="state.selectedObject.position.z" />
            </div>
        </div> -->

        <div class="object-option-group-title" style="text-align: left;">
            <h5>Voxel mesh</h5>
        </div>
        <div class="object-option-group">
            <div v-if="state.selectedObject.constructor.name === 'VoxelMesh'" class="object-option">
                <h5>March cubes</h5>
                <input @change="marchCubes" :checked="(state.selectedObject as VoxelMesh).marchCubes" type="checkbox">
            </div>
            <div v-if="(state.selectedObject as VoxelMesh).marchCubes" class="object-option">
                <h5>Smooth normals</h5>
                <input @change="smoothNormals" :checked="(state.selectedObject as VoxelMesh).smoothNormals" type="checkbox">
            </div>
            <div v-if="(state.selectedObject as VoxelMesh).marchCubes" class="object-option">
                <h5>Smooth</h5>
                <input @change="smoothGeometry" :checked="(state.selectedObject as VoxelMesh).smoothGeometry" type="checkbox">
            </div>
        </div>
    </div>
    <div class="object-options-list" v-else>
        No object selected
    </div>
</template>

<style scoped>
    .object-option {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .object-option-group-title {
        width: 70%;
    }
    .object-option-group {
        width: 70%;
        padding-left: 8px;
        padding-right: 8px;
        border-radius: 8px;
        background-color: var(--color-foreground-2);
    }
    .object-options-list {
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>