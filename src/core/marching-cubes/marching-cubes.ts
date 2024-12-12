import * as THREE from "three";
import { cornerTable, edgeTable, triTable } from "./marching-cubes-tables";

const SmoothNormals = true;
const TerrainSurface = 0.5;

function getConfigIndex(cube: number[]) {
    let configurationIndex = 0;
    for (let i = 0; i < 8; i++) {
        if (cube[i] > TerrainSurface) {
            configurationIndex |= 1 << i;
        }
    }
    return configurationIndex;
}

function marchCube(
    position: THREE.Vector3,
    map: any,
    positions: THREE.Vector3[],
    indices: number[],
    uniquePositions: Map<THREE.Vector3, number>
) {
    const cube = [];
    for (let i = 0; i < 8; i++) {
        const voxelPosition = position.clone().add(cornerTable[i]);
        const voxelId = map[voxelPosition.x]?.[voxelPosition.y]?.[voxelPosition.z] || 0;
        // if (voxelId === undefined) {
        //     return;
        // }
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
            if (SmoothNormals) {
                if (uniquePositions.has(vertPosition)) {
                    indices.push(uniquePositions.get(vertPosition) as number);
                }
                else {
                    positions.push(vertPosition);
                    indices.push(positions.length - 1);
                    uniquePositions.set(vertPosition, positions.length - 1);
                }
            }
            edgeIndex++;
        }
    }
}

export {
    marchCube
};