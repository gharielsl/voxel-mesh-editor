import * as TWEEN from 'three/examples/jsm/libs/tween.module.js';
import * as THREE from 'three';
import { EffectComposer, FXAAShader, OutlinePass, RenderPass, ShaderPass, SAOPass, OrbitControls } from 'three/examples/jsm/Addons.js';
import { state } from '../state';
import TransformationContext from './TransformationContext';
import MeshObject from './MeshObject';
import MouseEvent3d from './MouseEvent3d';
import VoxelMesh from './VoxelMesh';
import { ViewportGizmo } from 'three-viewport-gizmo';
import JSZip from 'jszip';
import { nextTick } from 'vue';

const NEAR = 0.1;
const FAR = 1000;

class RenderingContext {
    canvas: HTMLCanvasElement;
    canvasContainer: HTMLElement;
    canvasObserver: ResizeObserver;
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    controls: OrbitControls;
    clock: THREE.Clock;
    grid10?: THREE.GridHelper;
    grid40?: THREE.GridHelper;
    grid?: THREE.Group;
    lineX?: THREE.Line;
    lineZ?: THREE.Line;
    ghostLight = new THREE.PointLight(0xffffff, 10, 10000, 0.25);
    nGhostLight = new THREE.PointLight(0xfff0f0, 2, 10000, 0.25);
    ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    clickableObjects: THREE.Object3D[] = [];
    isMouseDown = [false, false, false, false];
    isDragging = [false, false, false, false];
    mouseDownPosition = [[0, 0], [0, 0], [0, 0], [0, 0]];
    lastMeshIntersect?: MouseEvent3d;
    effectComposter: EffectComposer;
    renderPass: RenderPass;
    outlinePass?: OutlinePass;
    fxaaPass?: ShaderPass;
    ssaoPass?: SAOPass;
    topLevel: THREE.Scene;
    lastMouseMove?: MouseEvent;
    isDraggingObject = false;
    pressed = new Set();
    flySpeed = 0.25;
    gizmo: ViewportGizmo;
    isLooking = false;
    actions: { in: () => boolean, out?: () => void }[] = [];

    constructor(canvas: HTMLCanvasElement, canvasContainer: HTMLElement) {
        (window as any).renderingContext = this;
        state.renderingContextProxy = this;
        state.pushAction = this.pushAction;
        this.canvas = canvas;
        this.canvasContainer = canvasContainer;
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas,
            context: canvas.getContext("webgl2") as WebGL2RenderingContext
        });
        this.effectComposter = new EffectComposer(this.renderer);
        this.scene = new THREE.Scene();
        this.scene.userData.isRootScene = true;
        this.topLevel = new THREE.Scene();
        this.topLevel.add(new THREE.AmbientLight(0xffffff, 1));
        this.camera = new THREE.PerspectiveCamera(70, 1, NEAR, FAR);
        this.renderPass = new RenderPass(this.scene, this.camera);
        this.effectComposter.addPass(this.renderPass);
        this.camera.position.set(100, 100, 100);
        this.controls = new OrbitControls(this.camera, canvas as any);
        this.gizmo = new ViewportGizmo(this.camera, this.renderer, {
            placement: 'bottom-right',
            container: this.canvasContainer,
            size: 128
        });
        this.gizmo.attachControls(this.controls);
        this.clock = new THREE.Clock(true);
        this.handleResize();
        this.createEvents();
        this.canvasObserver = new ResizeObserver(this.handleResize);
        this.canvasObserver.observe(canvasContainer);
        this.createGrid();
        this.createControlMeshes();
        this.createPostProccess();
        setTimeout(this.handleResize, 100);
        this.update();
    }

    createEvents = () => {
        this.canvasContainer.addEventListener('mousemove', this.handleMouseMove);
        this.canvasContainer.addEventListener('mousedown', this.handleMouseDown);
        this.canvasContainer.addEventListener('mouseup', this.handleMouseUp);
        document.addEventListener('keyup', this.handleKeyUp);
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keypress', this.handleKeyPress);
        window.addEventListener('blur', this.handleBlur);
        window.addEventListener('wheel', this.handleWheel);
        this.canvas.addEventListener('contextmenu', this.handleContextMenu);
    }

    clearEvents = () => {
        this.canvasContainer.removeEventListener('mousemove', this.handleMouseMove);
        this.canvasContainer.removeEventListener('mousedown', this.handleMouseDown);
        this.canvasContainer.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('keyup', this.handleKeyUp);
        document.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('keypress', this.handleKeyPress);
        window.removeEventListener('blur', this.handleBlur);
        window.removeEventListener('wheel', this.handleWheel);
        this.canvas.removeEventListener('contextmenu', this.handleContextMenu);
    }

    pushAction = (action: { in: () => boolean, out?: () => void }) => {
        if (this.actions.length === 10) {
            this.actions.shift()?.out?.();
        }
        this.actions.push(action);
    }

    update = () => {
        const delta = this.clock.getDelta();
        this.controls.enabled = false;
        this.controls.enabled = this.shouldControlsBeOn();
        this.controls.enablePan = !this.isLooking;
        this.controls.enableZoom = !this.isLooking;
        let forward = new THREE.Vector3();
        const matrixWorld = this.camera.matrixWorld.toArray();
        let right = new THREE.Vector3(matrixWorld[0], matrixWorld[1], matrixWorld[2]).normalize();
        this.camera.getWorldDirection(forward);
        const unscaledForward = forward.clone();
        forward = forward.multiplyScalar(this.flySpeed);
        right = right.multiplyScalar(this.flySpeed);
        let isFlying = false;
        if (this.pressed.has('KeyW') && this.isLooking) {
            this.camera.position.add(forward);
            isFlying = true;
        } else if (this.pressed.has('KeyS') && this.isLooking) {
            this.camera.position.sub(forward);
            isFlying = true;
        }
        if (this.pressed.has('KeyD') && this.isLooking) {
            this.camera.position.add(right);
            isFlying = true;
        } else if (this.pressed.has('KeyA') && this.isLooking) {
            this.camera.position.sub(right);
            isFlying = true;
        }
        if (isFlying) {
            this.controls.target = this.camera.position.clone().add(unscaledForward.multiplyScalar(100));
        }
        if (!this.isLooking) {
            this.controls.update();
        }
        if (this.lastMouseMove && !isFlying) {
            let hover = this.intersectObject(this.lastMouseMove.offsetX, this.lastMouseMove.offsetY);
            this.clickableObjects.forEach((mesh) => {
                if (!hover) {
                    if (mesh instanceof MeshObject && mesh.hover) {
                        mesh.invokeHoverOutEvent(this.lastMouseMove as MouseEvent3d);
                    }
                    (mesh as MeshObject).hover = false;
                } else if (mesh instanceof MeshObject && mesh !== hover.object) {
                    if (mesh.hover) {
                        mesh.invokeHoverOutEvent(this.lastMouseMove as MouseEvent3d);
                    }
                    (mesh as MeshObject).hover = false;
                }
            });
            const ev3d = this.lastMouseMove as MouseEvent3d;
            ev3d.intersect = hover;
            if (hover && hover.object instanceof MeshObject) {
                (hover.object as MeshObject).hover = true;
                (hover.object as MeshObject).invokeHoverEvent(ev3d);
            }
        }
        
        TransformationContext.INSTANCE.update(this.camera);
        // this.camera.rotation.reorder('YXZ');
        TransformationContext.INSTANCE.scene.visible = false;
        // this.renderer.clearDepth();


        this.renderer.autoClear = false;
        this.effectComposter.render();
        this.renderer.clearDepth();

        TransformationContext.INSTANCE.scene.visible = TransformationContext.INSTANCE.scene.userData.visible;
        this.renderer.render(this.topLevel, this.camera);
        TransformationContext.INSTANCE.scene.visible = false;

        this.renderer.autoClear = true;
        
        if (!this.isLooking) {
            this.gizmo.update();
            this.gizmo.render();
        }
        requestAnimationFrame(this.update);
    }

    unselectAll() {
        if (state.currentMode !== 'object') {
            return;
        }
        TransformationContext.INSTANCE.setVisible(false);
        TransformationContext.INSTANCE.selectedObjects.forEach((mesh) => {
            mesh.unselect();
        });
        TransformationContext.INSTANCE.selectedObjects = [];
        if (this.outlinePass) {
            this.outlinePass.selectedObjects = TransformationContext.INSTANCE.selectedObjects;
        }
    }

    selectObjects = (objects: MeshObject[]) => {
        if (state.currentMode !== 'object') {
            return;
        }
        objects.forEach((object) => {
            if (!object.selected) {
                object.select();
            }
            if (!TransformationContext.INSTANCE.selectedObjects.includes(object)) {
                TransformationContext.INSTANCE.selectedObjects.push(object);
            }
        })
        if (this.outlinePass) {
            this.outlinePass.selectedObjects = TransformationContext.INSTANCE.selectedObjects;
        }
    }

    clipboard: MeshObject[] = [];

    copy = () => {
        if (state.currentMode !== 'object') {
            return;
        }
        this.clipboard = [];
        TransformationContext.INSTANCE.selectedObjects.forEach((o) => {
            if (!this.clipboard.includes(o)) {
                this.clipboard.push(o);
            }
        });
    }

    paste = () => {
        if (state.currentMode !== 'object') {
            return;
        }
        this.unselectAll();
        this.clipboard.forEach((o) => {
            const copy = o.clone();
            this.scene.add(copy);
            this.clickableObjects.push(copy);
            TransformationContext.INSTANCE.selectedObjects.push(copy);
            copy.select();
            state.pushAction({
                in: () => {
                    this.deleteObjects([copy]);
                    return false;
                }
            });
        });
        if (this.outlinePass) {
            this.outlinePass.selectedObjects = TransformationContext.INSTANCE.selectedObjects;
        }
    }

    undo = () => {
        const action = this.actions.pop();
        if (!action) {
            return;
        }
        if (action.in()) {
            action.out?.();
        }
    }

    deleteObjects = (objects: MeshObject[]) => {
        const toRemove: MeshObject[] = [];
        objects.forEach((mesh) => {
            if (!mesh.isMeshObject || mesh.internal) {
                return;
            }
            toRemove.push(mesh);
            mesh.destoy();
        });

        toRemove.forEach((mesh) => {
            const index = this.clickableObjects.indexOf(mesh);
            const index1 = TransformationContext.INSTANCE.selectedObjects.indexOf(mesh);
            if (index > -1) {
                this.clickableObjects.splice(index, 1);
            }
            if (index1 > -1) {
                TransformationContext.INSTANCE.selectedObjects.splice(index1, 1);
            }
        });

        if (this.outlinePass) {
            this.outlinePass.selectedObjects = TransformationContext.INSTANCE.selectedObjects;
        }
    }

    save = () => {
        const zip = new JSZip();
        const materials = state.materials.map((material) => {
            const copy = {...material};
            delete copy.normalGl;
            delete copy.textureGl;
            return copy;
        });
        zip.file("materials", JSON.stringify(materials));
        const meshObjects: any = [];
        this.clickableObjects.forEach((object) => {
            if (object instanceof VoxelMesh) {
                meshObjects.push(object.write());
            }
        });
        zip.file("voxels", JSON.stringify(meshObjects));
        zip.generateAsync({ type: "blob" }).then(async (result) => {
            if ((window as any).showSaveFilePicker) {
                const file = await (window as any).showSaveFilePicker({
                    types: [
                        {
                          description: "A voxel scene",
                          accept: {"multipart/zip": [".voxscene"]}
                        }
                    ]
                });
                const writableStream = await file.createWritable();
                await writableStream.write(result);
                await writableStream.close();
            } else {
                const a = document.createElement("a");
                a.href = URL.createObjectURL(result);
                a.download = "scene.voxscene";
                a.click();
            }
        });
    }

    load = (data: ArrayBuffer) => {
        const zip = new JSZip();
        if (this.outlinePass) {
            this.outlinePass.selectedObjects = [];
        }
        TransformationContext.INSTANCE.selectedObjects = [];
        this.deleteObjects(this.clickableObjects as MeshObject[]);
        state.materials = [];
        zip.loadAsync(data).then(async () => {
            await new Promise<void>((resolve) => {
                zip.file("materials")?.async("string").then(async (materials) => {
                    for await (const material of JSON.parse(materials)) {
                        state.materials.push(material);
                        nextTick(() => {
                            window.dispatchEvent(new CustomEvent("materialedit"));
                        });
                        await new Promise<void>((resolve) => {
                            const materialRendered = () => {
                                window.removeEventListener("materialRendered", materialRendered);
                                resolve();
                            };
                            window.addEventListener("materialRendered", materialRendered);
                        });
                    }
                    let firstIndex = 0;
                    for (; firstIndex <= state.materials.length; firstIndex++) {
                        if (state.materials[firstIndex]) break;
                    }
                    state.selectedMaterial = state.materials[firstIndex];
                    resolve();
                });
            });
            
            zip.file("voxels")?.async("string").then((voxels) => {
                const objects = JSON.parse(voxels);
                objects.forEach(({ chunks, transform, marchCubes, smoothNormals, smoothGeometry, subdivide }: any) => {
                    const mesh = new VoxelMesh();
                    mesh.position.copy(transform.translate);
                    mesh.rotation.copy(transform.rotate);
                    mesh.scale.copy(transform.scale);
                    mesh.marchCubes = marchCubes;
                    mesh.smoothNormals = smoothNormals;
                    mesh.smoothGeometry = smoothGeometry;
                    mesh.subdivide = subdivide;
                    mesh.load(chunks);
                    this.clickableObjects.push(mesh);
                    this.scene.add(mesh);
                });
            });
        });
    }

    open = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.voxscene';
        input.multiple = false;
        input.click();
        input.addEventListener('change', (ev: Event) => {
            if (!input.files?.[0]) {
                return;
            }
            const reader = new FileReader();
            reader.onload = () => {
                state.renderingContext().load(reader.result as ArrayBuffer);
            }
            reader.readAsArrayBuffer(input.files[0]);
        });
    }

    shouldControlsBeOn = () => {
        return !this.pressed.has('Control') && !this.pressed.has('Alt') && !this.isDraggingObject;
    }

    handleWheel = (ev: WheelEvent) => {
        if (this.isLooking) {
            if (ev.deltaY > 0) {
                this.flySpeed /= 1.1;
            } else if (ev.deltaY < 0) {
                this.flySpeed *= 1.1;
            }
        }
    }

    handleBlur = () => {
        this.pressed.clear();
        this.isMouseDown = [false, false, false, false];
        this.isDraggingObject = false;
        this.isDragging = [false, false, false, false];
        state.isMouseDown = this.isMouseDown;
    }

    handleContextMenu = (ev: Event) => {
        ev.preventDefault();
    }

    handleKeyPress = (ev: KeyboardEvent) => {
        
    }

    handleKeyDown = (ev: KeyboardEvent) => {
        this.pressed.add(ev.key);
        this.pressed.add(ev.code);
        if (ev.key === 'Tab') {
            ev.preventDefault();
        }
        if (ev.code === "KeyS" && ev.ctrlKey) {
            ev.preventDefault();
        }
        if (ev.code === "KeyO" && ev.ctrlKey) {
            ev.preventDefault();
        }
    }

    handleKeyUp = (ev: KeyboardEvent) => {
        this.pressed.delete(ev.key);
        this.pressed.delete(ev.code);
        if (ev.ctrlKey) {
            ev.preventDefault();
        }
        if (document.activeElement !== document.body) {
            return;
        }
        if (ev.code === 'Delete') {
            if (state.currentMode !== 'object') {
                return;
            }
            const toRemove: MeshObject[] = [];
            TransformationContext.INSTANCE.selectedObjects.forEach((mesh) => {
                toRemove.push(mesh);
                mesh.userData.parent = mesh.parent;
                mesh.removeFromParent();
            });
            toRemove.forEach((mesh) => {
                const index = this.clickableObjects.indexOf(mesh);
                const index1 = TransformationContext.INSTANCE.selectedObjects.indexOf(mesh);
                mesh.unselect();
                if (index > -1) {
                    this.clickableObjects.splice(index, 1);
                    mesh.userData.clickable = true;
                } else {
                    mesh.userData.clickable = false;
                }
                if (index1 > -1) {
                    TransformationContext.INSTANCE.selectedObjects.splice(index1, 1);
                }
            });
            state.pushAction({
                in: () => {
                    toRemove.forEach((mesh) => {
                        mesh.userData.parent?.add(mesh);
                        if (mesh.userData.clickable) {
                            this.clickableObjects.push(mesh);
                        }
                    });
                    return false;
                },
                out: () => {
                    toRemove.forEach((mesh) => {
                        mesh.destoy();
                    });
                }
            });
        }
        if (ev.code === 'KeyV' && ev.ctrlKey) {
            this.paste();
        }
        if (ev.code === 'KeyC' && ev.ctrlKey) {
            this.copy();
        }
        if (ev.code === 'KeyZ' && ev.ctrlKey) {
            this.undo();
        }
        if (ev.code === 'KeyS' && ev.ctrlKey) {
            this.save();
        }
        if (ev.code === 'KeyO' && ev.ctrlKey) {
            this.open();
        }
        // this.controls.enabled = this.shouldControlsBeOn();
        if (ev.key === 'Tab') {
            state.setCurrentMode(state.currentMode === 'object' ? 'sculpt' : 'object');
        }
        if (ev.code === 'KeyT' && state.currentMode === 'object') {
            state.objectModeState = 'move';
        }
        if (ev.code === 'KeyR' && state.currentMode === 'object') {
            state.objectModeState = 'rotate';
        }
        if (ev.code === 'KeyG' && state.currentMode === 'object') {
            state.objectModeState = 'scale';
        }
        if (ev.code === 'KeyF' && state.currentMode === 'object') {
            state.objectModeState = 'select';
        }
    }

    intersectObject = (x: number, y: number) => {
        const rc = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        mouse.x = (x / this.canvas.clientWidth) * 2 - 1;
        mouse.y = -(y / this.canvas.clientHeight) * 2 + 1;
        rc.setFromCamera(mouse, this.camera);
        const intersects = rc.intersectObjects(this.clickableObjects, true).reverse();
        let closestIntersect = intersects[0];
        for (const intersect of intersects) {
            // if (!(intersect.object instanceof MeshObject)) {
            //     continue;
            // }
            if ((intersect.object as MeshObject).disableMouseEvents) {
                continue;
            }
            if ((intersect.object as MeshObject).draggable) {
                closestIntersect = intersect;
                break;
            }
            closestIntersect = intersect;
            if ((closestIntersect.object as any).meshObject) {
                closestIntersect.object = (closestIntersect.object as any).meshObject;
            }
            // const distance = intersect.point.distanceTo(this.camera.position);
            // intersect.distance = distance;
            // if (intersect.distance < closestIntersect.distance || (intersects[0].object as MeshObject).disableMouseEvents) {
            //     closestIntersect = intersect;
            // }
        }
        return closestIntersect;
    }

    handleMouseDown = (ev: MouseEvent) => {
        this.isMouseDown[ev.button] = true;
        state.isMouseDown[ev.button] = true;
        this.mouseDownPosition[ev.button] = [ev.offsetX, ev.offsetY];
        const ev3d = ev as MouseEvent3d;
        let closestIntersect = this.intersectObject(ev.offsetX, ev.offsetY);
        if (!closestIntersect) {
            this.lastMeshIntersect = undefined;
            return;
        }
        ev3d.intersect = closestIntersect;
        this.lastMeshIntersect = ev3d;
        this.lastMeshIntersect.isFirstMovement = true;
        let object = (closestIntersect.object as MeshObject);
        if (!object.isMeshObject && (object as any).meshObject) {
            object = (object as any).meshObject;
        } else if (!object.isMeshObject) {
            return;
        }
        object.invokeMouseDownEvent(ev3d);
        if (object.draggable) {
            // this.controls.enabled = false;
            this.isDraggingObject = true;
        }
    }

    handleMouseUp = (ev: MouseEvent) => {
        if (this.isLooking) {
            document.exitPointerLock();
            const prevControls = this.controls;
            this.controls.dispose();
            this.controls = new OrbitControls(this.camera, this.canvas as any);
            this.controls.target = prevControls.target;
            this.gizmo.detachControls();
            this.gizmo.attachControls(this.controls);
        }
        this.isLooking = false;
        if (!this.isDragging[ev.button]) {
            let mesh = this.lastMeshIntersect?.intersect.object as MeshObject | undefined;
            if (!mesh?.isMeshObject && (mesh as any)?.meshObject) {
                mesh = (mesh as any)?.meshObject;
            } else if (!mesh?.isMeshObject) {
                mesh = undefined;
            }
            
            if (mesh && !(mesh as any).disableMouseEvents) {
                if (state.isPickingMat && ev.button === 0 && mesh instanceof VoxelMesh) {
                    const intersect = this.lastMeshIntersect as MouseEvent3d;
                    let position = mesh.worldToLocal(intersect.intersect.point);
                    position = position.add(intersect.intersect.normal?.clone().divideScalar(10) as THREE.Vector3).floor().addScalar(0.5);
                    position = position.add(intersect.intersect.normal?.clone().ceil().multiplyScalar(-1) as THREE.Vector3).floor();
                    const selectedMat = mesh.getVoxel(position.x, position.y, position.z) - 1;
                    if (!state.materials[selectedMat]) {
                        state.materials[selectedMat] = { color: '#000000' };
                        window.dispatchEvent(new CustomEvent("materialedit"));
                    }
                    state.selectedMaterial = state.materials[selectedMat];
                } else {
                    mesh.invokeClickEvent(this.lastMeshIntersect as MouseEvent3d);
                    if (!mesh.internal && state.currentMode === 'object') {
                        if (!ev.shiftKey) {
                            this.unselectAll();
                        }
                        if (!mesh.selected) {
                            mesh.select();
                            TransformationContext.INSTANCE.selectedObjects.push(mesh);
                        } else if (ev.shiftKey) {
                            mesh.unselect();
                            let indexOfMesh = TransformationContext.INSTANCE.selectedObjects.indexOf(mesh);
                            if (indexOfMesh !== -1) {
                                TransformationContext.INSTANCE.selectedObjects.splice(indexOfMesh, 1);
                            }
                        }
                        
                        if (this.outlinePass) {
                            this.outlinePass.selectedObjects = TransformationContext.INSTANCE.selectedObjects;
                        }
                    }
                }
            } else if (state.currentMode === 'object') {
                this.unselectAll();
            }
        }
        state.isPickingMat = false;
        this.isMouseDown[ev.button] = false;
        state.isMouseDown[ev.button] = false;
        this.isDragging[ev.button] = false;
        this.isDraggingObject = false;
        this.controls.enabled = this.shouldControlsBeOn();
    }

    handleMouseMove = (ev: MouseEvent) => {
        this.lastMouseMove = ev;
        if (this.controls.enabled && this.isMouseDown[2]) {
            if (!this.isLooking) {
                this.canvasContainer.requestPointerLock();
            }
            this.isLooking = true;
            this.camera.rotation.reorder('YXZ');
            this.camera.rotation.y -= ev.movementX * 0.0065;
            this.camera.rotation.x -= ev.movementY * 0.0065;
            this.camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.camera.rotation.x));
            const forward = new THREE.Vector3();
            this.camera.getWorldDirection(forward);
            this.controls.target = this.camera.position.clone().add(forward.multiplyScalar(100));
        }
        for (let i = 0; i < this.isMouseDown.length; i++) {
            if (this.isMouseDown[i]) {
                this.isDragging[i] = true;
                if (this.lastMeshIntersect && 
                    this.lastMeshIntersect.intersect.object && 
                    !(this.lastMeshIntersect.intersect.object as any).disableMouseEvents) {
                    const planeXZ = new THREE.Plane();
                    const planeY = new THREE.Plane();
                    let cameraDirection = new THREE.Vector3();
                    this.camera.getWorldDirection(cameraDirection);
                    cameraDirection.y = 0;
                    planeXZ.setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 1, 0), this.lastMeshIntersect.intersect.point);
                    planeY.setFromNormalAndCoplanarPoint(cameraDirection, this.lastMeshIntersect.intersect.point);
                    const rc = new THREE.Raycaster();
                    const mouse = new THREE.Vector2();
                    const mouseO = new THREE.Vector2();
                    mouse.x = (ev.offsetX / this.canvas.clientWidth) * 2 - 1;
                    mouse.y = -(ev.offsetY / this.canvas.clientHeight) * 2 + 1;
                    mouseO.x = ((ev.offsetX - ev.movementX) / this.canvas.clientWidth) * 2 - 1;
                    mouseO.y = -((ev.offsetY - ev.movementY) / this.canvas.clientHeight) * 2 + 1;
                    rc.setFromCamera(mouse, this.camera);
                    const planeIntersectXZ = new THREE.Vector3();
                    const planeIntersectY = new THREE.Vector3();
                    const planeOriginIntersectXZ = new THREE.Vector3();
                    const planeOriginIntersectY = new THREE.Vector3();
                    rc.ray.intersectPlane(planeXZ, planeIntersectXZ);
                    rc.ray.intersectPlane(planeY, planeIntersectY);
                    rc.setFromCamera(mouseO, this.camera);
                    rc.ray.intersectPlane(planeXZ, planeOriginIntersectXZ);
                    rc.ray.intersectPlane(planeY, planeOriginIntersectY);

                    const ev3d = ev as MouseEvent3d;
                    ev3d.movement3dOriginXZ = planeOriginIntersectXZ;
                    ev3d.movement3dOriginY = planeOriginIntersectY;
                    ev3d.movement3dStart = this.lastMeshIntersect.intersect.point;
                    ev3d.isFirstMovement = this.lastMeshIntersect.isFirstMovement;
                    ev3d.intersect = this.lastMeshIntersect.intersect;
                    const mesh = ev3d.intersect.object as MeshObject;
                    let direction = new THREE.Vector3(ev.movementX, -ev.movementY, 0.5);
                    direction = direction.unproject(this.camera);
                    direction = direction.sub(this.camera.position).normalize();
                    ev3d.movement3dXZ = planeIntersectXZ;
                    ev3d.movement3dY = planeIntersectY;
                    mesh.invokeDragEvent(ev3d);
                    this.lastMeshIntersect.isFirstMovement = false;
                }
            }
        }
    }

    handleResize = () => {
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        const w = this.canvas.clientWidth;
        const h = this.canvas.clientHeight;
        this.canvas.width = w;
        this.canvas.height = h;
        this.renderer.setSize(w, h);
        this.camera.aspect = w / h;
        this.effectComposter.setSize(w, h);
        this.outlinePass?.setSize(w, h);
        if (this.fxaaPass) {
            this.fxaaPass.uniforms.resolution.value.set(1 / this.canvas.width, 1 / this.canvas.height );
        }
        if (this.ssaoPass) {
            this.ssaoPass.resolution = new THREE.Vector2(this.canvas.width, this.canvas.height);
        }
        this.camera.updateProjectionMatrix();
    }

    createPostProccess = () => {
        this.outlinePass = new OutlinePass(
            new THREE.Vector2(this.canvas.width, this.canvas.height),
            this.scene,
            this.camera,
            TransformationContext.INSTANCE.selectedObjects
        );
        this.outlinePass.edgeGlow = 0;
        this.fxaaPass = new ShaderPass(FXAAShader);
        this.fxaaPass.uniforms.resolution.value.set( 1 / this.canvas.width, 1 / this.canvas.height );
        this.ssaoPass = new SAOPass(this.scene, this.camera, new THREE.Vector2(this.canvas.width, this.canvas.height));
        this.ssaoPass.params.saoBias = 0.5;
        this.ssaoPass.params.saoIntensity = 0.002;
        this.ssaoPass.params.saoScale = 10;
        this.ssaoPass.params.saoKernelRadius = 16;
        this.ssaoPass.params.saoMinResolution = 0;
        this.effectComposter.addPass(this.outlinePass);
        this.effectComposter.addPass(this.fxaaPass);
        this.effectComposter.addPass(this.ssaoPass);
    }

    createControlMeshes = () => {
        this.scene.add(TransformationContext.INSTANCE.scene);
        this.topLevel.add(TransformationContext.INSTANCE.scene);
        TransformationContext.INSTANCE.setVisible(false);
        // TransformationContext.INSTANCE.scene.userData.visible = false;
        this.clickableObjects.push(TransformationContext.INSTANCE.scene);
    }

    createGrid = () => {
        const grid = new THREE.Group();
        this.grid = grid;
        this.scene.add(grid);
        this.scene.fog = new THREE.Fog(new THREE.Color(0.13, 0.13, 0.13), 0.01, 1000);
        this.grid10 = new THREE.GridHelper(FAR * 10, FAR - 1, new THREE.Color(0x333333), new THREE.Color(0x333333));
        this.grid40 = new THREE.GridHelper(FAR * 10, (FAR - 1) / 4, new THREE.Color(0xa7a7a7), new THREE.Color(0xa7a7a7));
        this.grid10.material.depthWrite = false;
        this.grid40.material.depthWrite = false;
        this.grid10.material.opacity = 0.5;
        this.grid40.material.opacity = 0.5;
        this.grid10.position.add(new THREE.Vector3(-5, 0, -5));
        this.grid40.position.add(new THREE.Vector3(-5, 0, -5));
        this.lineX = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(-FAR * 10, 0, 0), 
                new THREE.Vector3(FAR * 10, 0, 0)
            ]), 
            new THREE.LineBasicMaterial({
                color: 0xff0000,
                depthWrite: false
            })
        );
        this.lineZ = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(0, 0, -FAR * 10), 
                new THREE.Vector3(0, 0, FAR * 10)
            ]), 
            new THREE.LineBasicMaterial({
                color: 0x0000ff,
                depthWrite: false
            })
        );
        this.renderer.setClearColor(new THREE.Color(state.clearColor));
        grid.add(this.grid10);
        grid.add(this.grid40);
        grid.add(this.lineX);
        grid.add(this.lineZ);
        state.setGridActive = (active) => {
            grid.visible = active;
            state.gridActive = active;
        }
        state.setCurrentMode = (mode) => {
            if (mode === 'sculpt' && state.selectedObject instanceof VoxelMesh && this.outlinePass) {
                state.selectedObject.setWireframeVisible(!state.selectedObject.marchCubes);
                (this.outlinePass as any).previousSelectedObjects = [...this.outlinePass.selectedObjects];
                this.outlinePass.selectedObjects = [];
                state.currentMode = mode;
                // const index = this.outlinePass.selectedObjects.indexOf(state.selectedObject);
                // if (index > -1) {
                //     this.outlinePass.selectedObjects.splice(index, 1);
                // }
            } else if (mode === 'object') {
                state.currentMode = mode;
                if (state.selectedObject instanceof VoxelMesh) {
                    state.selectedObject.setWireframeVisible(false);
                }
                if (this.outlinePass && (this.outlinePass as any).previousSelectedObjects) {
                    this.outlinePass.selectedObjects = (this.outlinePass as any).previousSelectedObjects;
                }
            }
            // if (mode !== 'object') {
            //     this.unselectAll();
            // }
        }
        this.ghostLight.position.set(1100, 1000, 900);
        this.nGhostLight.position.set(-900, -1000, -1100);
        this.scene.add(this.ghostLight);
        this.scene.add(this.nGhostLight);
        this.scene.add(this.ambientLight);
        this.test();
    }

    test = () => {
        const vo = new VoxelMesh();
        vo.min = new THREE.Vector3(-20, -20, -20);
        vo.max = new THREE.Vector3(20, 20, 20);
        vo.draw(new THREE.Vector3(), 'square', 5, 1);
        this.clickableObjects.push(vo);
        this.scene.add(vo);
    }

    destroy = () => {
        this.canvasObserver.disconnect();
        this.clearEvents();
    }
}

export default RenderingContext;
