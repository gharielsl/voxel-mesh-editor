import CustomMaterial from "three-custom-shader-material/vanilla";
import * as THREE from "three";
import { state } from "../state";

function createVoxelMaterial(chunkSize: number, borderSize: number, polygonOffset = false) {

    const materials = state.materials;

    let voxelColorFunc = "";
    let uniforms = "";

    materials.forEach((material, index) => {
        if (!material) return;
        const color = new THREE.Color(material.color).toArray();
        if (material.texture) {
            uniforms += `uniform sampler2D texture_${index + 1};`;
        }
        if (material.normal) {
            uniforms += `uniform sampler2D texture_${index + 1}_n;`;
        }
        voxelColorFunc += `
        if (voxelId == ${index + 1}) {
            hasNormal = false;
            vec3 color = vec3(${color[0]}, ${color[1]}, ${color[2]});
        `;
        if (material.texture) {
            voxelColorFunc += `
            color *= sampleTex(texture_${index + 1}, texture_${index + 1}, 16.0).rgb;
            `;
        }
        if (material.normal) {
            voxelColorFunc += `
            hasNormal = true;
            normal = sampleTex(texture_${index + 1}_n, texture_${index + 1}_n, 16.0).rgb;
            `;
        }
        voxelColorFunc += `
            return color;
        }
        `;
    });

    const material = new CustomMaterial({
        baseMaterial: THREE.MeshPhysicalMaterial,
        polygonOffset,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
        metalness: 0,
        roughness: 1,
        vertexShader: `
    varying vec3 fragPosition;
    varying vec3 fragNormal;
    
    void main() {
        fragPosition = position;
        fragNormal = normal;
    }
        `,
        fragmentShader: `
    varying vec3 fragPosition;
    varying vec3 fragNormal;

    uniform int marchCubes;
    uniform sampler2D dataTexture;
    ${uniforms}
    
    vec4 sampleTex(sampler2D sampler, sampler2D samplerWall, float scale) {
        vec3 position = marchCubes == 0 ? fragPosition + 0.5 : fragPosition;
        vec3 pWeight = abs(fragNormal);
        pWeight /= pWeight.x + pWeight.y + pWeight.z;
        vec2 yz = position.yz / scale;
        vec2 xz = position.xz / scale;
        vec2 xy = position.xy / scale;
        vec4 xP = texture(samplerWall, yz) * pWeight.x;
        vec4 yP = texture(sampler, xz) * pWeight.y;
        vec4 zP = texture(samplerWall, xy) * pWeight.z;
        return xP + yP + zP;
    }

    vec3 voxelColor(int voxelId, out vec3 normal, out bool hasNormal) {
        ${voxelColorFunc}
        return vec3(0);
    }

    int getVoxelId(ivec3 position) {
        return int(texelFetch(dataTexture, ivec2(position.z * ${chunkSize + borderSize * 2} + position.x, position.y), 0).r * 255.0);
    }

    void main() {
        vec3 csm_NormalMap;
        vec3 position = marchCubes == 0 ? fragPosition + 0.5 : fragPosition;
        ivec3 voxelPosition = ivec3(position);
        vec3 localPosition = position - vec3(voxelPosition);

        if (position.x < ${borderSize.toFixed(1)} || position.x > float(${chunkSize + borderSize})) {
            discard;
        }
        if (position.z < ${borderSize.toFixed(1)} || position.z > float(${chunkSize + borderSize})) {
            discard;
        }

        vec3 accumulatedColor = vec3(0.0);
        vec3 accumulatedNormal = vec3(0.0);
        float totalColorWeight = 0.0;
        float totalNormalWeight = 0.0;
        bool cubeHasNormal;
        
        if (marchCubes == 1) {
            for (int x = -1; x <= 2; x++) {
                for (int y = -1; y <= 2; y++) {
                    for (int z = -1; z <= 2; z++) {
                        ivec3 currentPosition = voxelPosition + ivec3(x, y, z);
                        int voxelId = getVoxelId(currentPosition);
                        if (voxelId == 0) continue;
                        bool hasNormal;
                        vec3 normal;
                        vec3 color = voxelColor(voxelId, normal, hasNormal);
                        float dist = length(localPosition - vec3(float(x), float(y), float(z)));
                        float weight = smoothstep(1.5, 0.0, dist);
                        if (weight <= 0.0) continue;
                        accumulatedColor += color * weight;
                        totalColorWeight += weight;
                        if (!hasNormal) continue;
                        accumulatedNormal += normal * weight;
                        totalNormalWeight += weight;
                    }
                }
            }
        } else {
            int voxelId = getVoxelId(voxelPosition);
            accumulatedColor = voxelColor(voxelId, accumulatedNormal, cubeHasNormal);
        }
        

        if (totalColorWeight > 0.0) {
            accumulatedColor /= totalColorWeight;
        }

        if (totalNormalWeight > 0.0) {
            accumulatedNormal /= totalNormalWeight;
        }
        
        csm_DiffuseColor = vec4(accumulatedColor, 1);
        if (marchCubes == 0 && cubeHasNormal) {
            csm_Bump  = accumulatedNormal;
        } else if (totalNormalWeight > 0.0) {
            csm_Bump  = accumulatedNormal;
        }
    }
        `
    });

    materials.forEach((mat, index) => {
        if (!mat) return;
        const i = ++index;
        if (mat.textureGl) {
            mat.textureGl.dispose();
        }
        if (mat.normalGl) {
            mat.normalGl.dispose();
        }
        if (mat.texture) {
            const tex = new THREE.TextureLoader().load(mat.texture);
            tex.wrapS = THREE.RepeatWrapping;
            tex.wrapT = THREE.RepeatWrapping;
            mat.textureGl = tex;
            if (!material.uniforms["texture_" + i]) {
                material.uniforms["texture_" + i] = { value: null };
            }
            material.uniforms["texture_" + i].value = tex;
        } else {
            delete material.uniforms["texture_" + i];
        }
        if (mat.normal) {
            const tex = new THREE.TextureLoader().load(mat.normal);
            tex.wrapS = THREE.RepeatWrapping;
            tex.wrapT = THREE.RepeatWrapping;
            mat.textureGl = tex;
            if (!material.uniforms["texture_" + i + "_n"]) {
                material.uniforms["texture_" + i + "_n"] = { value: null };
            }
            material.uniforms["texture_" + i + "_n"].value = tex;
        } else {
            delete material.uniforms["texture_" + i + "_n"];
        }
    });

    return material as any as THREE.MeshPhysicalMaterial;
}

export {
    createVoxelMaterial
};
