import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import MeshObject from "./MeshObject";
import { state } from "../state";

class TransformationContext {
    static INSTANCE = new TransformationContext();
    translateX?: MeshObject;
    translateY?: MeshObject;
    translateZ?: MeshObject;
    translateFree?: MeshObject;
    scaleX?: MeshObject;
    scaleY?: MeshObject;
    scaleZ?: MeshObject;
    scaleFree?: MeshObject;
    rotateX?: MeshObject;
    rotateY?: MeshObject;
    rotateZ?: MeshObject;
    rotateFree?: MeshObject;
    scene: THREE.Object3D = new THREE.Object3D();
    selectedObjects: MeshObject[] = [];
    camera?: THREE.Camera;

    update = (camera: THREE.Camera) => {
        this.camera = camera;
        let scale = camera.position.distanceTo(this.scene.position);
        if (scale < 35) {
            scale = 35;
        }
        this.scene.scale.x = scale / 35;
        this.scene.scale.y = scale / 35;
        this.scene.scale.z = scale / 35;
        if (this.selectedObjects.length > 0) {
            this.scene.position.set(0, 0, 0);
            this.selectedObjects.forEach((mesh) => {
                this.scene.position.add(mesh.position);
            });
            this.scene.position.divideScalar(this.selectedObjects.length);
            this.scene.userData.visible = true;
        } else {
            this.scene.userData.visible = false;
        }
        this.scene.traverse((mesh) => {
            if (mesh instanceof MeshObject) {
                (mesh as MeshObject).draggable = this.scene.userData.visible;
            }
        })
    }

    constructor() {
        const loader = new GLTFLoader();
        loader.load('/mesh/translate_mesh.glb', (gltf) => {
            const children = [...gltf.scene.children];
            children.forEach((child) => {
                let mesh = child as MeshObject;
                if (mesh.isMesh) {
                    (mesh as any).renderOrder = 999;
                    (mesh as any).material.depthTest = false;
                    (mesh as any).material.depthWrite = false;
                    (mesh as any).material.transparent = true;
                    // (mesh as any).material.opacity = 0.5;
                    mesh = MeshObject.fromMesh(mesh);
                    mesh.draggable = false;
                    mesh.internal = true;
                    mesh.geometry.computeBoundingBox();
                    mesh.onBeforeRender = () => {
                        mesh.draggable = this.scene.userData.visible;
                    };
                }
                if (mesh.name === 'X') {
                    this.translateX = mesh;
                    this.scene.add(mesh);
                } else if (mesh.name === 'Y') {
                    this.translateY = mesh;
                    this.scene.add(mesh);
                } else if (mesh.name === 'Z') {
                    this.translateZ = mesh;
                    this.scene.add(mesh);
                } else if (mesh.name === 'Free') {
                    this.translateFree = mesh;
                    this.scene.add(mesh);
                }
            });
            this.translateX?.addDragListener((ev) => {
                this.selectedObjects.forEach((mesh) => {
                    const offset = mesh.position.clone().sub(this.scene.position).x;
                    mesh.position.x = ev.movement3dXZ.x - this.scene.scale.x * 5 + offset;
                    if (state.snapActive) {
                        mesh.position.x = Math.round(mesh.position.x / 10) * 10;
                    }
                });
            });
            this.translateY?.addDragListener((ev) => {
                this.selectedObjects.forEach((mesh) => {
                    const offset = mesh.position.clone().sub(this.scene.position).y;
                    mesh.position.y = ev.movement3dY.y - this.scene.scale.y * 5 + offset;
                    if (state.snapActive) {
                        mesh.position.y = Math.round(mesh.position.y / 10) * 10;
                    }
                });
            });
            this.translateZ?.addDragListener((ev) => {
                this.selectedObjects.forEach((mesh) => {
                    const offset = mesh.position.clone().sub(this.scene.position).z;
                    mesh.position.z = ev.movement3dXZ.z + this.scene.scale.z * 5 + offset;
                    if (state.snapActive) {
                        mesh.position.z = Math.round(mesh.position.z / 10) * 10;
                    }
                });
            });
        }, () => { }, console.error);

        // loader.load('/mesh/scale_mesh.glb', (gltf) => {
        //     gltf.scene.traverse((child) => {
        //         if (child.name === 'X') {
        //             this.scaleX = child;
        //             this.scene.add(child);
        //         } else if (child.name === 'Y') {
        //             this.scaleY = child;
        //             this.scene.add(child);
        //         } else if (child.name === 'Z') {
        //             this.scaleZ = child;
        //             this.scene.add(child);
        //         } else if (child.name === 'Free') {
        //             this.scaleFree = child;
        //             this.scene.add(child);
        //         }
        //     });
        // });
        // loader.load('/mesh/rotate_mesh.glb', (gltf) => {
        //     gltf.scene.traverse((child) => {
        //         if (child.name === 'X') {
        //             this.rotateX = child;
        //             this.scene.add(child);
        //         } else if (child.name === 'Y') {
        //             this.rotateY = child;
        //             this.scene.add(child);
        //         } else if (child.name === 'Z') {
        //             this.rotateZ = child;
        //             this.scene.add(child);
        //         } else if (child.name === 'Free') {
        //             this.rotateFree = child;
        //             this.scene.add(child);
        //         }
        //     });
        // });
    }
}

export default TransformationContext;