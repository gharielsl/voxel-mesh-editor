import CustomMaterial from "three-custom-shader-material/vanilla";
import * as THREE from "three";
import { state } from "../state";

function createVoxelMaterial(chunkSize: number, borderSize: number, polygonOffset = false) {

    const materials = state.materials;

    let voxelColorFunc = "";

    materials.forEach((material, index) => {
        const color = new THREE.Color(material.color).toArray();
        voxelColorFunc += `
        if (voxelId == ${index + 1}) {
            return vec3(${color[0]}, ${color[1]}, ${color[2]});
        }
        `;
    });

    return new CustomMaterial({
        baseMaterial: THREE.MeshPhongMaterial,
        polygonOffset,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
        vertexShader: `
    varying vec3 fragPosition;
    
    void main() {
        fragPosition = position;
    }
        `,
        fragmentShader: `
    varying vec3 fragPosition;

    uniform sampler2D dataTexture;
    
    // vec4 sampleTex(sampler2D sampler, sampler2D samplerWall, float scale) {
    //     vec3 pWeight = abs(normal);
    //     pWeight /= pWeight.x + pWeight.y + pWeight.z;
    //     vec2 yz = position.yz / scale;
    //     vec2 xz = position.xz / scale;
    //     vec2 xy = position.xy / scale;
    //     vec4 xP = texture(samplerWall, yz) * pWeight.x;
    //     vec4 yP = texture(sampler, xz) * pWeight.y;
    //     vec4 zP = texture(samplerWall, xy) * pWeight.z;
    //     return xP + yP + zP;
    // }

    vec3 voxelColor(int voxelId) {
        ${voxelColorFunc}
        return vec3(0);
    }

    void main() {
        ivec3 voxelPosition = ivec3(fragPosition);
        vec3 localPosition = fragPosition - vec3(voxelPosition);

        if (fragPosition.x < ${borderSize - 0.001} || fragPosition.x > ${chunkSize + borderSize + 0.001}) {
            discard;
        }
        if (fragPosition.z < ${borderSize - 0.001} || fragPosition.z > ${chunkSize + borderSize + 0.001}) {
            discard;
        }

        vec3 accumulatedColor = vec3(0.0);
        float totalColorWeight = 0.0;
        
        for (int x = -1; x <= 2; x++) {
            for (int y = -1; y <= 2; y++) {
                for (int z = -1; z <= 2; z++) {
                    ivec3 currentPosition = voxelPosition + ivec3(x, y, z);
                    int voxelId = int(texelFetch(dataTexture, ivec2(currentPosition.z * ${chunkSize + borderSize * 2} + currentPosition.x, currentPosition.y), 0).r * 255.0);
                    if (voxelId == 0) continue;
                    vec3 color = voxelColor(voxelId);
                    float dist = length(localPosition - vec3(float(x), float(y), float(z)));
                    float weight = smoothstep(1.5, 0.0, dist);
                    if (weight <= 0.0) continue;
                    accumulatedColor += color * weight;
				    totalColorWeight += weight;
                }
            }
        }

        if (totalColorWeight > 0.0) {
            accumulatedColor /= totalColorWeight;
        }
        
        csm_DiffuseColor = vec4(accumulatedColor, 1);
    }
        `
    }) as any as THREE.MeshPhongMaterial;    
}

export {
    createVoxelMaterial
};
