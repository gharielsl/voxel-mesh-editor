import { reactive } from 'vue';
import RenderingContext from './core/RenderingContext';
import MeshObject from './core/MeshObject';
import { VoxelMaterial } from './types/default';

export type SharedState = {
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
    renderingContext: () => RenderingContext,
    selectedObject?: MeshObject,
    multipleSelections: boolean,
    objectTransformChange: (object: MeshObject) => void,
    isMouseDown: boolean[],
    treeShowInternal: boolean,
    baseUrl: '/voxel-mesh-editor',
    cursorShape: string,
    renderingContextProxy?: RenderingContext,
    fullscreen: boolean,
    pushAction: (action: { in: () => boolean, out?: () => void }) => void,
    materials: VoxelMaterial[],
    selectedMaterial?: VoxelMaterial
}

export const state = reactive<SharedState>({
    currentTool: 'edit',
    currentMode: 'object',
    currentRenderMode: '',
    secondaryColor: '#b15b2e',
    primaryColor: '#3e86a0',
    clearColor: '#222222',
    snapActive: true,
    gridActive: true,
    objectModeState: 'select',
    setGridActive: () => {},
    setCurrentMode: () => {},
    brushSize: 1,
    brushShape: 'square',
    renderingContext: () => (window as any).renderingContext,
    multipleSelections: false,
    objectTransformChange: () => {},
    isMouseDown: [false, false, false, false],
    treeShowInternal: false,
    baseUrl: '/voxel-mesh-editor',
    cursorShape: 'initial',
    fullscreen: document.fullscreenElement !== null,
    pushAction: () => { },
    materials: [{ color: 0xffffff }]
});
