import * as THREE from "three";

interface MouseEvent3d extends MouseEvent {
    intersect: THREE.Intersection;
    movement3dXZ: THREE.Vector3;
    movement3dY: THREE.Vector3;
    movement3dOffset: THREE.Vector3;
}

export default MouseEvent3d;