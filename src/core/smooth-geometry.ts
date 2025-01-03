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

function getOrCreateMidpoint(
    i0: number,
    i1: number,
    positions: THREE.Vector3[],
    cache: Map<string, number>
): number {
    const edgeKey = i0 < i1 ? `${i0},${i1}` : `${i1},${i0}`;
    if (cache.has(edgeKey)) {
        return cache.get(edgeKey)!;
    }
    const midpoint = new THREE.Vector3(
        (positions[i0].x + positions[i1].x) / 2,
        (positions[i0].y + positions[i1].y) / 2,
        (positions[i0].z + positions[i1].z) / 2
    );
    const midpointIndex = positions.length;
    positions.push(midpoint);
    cache.set(edgeKey, midpointIndex);
    return midpointIndex;
}

function subdivide(positions: THREE.Vector3[], indices: number[]): void {
    const midpointCache = new Map<string, number>();
    const newIndices: number[] = [];

    for (let i = 0; i < indices.length; i += 3) {
        const i0 = indices[i];
        const i1 = indices[i + 1];
        const i2 = indices[i + 2];

        const m01 = getOrCreateMidpoint(i0, i1, positions, midpointCache);
        const m12 = getOrCreateMidpoint(i1, i2, positions, midpointCache);
        const m20 = getOrCreateMidpoint(i2, i0, positions, midpointCache);

        newIndices.push(
            i0, m01, m20,
            m01, i1, m12,
            m20, m12, i2,
            m01, m12, m20
        );
    }

    indices.length = 0;
    indices.push(...newIndices);
}

export {
    smoothGeometry,
    subdivide
};