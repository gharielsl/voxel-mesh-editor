import { reactive } from 'vue';
import RenderingContext from './core/RenderingContext';

export type SharedState = {
    rotationX: number,
    rotationY: number,
    rotationZ: number,
    currentTool: string,
    currentMode: string,
    currentRenderMode: '',
    secondaryColor: string,
    primaryColor: string,
    clearColor: string,
    snapActive: boolean,
    gridActive: boolean,
    objectModeState: string,
    setGridActive: (active: boolean) => void,
    setCurrentMode: (mode: string) => void,
    brushSize: number,
    brushShape: string,
    renderingContext?: RenderingContext
}

export const state = reactive<SharedState>({
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    currentTool: 'edit',
    currentMode: 'object',
    currentRenderMode: '',
    secondaryColor: '#b15b2e',
    primaryColor: '#3e86a0',
    clearColor: '#222222',
    snapActive: true,
    gridActive: true,
    objectModeState: 'select',
    setGridActive: (active: boolean) => {},
    setCurrentMode: (mode: string) => {},
    brushSize: 3,
    brushShape: 'round'
});
