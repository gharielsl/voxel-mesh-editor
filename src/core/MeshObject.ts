import * as THREE from "three";
import MouseEvent3d from "./MouseEvent3d";
import TransformationContext from "./TransformationContext";

class MeshObject extends THREE.Mesh {
    mouseEvents: Set<(ev: MouseEvent3d) => void> = new Set();
    selected: boolean = false;

    constructor(geometry: THREE.BufferGeometry, material: THREE.Material) {
        super(geometry, material);
    }

    updateMatrix(): void {
        super.updateMatrix();
        if (this.selected) {
            TransformationContext.INSTANCE.scene.position.x = this.position.x;
            TransformationContext.INSTANCE.scene.position.y = this.position.y;
            TransformationContext.INSTANCE.scene.position.z = this.position.z;
        }
    }

    addMouseListener(callback: (ev: MouseEvent3d) => void) {
        this.mouseEvents.add(callback);
    }

    removeMouseListener(callback: (ev: MouseEvent3d) => void) {
        this.mouseEvents.delete(callback);
    }

    invokeMouseEvent(event: MouseEvent3d) {
        this.mouseEvents.forEach((callback) => {
            callback(event);
        });
    }
}

export default MeshObject;