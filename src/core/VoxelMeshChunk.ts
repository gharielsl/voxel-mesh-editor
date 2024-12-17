import * as THREE from "three";
import VoxelMesh from "./VoxelMesh";
import { marchCube } from "./marching-cubes/marching-cubes";
import { smoothGeometry as createSmoothGeometry } from "./smooth-geometry";
import { createVoxelMaterial } from "./voxel-shader";

class VoxelMeshChunk extends THREE.Mesh {
    static CHUNK_BORDER_SIZE = 3;
    static CHUNK_SIZE = 16;
    static CHUNK_HEIGHT = 128;
    static CHUNK_SIZE_WITH_BORDER = VoxelMeshChunk.CHUNK_SIZE + VoxelMeshChunk.CHUNK_BORDER_SIZE * 2;
    x: number = 0;
    z: number = 0;
    borders: VoxelMeshChunk[] = [];
    borderNeedsUpdate: boolean[] = [];
    needsUpdate = false;
    data: any = { };
    
    constructor(voxelMesh: VoxelMesh, x: number, z: number) {
        super(new THREE.BoxGeometry(0, 0), createVoxelMaterial(VoxelMeshChunk.CHUNK_SIZE, VoxelMeshChunk.CHUNK_BORDER_SIZE));
        this.position.set(x * VoxelMeshChunk.CHUNK_SIZE - VoxelMeshChunk.CHUNK_BORDER_SIZE, 0, z * VoxelMeshChunk.CHUNK_SIZE - VoxelMeshChunk.CHUNK_BORDER_SIZE);
        this.userData.voxelMesh = voxelMesh;
        this.userData.meshObject = voxelMesh;
        this.x = x;
        this.z = z;
    }

    updateBorders = () => {

    }

    update = (selfOnly: boolean, marchCubes: boolean, smoothNormals: boolean, smoothGeometry: boolean) => {
        if (!selfOnly) {
            this.updateBorders();
        }

        this.geometry.dispose();
        const positions: THREE.Vector3[] = [];
        const indices: number[] = [];
        const uniquePositions = new Map<string, number>();

        for (let x = 0; x < VoxelMeshChunk.CHUNK_SIZE_WITH_BORDER; x++) {
            for (let y = 0; y < VoxelMeshChunk.CHUNK_HEIGHT; y++) {
                for (let z = 0; z < VoxelMeshChunk.CHUNK_SIZE_WITH_BORDER; z++) {
                    if (marchCubes || this.data[x]?.[y]?.[z] || 0 !== 0) {
                        marchCube(
                            new THREE.Vector3(x, y, z), 
                            this.data, 
                            positions, 
                            indices, 
                            uniquePositions,
                            marchCubes,
                            smoothNormals || smoothGeometry
                        );
                    }
                }
            }
        }

        if (smoothGeometry && marchCubes) {
            createSmoothGeometry(positions, indices);
        }

        const positionsArray = new Float32Array(positions.length * 3);
        for (let i = 0; i < positions.length; i++) {
            positionsArray[i * 3] = positions[i].x + 0.5;
            positionsArray[i * 3 + 1] = positions[i].y + 0.5;
            positionsArray[i * 3 + 2] = positions[i].z + 0.5;
        }
        this.geometry = new THREE.BufferGeometry();
        this.geometry.setAttribute("position", new THREE.BufferAttribute(positionsArray, 3));
        this.geometry.setIndex(indices.reverse());
        this.geometry.computeVertexNormals();
        this.needsUpdate = false;

        for (let i = 0; i < 8 && !selfOnly; i++) {
            if (this.borders[i] && this.borderNeedsUpdate[i]) {
                this.borders[i].update(true, marchCubes, smoothNormals, smoothGeometry);
                this.borderNeedsUpdate[i] = false;
            }
        }
    }

    setVoxel = (x: number, y: number, z: number, voxel: number) => {
        if (x < 0 || y < 0 || z < 0 || x >= VoxelMeshChunk.CHUNK_SIZE || y >= VoxelMeshChunk.CHUNK_HEIGHT || z >= VoxelMeshChunk.CHUNK_SIZE)
        {
            return;
        }
        const b = VoxelMeshChunk.CHUNK_BORDER_SIZE;
        if (!this.data[x + b]) this.data[x + b] = { };
        if (!this.data[x + b][y]) this.data[x + b][y] = { };
        this.data[x + b][y][z + b] = voxel;
        this.needsUpdate = true;
    }

    getVoxel = (x: number, y: number, z: number) => {
        const b = VoxelMeshChunk.CHUNK_BORDER_SIZE;
        this.data[x + b]?.[y]?.[z + b] || 0;
    }

    makeCopy = (forMesh: VoxelMesh) => {
        const copy = new VoxelMeshChunk(forMesh, this.x, this.z);
        const b = VoxelMeshChunk.CHUNK_BORDER_SIZE;
        const s = VoxelMeshChunk.CHUNK_SIZE + b;
        for (const [x, _] of Object.entries(this.data)) {
            for (const [y, _] of Object.entries(this.data[x])) {
                for (const [z, voxel] of Object.entries(this.data[x][y])) {
                    if (+x >= b && +z >= b && +x < s && +z < s) {
                        copy.setVoxel(+x - b, +y - b, +z - b, voxel as number);
                    }
                }
            }
        }
        return copy;
    }
}

export default VoxelMeshChunk;