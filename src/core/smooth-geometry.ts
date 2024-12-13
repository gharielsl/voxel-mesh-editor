import * as THREE from "three";

function addNeighbor(
    vertexIndex: number,
    neighborIndex: number,
    vertexSums: any,
    vertexCounts: any,
    positions: THREE.Vector3[]) {
    const vertexSum = vertexSums[vertexIndex];
    const neighborPosition = positions[neighborIndex];
    vertexSums[vertexIndex] = vertexSum.clone().add(neighborPosition);
    vertexCounts[vertexIndex] = vertexCounts[vertexIndex] + 1;
}

function smoothGeometry(positions: THREE.Vector3[], indices: number[]) {
    const vertexSums: any = {};
    const vertexCounts: any = {};
    for (let i = 0; i < positions.length; i++) {
        vertexSums[i] = new THREE.Vector3();
        vertexCounts[i] = 0;
    }
    for (let i = 0; i < indices.length; i += 3) {
        const index0 = indices[i];
        const index1 = indices[i + 1];
        const index2 = indices[i + 2];
        addNeighbor(index0, index1, vertexSums, vertexCounts, positions);
        addNeighbor(index0, index2, vertexSums, vertexCounts, positions);
        addNeighbor(index1, index2, vertexSums, vertexCounts, positions);
        addNeighbor(index1, index0, vertexSums, vertexCounts, positions);
        addNeighbor(index2, index0, vertexSums, vertexCounts, positions);
        addNeighbor(index2, index1, vertexSums, vertexCounts, positions);
    }
    for (let i = 0; i < positions.length; i++) {
        let sum = vertexSums[i];
        const count = vertexCounts[i];
        if (count > 0) {
            sum = sum.divideScalar(count);
            positions[i] = sum;
        }
    }
}

export {
    smoothGeometry
};