import * as THREE from "three";

interface MouseEvent3d extends MouseEvent {
    intersect: THREE.Intersection;
    movement3dXZ: THREE.Vector3;
    movement3dY: THREE.Vector3;
    movement3dOriginXZ: THREE.Vector3;
    movement3dOriginY: THREE.Vector3;
    movement3dStart: THREE.Vector3;
    isFirstMovement: boolean;
}

export default MouseEvent3d;