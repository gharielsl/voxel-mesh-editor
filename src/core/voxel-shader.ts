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

    uniform int marchCubes;
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

    int getVoxelId(ivec3 position) {
        return int(texelFetch(dataTexture, ivec2(position.z * ${chunkSize + borderSize * 2} + position.x, position.y), 0).r * 255.0);
    }

    void main() {
        vec3 position = fragPosition + 0.5;
        ivec3 voxelPosition = ivec3(position);
        vec3 localPosition = position - vec3(voxelPosition);

        if (position.x < ${borderSize.toFixed(1)} || position.x > float(${chunkSize + borderSize})) {
            discard;
        }
        if (position.z < ${borderSize.toFixed(1)} || position.z > float(${chunkSize + borderSize})) {
            discard;
        }

        vec3 accumulatedColor = vec3(0.0);
        float totalColorWeight = 0.0;
        
        if (marchCubes == 1) {
            for (int x = -1; x <= 2; x++) {
                for (int y = -1; y <= 2; y++) {
                    for (int z = -1; z <= 2; z++) {
                        ivec3 currentPosition = voxelPosition + ivec3(x, y, z);
                        int voxelId = getVoxelId(currentPosition);
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
        } else {
            int voxelId = getVoxelId(voxelPosition);
            accumulatedColor = voxelColor(voxelId);
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
