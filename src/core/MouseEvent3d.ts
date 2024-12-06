import * as THREE from "three";

interface MouseEvent3d extends MouseEvent {
    intersect: THREE.Intersection;
}

export default MouseEvent3d;