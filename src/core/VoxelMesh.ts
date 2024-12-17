import * as THREE from "three";
import MeshObject from "./MeshObject";
import { marchCube } from "./marching-cubes/marching-cubes";
import { state } from "../state";
import { smoothGeometry } from "./smooth-geometry";
import VoxelMeshChunk from "./VoxelMeshChunk";

class VoxelMesh extends MeshObject {
    max: THREE.Vector3 = new THREE.Vector3();
    min: THREE.Vector3 = new THREE.Vector3();
    sphere?: THREE.Mesh;
    cube?: THREE.Mesh;
    chunks: any = { };
    marchCubes: boolean = false;
    smoothNormals: boolean = false;
    smoothGeometry: boolean = false;
    previousMarchCubes: boolean = false;
    previousSmoothNormals: boolean = false;
    previousSmoothGeometry: boolean = false;
    lastDragTime = 0;
    isVoxelMesh = true;
    isSelecting = false;
    selectFirstPosition?: THREE.Vector3;
    selectSecondPosition?: THREE.Vector3;
    selectButton?: number;

    worldToLocal(vector: THREE.Vector3): THREE.Vector3 {
        return vector.clone().applyMatrix4(this.matrixWorld.clone().invert());
    }

    _init = () => {
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
            if (!this.marchCubes) {
                sphere.scale.setScalar(state.brushSize + 2);
                cube.scale.setScalar(state.brushSize === 1 ? 1 : ((state.brushSize - 1) * 2));
                cube.scale.addScalar(0.01);
            } else {
                sphere.scale.setScalar(state.brushSize + 1);
                cube.scale.setScalar(state.brushSize * 2 + 1);
            }
            sphere.visible = state.brushShape === 'round';
            cube.visible = state.brushShape === 'square';
            let position = this.worldToLocal(ev.intersect.point);

            position = position.add(ev.intersect.normal?.clone().divideScalar(10) as THREE.Vector3).floor().addScalar(0.5);
            // position = position.add(ev.intersect.normal?.clone().divideScalar(10) as THREE.Vector3).addScalar(0.5).floor();
            if (state.brushShape === 'square' && state.brushSize > 1) {
                position = position.subScalar(0.5);
            }
            sphere.position.copy(position);
            cube.position.copy(position);
            const isAnyDown = state.isMouseDown[0] || state.isMouseDown[2];
            const isBothDown = state.isMouseDown[0] && state.isMouseDown[2];
            if (isAnyDown && ev.ctrlKey && !isBothDown && (Date.now() - this.lastDragTime > 100)) {
                if (state.isMouseDown[2]) {
                    position = position.add(ev.intersect.normal?.clone().ceil().multiplyScalar(-1) as THREE.Vector3);
                }
                if (this.marchCubes) {
                    const brushSize = state.brushSize + 1;
                    this.draw(position, state.brushShape, brushSize, state.isMouseDown[2] ? 0 : 1, true);
                } else {
                    const brushSize = state.brushSize - 1;
                    this.draw(position, state.brushShape, brushSize, state.isMouseDown[2] ? 0 : 1, true);
                }
                this.lastDragTime = Date.now();
            } else if (this.isSelecting && this.selectFirstPosition) {
                sphere.visible = false;
                cube.visible = true;
                const p1 = this.selectFirstPosition;
                const p2 = position;
                let size = new THREE.Vector3().subVectors(p2, p1);
                size = new THREE.Vector3(
                    Math.abs(size.x),
                    Math.abs(size.y),
                    Math.abs(size.z)
                )
                const center = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
                cube.scale.set(size.x + 1.01, size.y + 1.01, size.z + 1.01);
                cube.position.copy(center);
                if (this.selectButton === 2) {
                    position = position.add(ev.intersect.normal?.clone().ceil().multiplyScalar(-1) as THREE.Vector3);
                }
                this.selectSecondPosition = position;
            }
        });

        this.addMouseDownEvent((ev) => {
            if (ev.altKey) {
                this.selectButton = ev.button;
                this.isSelecting = true;
                let position = this.worldToLocal(ev.intersect.point);
                position = position.add(ev.intersect.normal?.clone().divideScalar(10) as THREE.Vector3).floor().addScalar(0.5);
                // position = position.add(ev.intersect.normal?.clone().divideScalar(10) as THREE.Vector3).addScalar(0.5).floor();
                this.selectFirstPosition = position;
            }
        });

        document.addEventListener('mouseup', this.mouseUp);

        this.addHoverOutEvent(() => {
            const sphere = this.sphere as THREE.Mesh;
            const cube = this.cube as THREE.Mesh;
            sphere.visible = false;
            cube.visible = false;
        });

        this.addClickListener((ev) => {
            if (state.currentMode === 'sculpt') {
                let point = this.worldToLocal(ev.intersect.point);
                point = point.add(ev.intersect.normal?.clone().divideScalar(10) as THREE.Vector3).floor().addScalar(0.5);
                // point = point.add(ev.intersect.normal?.clone().divideScalar(10) as THREE.Vector3).addScalar(0.5).floor();
                if (!this.marchCubes) {
                    if (ev.button == 2) {
                        point = point.add(ev.intersect.normal?.clone().ceil().multiplyScalar(-1) as THREE.Vector3);
                    }
                }
                if (this.marchCubes) {
                    const brushSize = state.brushSize + 1;
                    this.draw(point, state.brushShape, brushSize, ev.button === 2 ? 0 : 1, true);
                } else {
                    const brushSize = state.brushSize - 1;
                    this.draw(point, state.brushShape, brushSize, ev.button === 2 ? 0 : 1, true);
                }
            }
        });
    }

    constructor() {
        super(new THREE.BoxGeometry(0, 0), new THREE.MeshStandardMaterial());
        this._init();
    }

    mouseUp = (ev: MouseEvent) => {
        if (this.selectFirstPosition && this.selectSecondPosition && this.isSelecting) {
            const min = new THREE.Vector3(
                Math.min(this.selectFirstPosition.x, this.selectSecondPosition.x),
                Math.min(this.selectFirstPosition.y, this.selectSecondPosition.y),
                Math.min(this.selectFirstPosition.z, this.selectSecondPosition.z),
            );
            const max = new THREE.Vector3(
                Math.max(this.selectFirstPosition.x, this.selectSecondPosition.x),
                Math.max(this.selectFirstPosition.y, this.selectSecondPosition.y),
                Math.max(this.selectFirstPosition.z, this.selectSecondPosition.z),
            );
            const originalVoxels: any = { };
            for (let x = min.x; x <= max.x; x++) {
                for (let y = min.y; y <= max.y; y++) {
                    for (let z = min.z; z <= max.z; z++) {
                        if (!originalVoxels[x]) originalVoxels[x] = { };
                        if (!originalVoxels[x][y]) originalVoxels[x][y] = { };
                        originalVoxels[x][y][z] = this.getVoxel(x, y, z);
                        this.setVoxel(x, y, z, this.selectButton === 2 ? 0 : 1);
                    }
                }
            }
            state.pushAction({
                in: () => {
                    for (const [x, _] of Object.entries(originalVoxels)) {
                        for (const [y, _] of Object.entries(originalVoxels[x])) {
                            for (const [z, voxel] of Object.entries(originalVoxels[x][y])) {
                                this.setVoxel(+x, +y, +z, voxel as number);
                            }
                        }
                    }
                    this.update();
                    return true;
                }
            })
            this.update();
        }
        this.isSelecting = false;
    }

    draw = (position: THREE.Vector3, shape: string, size: number, voxel: number, addUndo = false) => {
        position = position.clone().floor();
        if (!this.marchCubes && shape === 'round') {
            size += 3;
        }
        let originalVoxels: any = { };
        if (size === 0) {
            originalVoxels = { 
                [position.x]: {
                    [position.y]: {
                        [position.z]: this.getVoxel(position.x, position.y, position.z)
                    }
                }
            }
            this.setVoxel(position.x, position.y, position.z, voxel);
        }
        for (let x = -size; x < size; x++) {
            for (let y = -size; y < size; y++) {
                for (let z = -size; z < size; z++) {
                    if (addUndo) {
                        if (!originalVoxels[position.x + x]) originalVoxels[position.x + x] = { };
                        if (!originalVoxels[position.x + x][position.y + y]) originalVoxels[position.x + x][position.y + y] = { };
                        originalVoxels[position.x + x][position.y + y][position.z + z] = this.getVoxel(position.x + x, position.y + y, position.z + z);
                    }
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
        if (addUndo) {
            state.pushAction({
                in: () => {
                    for (const [x, _] of Object.entries(originalVoxels)) {
                        for (const [y, _] of Object.entries(originalVoxels[x])) {
                            for (const [z, voxel] of Object.entries(originalVoxels[x][y])) {
                                this.setVoxel(+x, +y, +z, voxel as number);
                            }
                        }
                    }
                    this.update();
                    return false;
                }
            });
        }
        this.update();
    }

    update = () => {
        const needsUpdate = this.previousMarchCubes !== this.marchCubes ||
            this.previousSmoothNormals !== this.smoothGeometry ||
            this.previousSmoothGeometry !== this.previousSmoothGeometry
        for (const [x, _] of Object.entries(this.chunks)) {
            for (const [z, chunk] of Object.entries(this.chunks[x])) {
                if (chunk instanceof VoxelMeshChunk && (chunk.needsUpdate || needsUpdate)) {
                    chunk.update(false, this.marchCubes, this.smoothNormals, this.smoothGeometry);
                }
            }
        }
        this.previousMarchCubes = this.marchCubes;
        this.previousSmoothNormals = this.smoothGeometry;
        this.previousSmoothGeometry = this.previousSmoothGeometry;
    }

    public destoy(): void {
        super.destoy();
        document.removeEventListener('mouseup', this.mouseUp);
    }

    setVoxel = (x: number, y: number, z: number, voxel: number) => {
        const chunkX = Math.floor(x / VoxelMeshChunk.CHUNK_SIZE);
        const chunkZ = Math.floor(z / VoxelMeshChunk.CHUNK_SIZE);
        if (!this.chunks[chunkX]) {
            this.chunks[chunkX] = { };
        }
        if (!this.chunks[chunkX][chunkZ]) {
            this.chunks[chunkX][chunkZ] = new VoxelMeshChunk(this, chunkX, chunkZ);
            this.add(this.chunks[chunkX][chunkZ]);
        }

        let posX = x % VoxelMeshChunk.CHUNK_SIZE;
        let posZ = z % VoxelMeshChunk.CHUNK_SIZE;
        posX = posX < 0 ? posX + VoxelMeshChunk.CHUNK_SIZE : posX;
        posZ = posZ < 0 ? posZ + VoxelMeshChunk.CHUNK_SIZE : posZ;

        this.chunks[chunkX][chunkZ].setVoxel(posX, y, posZ, voxel);
    }

    getVoxel = (x: number, y: number, z: number) => {
        const chunkX = Math.floor(x / VoxelMeshChunk.CHUNK_SIZE);
        const chunkZ = Math.floor(z / VoxelMeshChunk.CHUNK_SIZE);

        let posX = x % VoxelMeshChunk.CHUNK_SIZE;
        let posZ = z % VoxelMeshChunk.CHUNK_SIZE;
        posX = posX < 0 ? posX + VoxelMeshChunk.CHUNK_SIZE : posX;
        posZ = posZ < 0 ? posZ + VoxelMeshChunk.CHUNK_SIZE : posZ;

        return this.chunks[chunkX]?.[chunkZ]?.getVoxel(posX, y, posZ) || 0;
    }

    clone() {
        const copy = new VoxelMesh();
        copy.position.copy(this.position);
        copy.scale.copy(this.scale);
        copy.rotation.copy(this.rotation);
        // for (const [x, _] of Object.entries(this.data)) {
        //     for (const [y, _] of Object.entries(this.data[x])) {
        //         for (const [z, voxel] of Object.entries(this.data[x][y])) {
        //             copy.setVoxel(+x, +y, +z, voxel as number);
        //         }
        //     }
        // }
        // copy.marchCubes = this.marchCubes;
        // copy.smoothNormals = this.smoothNormals;
        // copy.smoothGeometry = this.smoothGeometry;
        // copy.update();
        return copy;
    }
}

export default VoxelMesh;