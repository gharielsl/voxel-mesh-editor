import * as TWEEN from 'three/examples/jsm/libs/tween.module.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { state } from '../state';
import TransformationContext from './TransformationContext';
import MeshObject from './MeshObject';
import MouseEvent3d from './MouseEvent3d';

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
    ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    clickableObjects: THREE.Object3D[] = [];
    isMouseDown = [false, false, false, false];
    isDragging = [false, false, false, false];
    mouseDownPosition = [[0, 0], [0, 0], [0, 0], [0, 0]];
    lastMeshIntersect?: MouseEvent3d;

    constructor(canvas: HTMLCanvasElement, canvasContainer: HTMLElement) {
        this.canvas = canvas;
        this.canvasContainer = canvasContainer;
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas
        });
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(70, 1, NEAR, FAR);
        this.camera.position.set(100, 100, 100);
        this.controls = new OrbitControls(this.camera, canvas);
        this.clock = new THREE.Clock(true);
        this.handleResize();
        this.createEvents();
        this.canvasObserver = new ResizeObserver(this.handleResize);
        this.canvasObserver.observe(canvasContainer);
        this.createGrid();
        this.createControlMeshes();
        this.update();
    }

    createEvents = () => {
        document.addEventListener('ui-camera-rotate', this.handleCameraRotationFromUi);
        this.canvasContainer.addEventListener('mousemove', this.handleMouseMove);
        this.canvasContainer.addEventListener('mousedown', this.handleMouseDown);
        this.canvasContainer.addEventListener('mouseup', this.handleMouseUp);
    }

    clearEvents = () => {
        document.removeEventListener('ui-camera-rotate', this.handleCameraRotationFromUi);
        this.canvasContainer.removeEventListener('mousemove', this.handleMouseMove);
        this.canvasContainer.removeEventListener('mousedown', this.handleMouseDown);
        this.canvasContainer.removeEventListener('mouseup', this.handleMouseUp);
    }

    update = () => {
        const delta = this.clock.getDelta();
        this.controls.update();
        TWEEN.update();
        TransformationContext.INSTANCE.update(this.camera);
        this.camera.rotation.reorder('YXZ');
        state.rotationX = THREE.MathUtils.radToDeg(this.camera.rotation.x);
        state.rotationY = THREE.MathUtils.radToDeg(this.camera.rotation.y);
        state.rotationZ = THREE.MathUtils.radToDeg(this.camera.rotation.z);
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.update);
    }

    unselectAll() {
        TransformationContext.INSTANCE.scene.visible = false;
        TransformationContext.INSTANCE.selectedObjects.forEach((mesh) => {
            mesh.unselect();
        });
        TransformationContext.INSTANCE.selectedObjects = [];
    }

    handleMouseDown = (ev: MouseEvent) => {
        this.isMouseDown[ev.button] = true;
        this.mouseDownPosition[ev.button] = [ev.offsetX, ev.offsetY];
        const ev3d = ev as MouseEvent3d;
        const dir = new THREE.Vector3();
        this.camera.getWorldDirection(dir);
        const rc = new THREE.Raycaster(this.camera.position, dir);
        const mouse = new THREE.Vector2();
        mouse.x = (ev.offsetX / this.canvas.clientWidth) * 2 - 1;
        mouse.y = -(ev.offsetY / this.canvas.clientHeight) * 2 + 1;
        rc.setFromCamera(mouse, this.camera);
        const intersects = rc.intersectObjects(this.clickableObjects, true);
        let closestIntersect = intersects[0];
        for (const intersect of intersects) {
            if (!(intersect.object instanceof MeshObject)) {
                continue;
            }
            if ((intersect.object as MeshObject).draggable) {
                closestIntersect = intersect;
                break;
            }
            if (intersect.distance < closestIntersect.distance) {
                closestIntersect = intersect;
            }
        }
        if (!closestIntersect) {
            this.lastMeshIntersect = undefined;
            return;
        }
        ev3d.intersect = closestIntersect;
        this.lastMeshIntersect = ev3d;
        const object = (closestIntersect.object as MeshObject);
        if (object.draggable) {
            this.controls.enabled = false;
        }
    }

    handleMouseUp = (ev: MouseEvent) => {
        if (!this.isDragging[ev.button]) {
            const mesh = this.lastMeshIntersect?.intersect.object as MeshObject;
            if (mesh) {
                mesh.invokeClickEvent(this.lastMeshIntersect as MouseEvent3d);
                if (!mesh.internal) {
                    if (!ev.shiftKey) {
                        this.unselectAll();
                    }
                    if (!mesh.selected) {
                        mesh.select();
                        TransformationContext.INSTANCE.selectedObjects.push(mesh);
                    }
                }
            } else {
                this.unselectAll();
            }
        }
        this.isMouseDown[ev.button] = false;
        this.isDragging[ev.button] = false;
        this.controls.enabled = true;
    }

    handleMouseMove = (ev: MouseEvent) => {
        for (let i = 0; i < this.isMouseDown.length; i++) {
            if (this.isMouseDown[i]) {
                this.isDragging[i] = true;
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
        this.camera.updateProjectionMatrix();
    }

    createControlMeshes = () => {
        this.scene.add(TransformationContext.INSTANCE.scene);
        TransformationContext.INSTANCE.scene.visible = false;
        this.clickableObjects.push(TransformationContext.INSTANCE.scene);
    }

    createGrid = () => {
        const grid = new THREE.Group();
        this.scene.add(grid);
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
        this.scene.fog = new THREE.Fog(new THREE.Color(state.clearColor), 0.01, 1000);
        grid.add(this.grid10);
        grid.add(this.grid40);
        grid.add(this.lineX);
        grid.add(this.lineZ);
        this.ghostLight.position.set(1000, 1000, 1000);
        this.scene.add(this.ghostLight);
        this.scene.add(this.ambientLight);
        this.test();
    }

    test = () => {
        const ge = new THREE.BoxGeometry(10, 10, 10);
        const ma = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });
        const me = new MeshObject(ge, ma);
        this.scene.add(me);
        this.clickableObjects.push(me);

        const ge1 = new THREE.BoxGeometry(7, 7, 7);
        const ma1 = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });
        const me1 = new MeshObject(ge1, ma1);
        me1.position.set(15, 2, -1);
        this.scene.add(me1);
        this.clickableObjects.push(me1);
    }

    destroy = () => {
        this.canvasObserver.disconnect();
        this.clearEvents();
    }
}

export default RenderingContext;
