import CustomMaterial from "three-custom-shader-material/vanilla";
import * as THREE from "three";

function createVoxelMaterial(chunkSize: number, borderSize: number) {
    return new CustomMaterial({
        baseMaterial: THREE.MeshPhongMaterial,
        vertexShader: `
    varying vec3 fragPosition;
    
    void main() {
        fragPosition = position;
    }
        `,
        fragmentShader: `
    varying vec3 fragPosition;
    
    void main() {
        if (fragPosition.x < ${borderSize - 0.001} || fragPosition.x > ${chunkSize + borderSize + 0.001}) {
            csm_DiffuseColor = vec4(1, 0, 0, 1);
        }
        if (fragPosition.z < ${borderSize - 0.001} || fragPosition.z > ${chunkSize + borderSize + 0.001}) {
            csm_DiffuseColor = vec4(1, 0, 0, 1);
        }
    }
        `
    }) as any as THREE.MeshPhongMaterial;    
}

export {
    createVoxelMaterial
};
