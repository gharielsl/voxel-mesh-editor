<script lang="ts">
import { defineComponent } from 'vue';
import { state } from '../../state';
import VoxelMesh from '../../core/VoxelMesh';

export default defineComponent({
    methods: {
        marchCubes(event: any) {
            if (state.selectedObject instanceof VoxelMesh) {
                state.selectedObject.marchCubes = event.target.checked;
                state.selectedObject.update();
            }
        },
        smoothGeometry(event: any) {
            if (state.selectedObject instanceof VoxelMesh) {
                state.selectedObject.smoothGeometry = event.target.checked;
                state.selectedObject.update();
            }
        }
    },
    data() {
        return {
            state
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
        <div v-if="state.selectedObject.constructor.name === 'VoxelMesh'" class="object-option">
            <h5>March cubes</h5>
            <input @change="marchCubes" :checked="(state.selectedObject as VoxelMesh).marchCubes" type="checkbox">
        </div>
        <div v-if="(state.selectedObject as VoxelMesh).marchCubes" class="object-option">
            <h5>Smooth</h5>
            <input @change="smoothGeometry" :checked="(state.selectedObject as VoxelMesh).smoothGeometry" type="checkbox">
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
        width: 70%;
    }
    .object-options-list {
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>