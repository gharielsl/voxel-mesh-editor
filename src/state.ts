import { reactive } from 'vue';

export type SharedState = {
    rotationX: number,
    rotationY: number,
    rotationZ: number,
    currentTool: 'edit' | 'measure' | 'explore' | 'annotate',
    currentMode: 'object' | 'sculpt',
    currentRenderMode: '',
    secondaryColor: '#b15b2e',
    primaryColor: '#3e86a0',
    clearColor: '#c7c7c7',
    snapActive: boolean,
    gridActive: boolean,
    objectModeState: string,
    setGridActive: (active: boolean) => void,
    setCurrentMode: (mode: 'object' | 'sculpt') => void,
    brushSize: number
}

export const state = reactive({
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    currentTool: 'edit',
    currentMode: 'object',
    secondaryColor: '#b15b2e',
    primaryColor: '#3e86a0',
    clearColor: '#222222',
    snapActive: true,
    gridActive: true,
    objectModeState: 'select',
    setGridActive: (active: boolean) => {},
    setCurrentMode: (mode: 'object' | 'sculpt') => {},
    brushSize: 5
});
