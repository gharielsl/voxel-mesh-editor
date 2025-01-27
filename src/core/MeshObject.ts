import * as THREE from "three";
import MouseEvent3d from "./MouseEvent3d";
import { state } from "../state";

class MeshObject extends THREE.Mesh {
    clickEvents: Set<(ev: MouseEvent3d) => void> = new Set();
    dragEvents: Set<(ev: MouseEvent3d) => void> = new Set();
    hoverEvents: Set<(ev: MouseEvent3d) => void> = new Set();
    hoverOutEvents: Set<(ev: MouseEvent3d) => void> = new Set();
    mouseDownEvents: Set<(ev: MouseEvent3d) => void> = new Set();
    selected: boolean = false;
    internal: boolean = false;
    draggable: boolean = false;
    hover = false;
    disableMouseEvents: boolean = false;
    isMeshObject = true;

    constructor(geometry: THREE.BufferGeometry, material: THREE.Material | THREE.Material[]) {
        super(geometry, material);
    }

    static fromMesh(mesh: THREE.Mesh) {
        let meshObject = new MeshObject(mesh.geometry, mesh.material);
        meshObject.name = mesh.name;
        meshObject.userData = { ...mesh.userData };
        meshObject.position.copy(mesh.position);
        meshObject.rotation.copy(mesh.rotation);
        meshObject.scale.copy(mesh.scale);
        return meshObject;
    }

    select() {
        this.selected = true;
    }

    unselect() {
        this.selected = false;
    }

    addClickListener(callback: (ev: MouseEvent3d) => void) {
        this.clickEvents.add(callback);
    }

    addDragListener(callback: (ev: MouseEvent3d) => void) {
        this.dragEvents.add(callback);
    }

    addHoverEvent(callback: (ev: MouseEvent3d) => void) {
        this.hoverEvents.add(callback);
    }

    addHoverOutEvent(callback: (ev: MouseEvent3d) => void) {
        this.hoverOutEvents.add(callback);
    }

    addMouseDownEvent(callback: (ev: MouseEvent3d) => void) {
        this.mouseDownEvents.add(callback);
    }

    removeClickListener(callback: (ev: MouseEvent3d) => void) {
        this.clickEvents.delete(callback);
    }

    removeDragListener(callback: (ev: MouseEvent3d) => void) {
        this.dragEvents.delete(callback);
    }

    removeHoverEvent(callback: (ev: MouseEvent3d) => void) {
        this.hoverEvents.delete(callback);
    }

    removeHoverOutEvent(callback: (ev: MouseEvent3d) => void) {
        this.hoverOutEvents.delete(callback);
    }

    removeMouseDownEvent(callback: (ev: MouseEvent3d) => void) {
        this.mouseDownEvents.delete(callback);
    }

    invokeClickEvent(event: MouseEvent3d) {
        this.clickEvents.forEach((callback) => {
            callback(event);
        });
    }

    invokeDragEvent(event: MouseEvent3d) {
        this.dragEvents.forEach((callback) => {
            callback(event);
        });
    }

    invokeHoverEvent(event: MouseEvent3d) {
        this.hoverEvents.forEach((callback) => {
            callback(event);
        });
    }

    invokeHoverOutEvent(event: MouseEvent3d) {
        this.hoverOutEvents.forEach((callback) => {
            callback(event);
        });
    }

    invokeMouseDownEvent(event: MouseEvent3d) {
        this.mouseDownEvents.forEach((callback) => {
            callback(event);
        });
    }

    public destoy() {
        this.removeFromParent();
    }

    public clone() {
        let clonedMat;
        if (Array.isArray(this.material)) {
            clonedMat = [];
            this.material.forEach((material) => {
                clonedMat.push((material as THREE.Material).clone())
            });
        } else {
            clonedMat = (this.material as THREE.Material).clone();
        }
        const copy = new MeshObject(this.geometry.clone(), clonedMat);
        this.traverse((child) => {
            if (child !== this) {
                const userData = child.userData;
                child.userData = { };
                const clonedChild = child.clone(false);
                clonedChild.userData = { ...userData };
                if ((clonedChild as any).meshObject) {
                    (clonedChild as any).meshObject = copy;
                }
                // if (clonedChild.userData.meshObject) {
                //     clonedChild.userData.meshObject = copy;
                // }
                child.userData = userData;
                copy.add(clonedChild);
            }
        });
        copy.name = this.name + ' (Copy)';
        copy.position.copy(this.position);
        copy.scale.copy(this.scale);
        copy.rotation.copy(this.rotation);
        return copy as any;
    }
}

export default MeshObject;