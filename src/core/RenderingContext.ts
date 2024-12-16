import * as TWEEN from 'three/examples/jsm/libs/tween.module.js';
import * as THREE from 'three';
import { EffectComposer, FXAAShader, OrbitControls, OutlinePass, RenderPass, ShaderPass, SAOPass } from 'three/examples/jsm/Addons.js';
import { state } from '../state';
import TransformationContext from './TransformationContext';
import MeshObject from './MeshObject';
import MouseEvent3d from './MouseEvent3d';
import VoxelMesh from './VoxelMesh';
import { ViewportGizmo } from 'three-viewport-gizmo';

const NEAR = 0.01;
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
    gizmo: ViewportGizmo;
    actions: { in: () => boolean, out?: () => void }[] = [];

    constructor(canvas: HTMLCanvasElement, canvasContainer: HTMLElement) {
        (window as any).renderingContext = this;
        state.renderingContextProxy = this;
        state.pushAction = this.pushAction;
        this.canvas = canvas;
        this.canvasContainer = canvasContainer;
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas
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
        this.controls = new OrbitControls(this.camera, canvas);
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
        document.addEventListener('ui-camera-rotate', this.handleCameraRotationFromUi);
        this.canvasContainer.addEventListener('mousemove', this.handleMouseMove);
        this.canvasContainer.addEventListener('mousedown', this.handleMouseDown);
        this.canvasContainer.addEventListener('mouseup', this.handleMouseUp);
        document.addEventListener('keyup', this.handleKeyUp);
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keypress', this.handleKeyPress);
        window.addEventListener('blur', this.handleBlur);
        this.canvas.addEventListener('contextmenu', this.handleContextMenu);
    }

    clearEvents = () => {
        document.removeEventListener('ui-camera-rotate', this.handleCameraRotationFromUi);
        this.canvasContainer.removeEventListener('mousemove', this.handleMouseMove);
        this.canvasContainer.removeEventListener('mousedown', this.handleMouseDown);
        this.canvasContainer.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('keyup', this.handleKeyUp);
        document.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('keypress', this.handleKeyPress);
        window.removeEventListener('blur', this.handleBlur);
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
        this.controls.enabled = this.shouldControlsBeOn();
        if (this.lastMouseMove) {
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
        this.controls.update();
        TWEEN.update();
        TransformationContext.INSTANCE.update(this.camera);
        this.camera.rotation.reorder('YXZ');
        state.rotationX = THREE.MathUtils.radToDeg(this.camera.rotation.x);
        state.rotationY = THREE.MathUtils.radToDeg(this.camera.rotation.y);
        state.rotationZ = THREE.MathUtils.radToDeg(this.camera.rotation.z);
        TransformationContext.INSTANCE.scene.visible = false;
        this.renderer.clearDepth();
        this.effectComposter.render();
        this.renderer.clearDepth();
        this.renderer.autoClear = false;
        TransformationContext.INSTANCE.scene.visible = TransformationContext.INSTANCE.scene.userData.visible;
        this.renderer.render(this.topLevel, this.camera);
        TransformationContext.INSTANCE.scene.visible = false;
        this.renderer.autoClear = true;
        this.gizmo.update();
        this.gizmo.render();
        requestAnimationFrame(this.update);
    }

    unselectAll() {
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
        this.clipboard = [];
        TransformationContext.INSTANCE.selectedObjects.forEach((o) => {
            if (!this.clipboard.includes(o)) {
                this.clipboard.push(o);
            }
        });
    }

    paste = () => {
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

    shouldControlsBeOn = () => {
        return !this.pressed.has('Control') && !this.pressed.has('Alt') && !this.isDraggingObject;
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
        if (ev.key === 'Tab') {
            ev.preventDefault();
        }
    }

    handleKeyUp = (ev: KeyboardEvent) => {
        this.pressed.delete(ev.key);
        if (ev.ctrlKey) {
            ev.preventDefault();
        }
        if (ev.code === 'Delete') {
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
        rc.far = 1000;
        rc.near = 0.0000001;
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
            if (closestIntersect.object.userData.meshObject) {
                closestIntersect.object = closestIntersect.object.userData.meshObject;
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
        const object = (closestIntersect.object as MeshObject);
        object.invokeMouseDownEvent(ev3d);
        if (object.draggable) {
            // this.controls.enabled = false;
            this.isDraggingObject = true;
        }
    }

    handleMouseUp = (ev: MouseEvent) => {
        if (!this.isDragging[ev.button]) {
            const mesh = this.lastMeshIntersect?.intersect.object as MeshObject;
            if (mesh && !(mesh as any).disableMouseEvents) {
                mesh?.invokeClickEvent(this.lastMeshIntersect as MouseEvent3d);
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
            } else {
                this.unselectAll();
            }
        }
        this.isMouseDown[ev.button] = false;
        state.isMouseDown[ev.button] = false;
        this.isDragging[ev.button] = false;
        this.isDraggingObject = false;
        this.controls.enabled = this.shouldControlsBeOn();
    }

    handleMouseMove = (ev: MouseEvent) => {
        this.lastMouseMove = ev;
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

    handleCameraRotationFromUi = (ev: any) => {
        this.camera.rotation.reorder('YXZ');
        const direction = new THREE.Vector3(0, 0, 1).applyEuler(
            new THREE.Euler(
                THREE.MathUtils.degToRad(ev.detail.x), 
                THREE.MathUtils.degToRad(ev.detail.y), 
                THREE.MathUtils.degToRad(ev.detail.z), 'YXZ'));
        const distance = this.camera.position.sub(this.controls.target).length();
        const newPosition = this.controls.target.clone().add(direction.multiplyScalar(distance));
        const oldPosition =  this.camera.position.clone();
        const oldRotation =  this.camera.rotation.clone();
        this.camera.position.copy(newPosition);
        this.camera.rotation.set(0, 0, 0, 'YXZ');
        this.camera.lookAt(this.controls.target);
        const newRotation = this.camera.rotation.clone();
        this.camera.position.copy(oldPosition);
        this.camera.rotation.copy(oldRotation);
        new TWEEN.Tween(this.camera.position).to({
            x: newPosition.x,
            y: newPosition.y,
            z: newPosition.z
        }, 500).start();
        // this.camera.rotation.copy(newRotation);
        new TWEEN.Tween(this.camera.rotation).to({
            x: newRotation.x,
            y: newRotation.y,
            z: newRotation.z
        }, 1000).start();
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
            state.currentMode = mode;
            if (mode !== 'object') {
                this.unselectAll();
            }
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
