import * as THREE from "three";
import VoxelMesh from "./VoxelMesh";
import { marchCube } from "./marching-cubes/marching-cubes";
import { smoothGeometry as createSmoothGeometry } from "./smooth-geometry";
import { createVoxelMaterial } from "./voxel-shader";

class VoxelMeshChunk extends THREE.Mesh {
    static CHUNK_BORDER_SIZE = 3;
    static CHUNK_SIZE = 10;
    static CHUNK_HEIGHT = 256;
    static CHUNK_SIZE_WITH_BORDER = VoxelMeshChunk.CHUNK_SIZE + VoxelMeshChunk.CHUNK_BORDER_SIZE * 2;
    x: number = 0;
    z: number = 0;
    voxelMesh: VoxelMesh;
    borders: VoxelMeshChunk[] = [];
    borderNeedsUpdate: boolean[] = [];
    needsUpdate = false;
    data: any = { };
    
    constructor(voxelMesh: VoxelMesh, x: number, z: number) {
        super(new THREE.BoxGeometry(0, 0), createVoxelMaterial(VoxelMeshChunk.CHUNK_SIZE, VoxelMeshChunk.CHUNK_BORDER_SIZE));
        this.position.set(x * VoxelMeshChunk.CHUNK_SIZE - VoxelMeshChunk.CHUNK_BORDER_SIZE, -VoxelMeshChunk.CHUNK_HEIGHT / 2, z * VoxelMeshChunk.CHUNK_SIZE - VoxelMeshChunk.CHUNK_BORDER_SIZE);
        this.voxelMesh = voxelMesh;
        this.userData.voxelMesh = voxelMesh;
        this.userData.meshObject = voxelMesh;
        this.x = x;
        this.z = z;
    }

    updateBorders = () => {
        this.borders[0] = this.voxelMesh.getChunk(this.x + 1, this.z);
		this.borders[1] = this.voxelMesh.getChunk(this.x - 1, this.z);
		this.borders[2] = this.voxelMesh.getChunk(this.x, this.z + 1);
		this.borders[3] = this.voxelMesh.getChunk(this.x, this.z - 1);
		this.borders[4] = this.voxelMesh.getChunk(this.x + 1, this.z + 1);
		this.borders[5] = this.voxelMesh.getChunk(this.x + 1, this.z - 1);
		this.borders[6] = this.voxelMesh.getChunk(this.x - 1, this.z + 1);
		this.borders[7] = this.voxelMesh.getChunk(this.x - 1, this.z - 1);

        const B = VoxelMeshChunk.CHUNK_BORDER_SIZE;
        const S = VoxelMeshChunk.CHUNK_SIZE;
        const SB = VoxelMeshChunk.CHUNK_SIZE_WITH_BORDER;
        const H = VoxelMeshChunk.CHUNK_HEIGHT;

        for (let a = 0; a < SB - B; a++) {
            for (let y = -H / 2; y < H / 2; y++) {
                for (let i = 0; i < B; i++) {
                    let oa = B - a - 1;
					let ri = B - i - 1;
                    if (a < B) { // corners
                        if (this.borders[4]) { // pxpz
                            if (this.borders[4].getDirectVoxel(oa, y, ri) !== this.getVoxel(S - a - 1, y, S - i - 1)) {
                                this.borderNeedsUpdate[4] = true;
                                this.borders[4].setDirectVoxel(oa, y, ri, this.getVoxel(S - a - 1, y, S - i - 1));
                            }
                            this.setDirectVoxel(SB - oa - 1, y, SB - ri - 1, this.borders[4].getVoxel(a, y, i));
                        }
                        if (this.borders[5]) { // pxnz
                            if (this.borders[5].getDirectVoxel(oa, y, SB - ri - 1) !== this.getVoxel(S - a - 1, y, i)) {
                                this.borderNeedsUpdate[5] = true;
                                this.borders[5].setDirectVoxel(oa, y, SB - ri - 1, this.getVoxel(S - a - 1, y, i));
                            }
                            this.setDirectVoxel(SB - oa - 1, y, ri, this.borders[5].getVoxel(a, y, S - i - 1));
                        }
                        if (this.borders[6]) { // nxpz
                            if (this.borders[6].getDirectVoxel(SB - oa - 1, y, ri) !== this.getVoxel(a, y, S - i - 1)) {
                                this.borderNeedsUpdate[6] = true;
                                this.borders[6].setDirectVoxel(SB - oa - 1, y, ri, this.getVoxel(a, y, S - i - 1));
                            }
                            this.setDirectVoxel(oa, y, SB - ri - 1, this.borders[6].getVoxel(S - a - 1, y, i));
                        }
                        if (this.borders[7]) { // nxnz
                            if (this.borders[7].getDirectVoxel(SB - oa - 1, y, SB - ri - 1) !== this.getVoxel(a, y, i)) {
                                this.borderNeedsUpdate[7] = true;
                                this.borders[7].setDirectVoxel(SB - oa - 1, y, SB - ri - 1, this.getVoxel(a, y, i));
                            }
                            this.setDirectVoxel(oa, y, ri, this.borders[7].getVoxel(S - a - 1, y, S - i - 1));
                        }
                        continue;
                    }
                    // edges
                    ri = B - i;
					oa = a - B;
                    if (this.borders[0]) { // px
                        if (this.borders[0].getDirectVoxel(ri - 1, y, oa + B) !== this.getVoxel(S - i - 1, y, oa)) {
                            this.borderNeedsUpdate[0] = true;
                            this.borders[0].setDirectVoxel(ri - 1, y, oa + B, this.getVoxel(S - i - 1, y, oa));
                        }
                        this.setDirectVoxel(SB - ri, y, oa + B, this.borders[0].getVoxel(i, y, oa));
                    }
                    if (this.borders[1]) { // nx
                        if (this.borders[1].getDirectVoxel(SB - ri, y, oa + B) !== this.getVoxel(i, y, oa)) {
                            this.borderNeedsUpdate[1] = true;
                            this.borders[1].setDirectVoxel(SB - ri, y, oa + B, this.getVoxel(i, y, oa));
                        }
                        this.setDirectVoxel(ri - 1, y, oa + B, this.borders[1].getVoxel(S - i - 1, y, oa));
                    }
                    if (this.borders[2]) { // pz
                        if (this.borders[2].getDirectVoxel(oa + B, y, ri - 1) !== this.getVoxel(oa, y, S - i - 1)) {
                            this.borderNeedsUpdate[2] = true;
                            this.borders[2].setDirectVoxel(oa + B, y, ri - 1, this.getVoxel(oa, y, S - i - 1));
                        }
                        this.setDirectVoxel(oa + B, y, SB - ri, this.borders[2].getVoxel(oa, y, i));
                    }
                    if (this.borders[3]) { // nz
                        if (this.borders[3].getDirectVoxel(oa + B, y, SB - ri) !== this.getVoxel(oa, y, i)) {
                            this.borderNeedsUpdate[3] = true;
                            this.borders[3].setDirectVoxel(oa + B, y, SB - ri, this.getVoxel(oa, y, i));
                        }
                        this.setDirectVoxel(oa + B, y, ri - 1, this.borders[3].getVoxel(oa, y, S - i - 1));
                    }
                }
            }
        }
    }

    update = (selfOnly: boolean, borderUpdateSet: Set<VoxelMeshChunk>, marchCubes: boolean, smoothNormals: boolean, smoothGeometry: boolean) => {
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
                borderUpdateSet.add(this.borders[i]);
                this.borderNeedsUpdate[i] = false;
            }
        }
    }

    setVoxel = (x: number, y: number, z: number, voxel: number) => {
        const b = VoxelMeshChunk.CHUNK_BORDER_SIZE;
        if (!this.data[x + b]) this.data[x + b] = { };
        if (!this.data[x + b][y + VoxelMeshChunk.CHUNK_HEIGHT / 2]) this.data[x + b][y + VoxelMeshChunk.CHUNK_HEIGHT / 2] = { };
        this.data[x + b][y + VoxelMeshChunk.CHUNK_HEIGHT / 2][z + b] = voxel;
        this.needsUpdate = true;
    }

    setDirectVoxel = (x: number, y: number, z: number, voxel: number) => {
        if (!this.data[x]) this.data[x] = { };
        if (!this.data[x][y + VoxelMeshChunk.CHUNK_HEIGHT / 2]) this.data[x][y + VoxelMeshChunk.CHUNK_HEIGHT / 2] = { };
        this.data[x][y + VoxelMeshChunk.CHUNK_HEIGHT / 2][z] = voxel;
        this.needsUpdate = true;
    }

    getVoxel = (x: number, y: number, z: number) => {
        const b = VoxelMeshChunk.CHUNK_BORDER_SIZE;
        return this.data[x + b]?.[y + VoxelMeshChunk.CHUNK_HEIGHT / 2]?.[z + b] || 0;
    }

    getDirectVoxel = (x: number, y: number, z: number) => {
        return this.data[x]?.[y + VoxelMeshChunk.CHUNK_HEIGHT / 2]?.[z] || 0;
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