import * as THREE from "three";
import VoxelMesh from "./VoxelMesh";
import { marchCube } from "./marching-cubes/marching-cubes";
import { smoothGeometry as createSmoothGeometry, subdivide } from "./smooth-geometry";
import { createVoxelMaterial } from "./voxel-shader";
import MeshObject from "./MeshObject";
import { state } from "../state";

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
    dataTexture: THREE.DataTexture;
    dataTextureBuffer: Uint8Array;
    wireframeGeometry?: THREE.EdgesGeometry;
    wireframeMesh: THREE.LineSegments;

    constructor(voxelMesh: VoxelMesh, x: number, z: number) {
        super(new THREE.BoxGeometry(0, 0), createVoxelMaterial(VoxelMeshChunk.CHUNK_SIZE, VoxelMeshChunk.CHUNK_BORDER_SIZE));
        const shouldWireframeBeVisible = !voxelMesh.marchCubes && state.selectedObject?.id === voxelMesh.id && state.currentMode === 'sculpt';
        (this.material as any).polygonOffset = shouldWireframeBeVisible;
        const S = VoxelMeshChunk.CHUNK_SIZE;
        const B = VoxelMeshChunk.CHUNK_BORDER_SIZE;
        const SB = VoxelMeshChunk.CHUNK_SIZE_WITH_BORDER;
        const H = VoxelMeshChunk.CHUNK_HEIGHT;
        this.position.set(x * S - B + 0.5, -H / 2 + 0.5, z * S - B + 0.5);
        this.voxelMesh = voxelMesh;
        (this as any).meshObject = voxelMesh;
        this.x = x;
        this.z = z;
        this.dataTextureBuffer = new Uint8Array(SB * SB * H);
        this.dataTexture = new THREE.DataTexture(this.dataTextureBuffer, SB * SB, H, THREE.RedFormat, THREE.UnsignedByteType);
        this.wireframeMesh = new THREE.LineSegments(undefined, new THREE.LineBasicMaterial({ 
            color: 0
        }));
        (this.wireframeMesh as any).disableMouseEvents = true;
        this.wireframeMesh.visible = false;
        this.add(this.wireframeMesh);
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

    updateMaterial = () => {
        (this.material as THREE.ShaderMaterial).dispose();
        this.material = createVoxelMaterial(VoxelMeshChunk.CHUNK_SIZE, VoxelMeshChunk.CHUNK_BORDER_SIZE, (this.material as any).polygonOffset);
    }

    update = (selfOnly: boolean, borderUpdateSet: Set<VoxelMeshChunk>, marchCubes: boolean, smoothNormals: boolean, smoothGeometry: boolean, subdivideGeometry: boolean) => {
        if (!selfOnly) {
            this.updateBorders();
        }
        this.geometry.dispose();
        const B = VoxelMeshChunk.CHUNK_BORDER_SIZE;
        const SB = VoxelMeshChunk.CHUNK_SIZE_WITH_BORDER;
        const H = VoxelMeshChunk.CHUNK_HEIGHT;
        const positions: THREE.Vector3[] = [];
        const indices: number[] = [];
        let uniquePositions;
        if (marchCubes) {
            uniquePositions = new Map<string, number>();
        } else {
            uniquePositions = new Map<string, Map<string, number>>();
        }
        let voxelCount = 0;
        for (let x = 0; x < SB; x++) {
            for (let y = 0; y < H; y++) {
                for (let z = 0; z < SB; z++) {
                    if ((this.data[x]?.[y]?.[z] || 0) !== 0) {
                        voxelCount++;
                    }
                    const index = (y * SB * SB + (z * SB + x));
                    this.dataTextureBuffer[index] = (this.data[x]?.[y]?.[z] || 0);
                    
                    let inner = true;
                    if (!marchCubes) {
                        for (let x1 = -1; x1 <= 1; x1++) {
                            if (!inner) break;
                            for (let y1 = -1; y1 <= 1; y1++) {
                                if (!inner) break;
                                for (let z1 = -1; z1 <= 1; z1++) {
                                    if ((this.data[x + x1]?.[y + y1]?.[z + z1] || 0) === 0) {
                                        inner = false;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if (!marchCubes && inner) {
                        continue;
                    }
                    const addCubes = (!marchCubes && (this.data[x]?.[y]?.[z] || 0) !== 0 && x >= B && z >= B && x < SB - B && z < SB - B)
                    if (marchCubes || addCubes) {
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
        this.dataTexture.needsUpdate = true;

        if (smoothGeometry && marchCubes) {
            createSmoothGeometry(positions, indices);
            if (subdivideGeometry) {
                subdivide(positions, indices);
                createSmoothGeometry(positions, indices);
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

        this.wireframeGeometry?.dispose();
        this.wireframeGeometry = new THREE.EdgesGeometry(this.geometry);
        this.wireframeMesh.geometry = this.wireframeGeometry;
        this.needsUpdate = false;

        for (let i = 0; i < 8 && !selfOnly; i++) {
            if (this.borders[i] && this.borderNeedsUpdate[i]) {
                borderUpdateSet.add(this.borders[i]);
                this.borderNeedsUpdate[i] = false;
            }
        }

        // if (voxelCount === 0) {
        //     this.geometry.dispose();
        //     (this.material as any).dispose();
        //     this.voxelMesh.removeChunk(this.x, this.z);
        // }
    }

    onBeforeRender(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera, geometry: THREE.BufferGeometry, material: THREE.Material, group: THREE.Group): void {
        super.onBeforeRender(renderer, scene, camera, geometry, material, group);
        if (!(this.material as THREE.ShaderMaterial).uniforms.dataTexture) {
            (this.material as THREE.ShaderMaterial).uniforms.dataTexture = {
                value: this.dataTexture
            };
        }
        if ((this.material as THREE.ShaderMaterial).uniforms.marchCubes) {
            (this.material as THREE.ShaderMaterial).uniforms.marchCubes.value = this.voxelMesh.marchCubes ? 1 : 0;
        } else {
            (this.material as THREE.ShaderMaterial).uniforms.marchCubes = {
                value: this.voxelMesh.marchCubes ? 1 : 0
            };
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
                    copy.setDirectVoxel(+x, +y - VoxelMeshChunk.CHUNK_HEIGHT / 2, +z, voxel as number);
                }
            }
        }
        return copy;
    }

    createExportGeometry = () => {
        if (!this.voxelMesh.marchCubes) {
            return this.geometry.clone();
        }
        const index = this.geometry?.index?.array;
        const vertex = this.geometry?.getAttribute("position").array;
        if (!index || !vertex) {
            return null;
        }
        const B = VoxelMeshChunk.CHUNK_BORDER_SIZE + 0.0001;
        const S = VoxelMeshChunk.CHUNK_SIZE;
        const geometry = new THREE.BufferGeometry();
        const exportVertex: THREE.Vector3[] = [];
        const exportIndex: number[] = [];
        const vertexMap = new Map<string, number>();
        const hash = (v: THREE.Vector3) => `${v.x},${v.y},${v.z}`;
        let v0 = new THREE.Vector3();
        let v1 = new THREE.Vector3();
        let v2 = new THREE.Vector3();
        for(let i = 0; i < index.length; i += 3){
            let i0 = index[i] * 3;
            let i1 = index[i + 1] * 3;
            let i2 = index[i + 2] * 3;
            v0.set(vertex[i0], vertex[i0 + 1], vertex[i0 + 2]);
            v1.set(vertex[i1], vertex[i1 + 1], vertex[i1 + 2]);
            v2.set(vertex[i2], vertex[i2 + 1], vertex[i2 + 2]);
            const center = v0.clone().add(v1).add(v2).divideScalar(3);
            if (center.x >= B && center.x <= S + B && 
                center.z >= B && center.z <= S + B) {
                [v0, v1, v2].forEach((v) => {
                    if ((this.voxelMesh.smoothNormals || this.voxelMesh.smoothGeometry) && vertexMap.has(hash(v))) {
                        exportIndex.push(vertexMap.get(hash(v)) as number);
                    } else {
                        exportVertex.push(v.clone());
                        exportIndex.push(exportVertex.length - 1);
                        vertexMap.set(hash(v), exportVertex.length - 1);
                    }
                });
            }
        }
        const positionsArray = new Float32Array(exportVertex.length * 3);
        for (let i = 0; i < exportVertex.length; i++) {
            positionsArray[i * 3] = exportVertex[i].x;
            positionsArray[i * 3 + 1] = exportVertex[i].y;
            positionsArray[i * 3 + 2] = exportVertex[i].z;
        }
        geometry.setAttribute("position", new THREE.BufferAttribute(positionsArray, 3));
        geometry.setIndex(exportIndex);
        geometry.computeVertexNormals();
        return geometry;
    }
}

export default VoxelMeshChunk;