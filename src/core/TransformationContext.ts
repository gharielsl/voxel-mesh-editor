import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

class TransformationContext {
    static INSTANCE = new TransformationContext();
    translateX?: THREE.Object3D;
    translateY?: THREE.Object3D;
    translateZ?: THREE.Object3D;
    translateFree?: THREE.Object3D;
    scaleX?: THREE.Object3D;
    scaleY?: THREE.Object3D;
    scaleZ?: THREE.Object3D;
    scaleFree?: THREE.Object3D;
    rotateX?: THREE.Object3D;
    rotateY?: THREE.Object3D;
    rotateZ?: THREE.Object3D;
    rotateFree?: THREE.Object3D;
    scene: THREE.Object3D = new THREE.Object3D();

    constructor() {
        const loader = new GLTFLoader();
        loader.load('/mesh/translate_mesh.glb', (gltf) => {
            gltf.scene.children.forEach((child) => {
                if (child.name === 'X') {
                    this.translateX = child;
                    this.scene.add(child);
                } else if (child.name === 'Y') {
                    this.translateY = child;
                    this.scene.add(child);
                } else if (child.name === 'Z') {
                    this.translateZ = child;
                    this.scene.add(child);
                } else if (child.name === 'Free') {
                    this.translateFree = child;
                    this.scene.add(child);
                }
            });
        });
        loader.load('/mesh/scale_mesh.glb', (gltf) => {
            gltf.scene.children.forEach((child) => {
                if (child.name === 'X') {
                    this.scaleX = child;
                    this.scene.add(child);
                } else if (child.name === 'Y') {
                    this.scaleY = child;
                    this.scene.add(child);
                } else if (child.name === 'Z') {
                    this.scaleZ = child;
                    this.scene.add(child);
                } else if (child.name === 'Free') {
                    this.scaleFree = child;
                    this.scene.add(child);
                }
            });
        });
        loader.load('/mesh/rotate_mesh.glb', (gltf) => {
            gltf.scene.children.forEach((child) => {
                if (child.name === 'X') {
                    this.rotateX = child;
                    this.scene.add(child);
                } else if (child.name === 'Y') {
                    this.rotateY = child;
                    this.scene.add(child);
                } else if (child.name === 'Z') {
                    this.rotateZ = child;
                    this.scene.add(child);
                } else if (child.name === 'Free') {
                    this.rotateFree = child;
                    this.scene.add(child);
                }
            });
        });
    }
}

export default TransformationContext;