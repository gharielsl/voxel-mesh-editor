import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import MeshObject from "./MeshObject";

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

    update = (camera: THREE.Camera) => {
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
            this.scene.visible = true;
        } else {
            this.scene.visible = false;
        }
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
                    (mesh as any).material.opacity = 0.5;
                    mesh = MeshObject.fromMesh(mesh);
                    mesh.draggable = true;
                    mesh.internal = true;
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