import { reactive } from 'vue';

export type SharedState = {
    rotationX: number,
    rotationY: number,
    rotationZ: number,
    currentTool: 'edit' | 'measure' | 'explore' | 'annotate',
    currentMode: 'object' | 'geometry' | 'sculpt',
    currentRenderMode: '',
    secondaryColor: '#b15b2e',
    primaryColor: '#3e86a0',
    clearColor: '#c7c7c7'
}

export const state = reactive({
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    currentTool: 'edit',
    currentMode: 'object',
    secondaryColor: '#b15b2e',
    primaryColor: '#3e86a0',
    clearColor: '#222222'
});
