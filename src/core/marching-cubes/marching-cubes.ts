import * as THREE from "three";
import { cornerTable, edgeTable, triTable } from "./marching-cubes-tables";

const TerrainSurface = 0.5;

function hash(v: THREE.Vector3) {
    return `${v.x},${v.y},${v.z}`;
}

function getConfigIndex(cube: number[]) {
    let configurationIndex = 0;
    for (let i = 0; i < 8; i++) {
        if (cube[i] > TerrainSurface) {
            configurationIndex |= 1 << i;
        }
    }
    return configurationIndex;
}

function addCubeFaces(position: THREE.Vector3, positions: THREE.Vector3[], indices: number[], uniquePositions: Map<string, Map<string, number>>) {
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
    const index = cubeGeometry.index?.array.reverse() as unknown as number[];
    const vertex = cubeGeometry.getAttribute("position").array;

    let v0 = new THREE.Vector3();
    let v1 = new THREE.Vector3();
    let v2 = new THREE.Vector3();
    for(let i = 0; i < index.length; i += 3){
        let i0 = index[i] * 3;
        let i1 = index[i + 1] * 3;
        let i2 = index[i + 2] * 3;
        v0.set(vertex[i0], vertex[i0 + 1], vertex[i0 + 2]).add(position);
        v1.set(vertex[i1], vertex[i1 + 1], vertex[i1 + 2]).add(position);
        v2.set(vertex[i2], vertex[i2 + 1], vertex[i2 + 2]).add(position);

        let edge1 = new THREE.Vector3();
        let edge2 = new THREE.Vector3();
        edge1.subVectors(v1, v0);
        edge2.subVectors(v2, v0);
        let normal = new THREE.Vector3();
        normal.crossVectors(edge1, edge2);
        normal.normalize();
        const hNormal = hash(normal);
        if (!uniquePositions.has(hNormal)) {
            uniquePositions.set(hNormal, new Map());
        }
        const positionsMap = uniquePositions.get(hNormal) as Map<string, number>;

        if (positionsMap.has(hash(v0))) {
            indices.push(positionsMap.get(hash(v0)) as number);
        } else {
            positions.push(v0.clone());
            indices.push(positions.length - 1);
        }

        if (positionsMap.has(hash(v1))) {
            indices.push(positionsMap.get(hash(v1)) as number);
        } else {
            positions.push(v1.clone());
            indices.push(positions.length - 1);
        }

        if (positionsMap.has(hash(v2))) {
            indices.push(positionsMap.get(hash(v2)) as number);
        } else {
            positions.push(v2.clone());
            indices.push(positions.length - 1);
        }
    }

    // for (let i = 0; i < index?.length - 3; i += 3) {
    //     // positions.push(new THREE.Vector3(
    //     //     vertex[index[i] * 3] + position.x,
    //     //     vertex[index[i] * 3 + 1] + position.y,
    //     //     vertex[index[i] * 3 + 2] + position.z
    //     // ));
    //     // indices.push(positions.length - 1);
    // }
    cubeGeometry.dispose();
}

function marchCube(
    position: THREE.Vector3,
    map: any,
    positions: THREE.Vector3[],
    indices: number[],
    uniquePositions: Map<string, number | Map<string, number>>,
	marchingCubes = true,
    smoothGeometry = false
) {
    const voxelIdCube = map[position.x]?.[position.y]?.[position.z] || 0;
	if (!marchingCubes && voxelIdCube !== 0) {
        addCubeFaces(position, positions, indices, uniquePositions as Map<string, Map<string, number>>);
        return;
    }
    const cube = [];
    for (let i = 0; i < 8; i++) {
        const voxelPosition = position.clone().add(cornerTable[i]);
        const voxelId = map[voxelPosition.x]?.[voxelPosition.y]?.[voxelPosition.z] || 0;
        cube[i] = voxelId === 0 ? 0 : 1;
    }
    const configIndex = getConfigIndex(cube);
    if (configIndex === 0 || configIndex === 255) {
        return;
    }
    let edgeIndex = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 3; j++) {
            const index = triTable[configIndex][edgeIndex];
            if (index === -1) {
                return;
            }
            const vert1 = position.clone().add(cornerTable[edgeTable[index][0]]);
            const vert2 = position.clone().add(cornerTable[edgeTable[index][1]]);

            const vert1Sample = cube[edgeTable[index][0]];
            const vert2Sample = cube[edgeTable[index][1]];
            let difference = vert2Sample - vert1Sample;
            if (difference == 0) {
                difference = TerrainSurface;
            } else {
                difference = (TerrainSurface - vert1Sample) / difference;
            }
            const vertPosition = vert1.clone().add(vert2.clone().sub(vert1).multiplyScalar(difference));
            if (smoothGeometry) {
                if (uniquePositions.has(hash(vertPosition))) {
                    indices.push(uniquePositions.get(hash(vertPosition)) as number);
                }
                else {
                    positions.push(vertPosition);
                    indices.push(positions.length - 1);
                    uniquePositions.set(hash(vertPosition), positions.length - 1);
                }
            } else {
                positions.push(vertPosition);
                indices.push(positions.length - 1);
            }
            edgeIndex++;
        }
    }
}

export {
    marchCube
};