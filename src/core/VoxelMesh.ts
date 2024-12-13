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
    marchCubes: boolean = true;
    smoothGeometry: boolean = false;

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
            let position = ev.intersect.point.clone().floor();
            position = this.worldToLocal(position);
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
                this.draw(point, state.brushShape, brushSize, ev.button === 2 ? 0 : 1);
            }
        });
    }

    draw = (position: THREE.Vector3, shape: string, size: number, voxel: number) => {
        for (let x = -size; x < size; x++) {
            for (let y = -size; y < size; y++) {
                for (let z = -size; z < size; z++) {
                    if (shape === 'square') {
                        this.setVoxel(position.x + x, position.y + y, position.z + z, voxel);
                    } else if (shape === 'round') {
                        if (new THREE.Vector3(x, y, z).length() < size) {
                            this.setVoxel(position.x + x, position.y + y, position.z + z, voxel);
                        }
                    }
                }
            }
        }
        this.update();
    }

    update = () => {
        this.geometry.dispose();
        const positions: THREE.Vector3[] = [];
        const indices: number[] = [];
        const uniquePositions = new Map<string, number>();
        for (const [x, _] of Object.entries(this.data)) {
            for (const [y, _] of Object.entries(this.data[x])) {
                for (const [z, _] of Object.entries(this.data[x][y])) {
                    this.max.x = Math.max(this.max.x, parseInt(x, 10));
                    this.max.y = Math.max(this.max.y, parseInt(y, 10));
                    this.max.z = Math.max(this.max.z, parseInt(z, 10));

                    this.min.x = Math.min(this.min.x, parseInt(x, 10));
                    this.min.y = Math.min(this.min.y, parseInt(y, 10));
                    this.min.z = Math.min(this.min.z, parseInt(z, 10));
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
                        uniquePositions,
                        this.marchCubes,
                        this.smoothGeometry
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
        this.data[x][y][z] = voxel;
    }

    getVoxel = (x: number, y: number, z: number) => {
        return this.data[x]?.[y]?.[z] || 0;
    }

    clone() {
        const copy = super.clone() as any;
        for (const key of Object.keys(this)) {
            if (!(key in copy)) {
                copy[key] = (this as any)[key];
            }
        }
        copy.data = { };
        for (const [x, _] of Object.entries(this.data)) {
            for (const [y, _] of Object.entries(this.data)) {
                for (const [z, _] of Object.entries(this.data)) {
                    copy.setVoxel(+x, +y, +z, this.getVoxel(+x, +y, +z));
                }
            }
        }
        return copy;
    }
}

export default VoxelMesh;