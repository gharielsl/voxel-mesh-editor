import * as THREE from "three";
import MeshObject from "./MeshObject";
import { marchCube } from "./marching-cubes/marching-cubes";
import { state } from "../state";

class VoxelMesh extends MeshObject {
    max: THREE.Vector3 = new THREE.Vector3();
    min: THREE.Vector3 = new THREE.Vector3();
    sphere?: THREE.Mesh;
    cube?: THREE.Mesh;
    data: any = { };

    constructor() {
        super(new THREE.BoxGeometry(0, 0), new THREE.MeshStandardMaterial());
        this.sphere = new THREE.Mesh(new THREE.SphereGeometry(1), new THREE.MeshStandardMaterial({
            transparent: true,
            depthTest: true,
            depthWrite: false,
            opacity: 0.5,
            color: "#91b9c9",
            side: THREE.DoubleSide
        }));

        this.cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({
            transparent: true,
            depthTest: true,
            depthWrite: false,
            opacity: 0.5,
            color: "#91b9c9",
            side: THREE.DoubleSide
        }));

        (this.cube as any).visible = false;
        (this.sphere as any).visible = false;
        (this.cube as any).disableMouseEvents = true;
        (this.sphere as any).disableMouseEvents = true;
        this.add(this.cube as THREE.Mesh);
        this.add(this.sphere as THREE.Mesh);

        this.addHoverEvent((ev) => {
            const sphere = this.sphere as THREE.Mesh;
            const cube = this.cube as THREE.Mesh;
            if (state.currentMode !== 'sculpt') {
                sphere.visible = false;
                cube.visible = false;
                return;
            }
            sphere.scale.setScalar(+state.brushSize + 1);
            cube.scale.setScalar(state.brushSize * 2 + 1);
            sphere.visible = state.brushShape === 'round';
            cube.visible = state.brushShape === 'square';
            const position = ev.intersect.point.clone().floor();
            sphere.position.copy(position);
            cube.position.copy(position);
        });

        this.addHoverOutEvent(() => {
            const sphere = this.sphere as THREE.Mesh;
            const cube = this.cube as THREE.Mesh;
            sphere.visible = false;
            cube.visible = false;
        });

        this.addClickListener((ev) => {
            if (state.currentMode === 'sculpt') {
                let point = ev.intersect.point.floor();
                point = this.worldToLocal(point);
                const brushSize = +state.brushSize + 1;
                for (let x = -brushSize; x < brushSize; x++) {
                    for (let y = -brushSize; y < brushSize; y++) {
                        for (let z = -brushSize; z < brushSize; z++) {
                            if (state.brushShape === 'square') {
                                this.setVoxel(point.x + x, point.y + y, point.z + z, ev.button === 2 ? 0 : 1);
                            } else if (state.brushShape === 'round') {
                                if (new THREE.Vector3(x, y, z).length() < brushSize) {
                                    this.setVoxel(point.x + x, point.y + y, point.z + z, ev.button === 2 ? 0 : 1);
                                }
                            }
                        }
                    }
                }
                this.update();
            }
        });
    }

    update = () => {
        this.geometry.dispose();
        const positions: THREE.Vector3[] = [];
        const indices: number[] = [];
        const uniquePositions = new Map<THREE.Vector3, number>();
        for (const [x, _] of Object.entries(this.data)) {
            for (const [y, _] of Object.entries(this.data)) {
                for (const [z, _] of Object.entries(this.data)) {
                    this.max.x = Math.max(this.max.x, +x);
                    this.max.y = Math.max(this.max.y, +y);
                    this.max.z = Math.max(this.max.z, +z);
                    this.min.x = Math.min(this.min.x, +x);
                    this.min.y = Math.min(this.min.y, +y);
                    this.min.z = Math.min(this.min.z, +z);
                }
            }
        }
        for (let x = this.min.x - 1; x < this.max.x + 1; x++) {
            for (let y = this.min.y - 1; y < this.max.y + 1; y++) {
                for (let z = this.min.z - 1; z < this.max.z + 1; z++) {
                    marchCube(
                        new THREE.Vector3(x, y, z), 
                        this.data, 
                        positions, 
                        indices, 
                        uniquePositions
                    );
                }
            }
        }
        const positionsArray = new Float32Array(positions.length * 3);
        for (let i = 0; i < positions.length; i++) {
            positionsArray[i * 3] = positions[i].x;
            positionsArray[i * 3 + 1] = positions[i].y;
            positionsArray[i * 3 + 2] = positions[i].z;
        }
        this.geometry = new THREE.BufferGeometry();
        this.geometry.setAttribute("position", new THREE.BufferAttribute(positionsArray, 3));
        this.geometry.setIndex(indices.reverse());
        this.geometry.computeVertexNormals();
    }

    setVoxel = (x: number, y: number, z: number, voxel: number) => {
        if (!this.data[x]) this.data[x] = { };
        if (!this.data[x][y]) this.data[x][y] = { };
        this.max.x = Math.max(this.max.x, x);
        this.max.y = Math.max(this.max.y, y);
        this.max.z = Math.max(this.max.z, z);
        this.data[x][y][z] = voxel;
    }

    getVoxel = (x: number, y: number, z: number) => {
        return this.data[x]?.[y]?.[z] || 0;
    }
}

export default VoxelMesh;