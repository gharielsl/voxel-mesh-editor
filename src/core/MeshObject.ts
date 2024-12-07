import * as THREE from "three";
import MouseEvent3d from "./MouseEvent3d";
import TransformationContext from "./TransformationContext";

class MeshObject extends THREE.Mesh {
    mouseEvents: Set<(ev: MouseEvent3d) => void> = new Set();
    selected: boolean = false;
    internal: boolean = false;

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