import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import MeshObject from "./MeshObject";
import { state } from "../state";

class TransformationContext {
    static INSTANCE = new TransformationContext();
    translateX?: MeshObject;
    translateY?: MeshObject;
    translateZ?: MeshObject;
    translateFree?: MeshObject;
    scaleX?: MeshObject;
    scaleY?: MeshObject;
    scaleZ?: MeshObject;
    scaleFree?: MeshObject;
    rotateX?: MeshObject;
    rotateY?: MeshObject;
    rotateZ?: MeshObject;
    rotateFree?: MeshObject;
    rotateCover?: MeshObject;
    scene: THREE.Object3D = new THREE.Object3D();
    selectedObjects: MeshObject[] = [];
    camera?: THREE.Camera;
    rotateMaterialX?: THREE.ShaderMaterial;
    rotateMaterialY?: THREE.ShaderMaterial;
    rotateMaterialZ?: THREE.ShaderMaterial;

    update = (camera: THREE.Camera) => {
        this.camera = camera;
        if (state.currentMode !== 'object') {
            this.selectedObjects = [];
        }
        let scale = camera.position.distanceTo(this.scene.position);
        if (scale < 35) {
            scale = 35;
        }
        this.scene.scale.x = scale / 35;
        this.scene.scale.y = scale / 35;
        this.scene.scale.z = scale / 35;
        state.multipleSelections = this.selectedObjects.length > 1;
        if (this.selectedObjects.length > 0) {
            state.selectedObject = this.selectedObjects[this.selectedObjects.length - 1];
            this.scene.position.set(0, 0, 0);
            this.selectedObjects.forEach((mesh) => {
                this.scene.position.add(mesh.position);
            });
            this.scene.position.divideScalar(this.selectedObjects.length);
            // this.scene.userData.visible = true;
            this.setVisible(true);
        } else {
            this.setVisible(false);
            state.selectedObject = undefined;
            // this.scene.userData.visible = false;
        }
        if (this.rotateMaterialX) {
            this.rotateMaterialX.uniforms.p.value = this.scene.position;
        }
        if (this.rotateMaterialY) {
            this.rotateMaterialY.uniforms.p.value = this.scene.position;
        }
        if (this.rotateMaterialZ) {
            this.rotateMaterialZ.uniforms.p.value = this.scene.position;
        }
        
    }

    setVisible = (visible: boolean) => {
        this.scene.userData.visible = visible;
        if (state.objectModeState === 'move' && state.currentMode === 'object') {
            this.scene.traverse((child) => {
                child.visible = visible && [this.translateX, this.translateY, this.translateZ, this.translateFree].includes(child as MeshObject);
                (child as MeshObject).draggable = child.visible;
                (child as MeshObject).disableMouseEvents = !child.visible;
            });
        } else if (state.objectModeState === 'scale' && state.currentMode === 'object') {
            this.scene.traverse((child) => {
                child.visible = visible && [this.scaleX, this.scaleY, this.scaleZ, this.scaleFree].includes(child as MeshObject);
                (child as MeshObject).draggable = child.visible;
                (child as MeshObject).disableMouseEvents = !child.visible;
            });
        } else if (state.objectModeState === 'rotate' && state.currentMode === 'object') {
            this.scene.traverse((child) => {
                child.visible = visible && [this.rotateX, this.rotateY, this.rotateZ, this.rotateFree].includes(child as MeshObject);
                (child as MeshObject).draggable = child.visible;
                (child as MeshObject).disableMouseEvents = !child.visible;
            });
        } else {
            this.scene.traverse((child) => {
                child.visible = false;
                (child as MeshObject).draggable = false;
                (child as MeshObject).disableMouseEvents = true;
            });
            this.scene.userData.visible = false;
        }
    }

    constructor() {
        const loader = new GLTFLoader();
        loader.load('/mesh/translate_mesh.glb', (gltf) => {
            const children = [...gltf.scene.children];
            children.forEach((child) => {
                let mesh = child as MeshObject;
                if (mesh.isMesh) {
                    // (mesh as any).material.opacity = 0.5;
                    mesh = MeshObject.fromMesh(mesh);
                    mesh.draggable = false;
                    mesh.internal = true;
                    mesh.geometry.computeBoundingBox();
                }
                if (mesh.name === 'X') {
                    this.translateX = mesh;
                    this.scene.add(mesh);
                } else if (mesh.name === 'Y') {
                    this.translateY = mesh;
                    this.scene.add(mesh);
                } else if (mesh.name === 'Z') {
                    this.translateZ = mesh;
                    this.scene.add(mesh);
                } else if (mesh.name === 'Free') {
                    this.translateFree = mesh;
                    this.scene.add(mesh);
                }
            });
            this.translateX?.addDragListener((ev) => {
                if (state.objectModeState !== 'move' || state.currentMode !== 'object') {
                    return;
                }
                this.selectedObjects.forEach((mesh) => {
                    if (ev.isFirstMovement) {
                        mesh.userData.position = mesh.position.clone();
                    }
                    let movement = ev.movement3dXZ.x - ev.movement3dOriginXZ.x;
                    mesh.userData.position.x += movement;
                    if (state.snapActive) {
                        mesh.position.x = Math.round(mesh.userData.position.x / 10) * 10;
                    } else {
                        mesh.position.x = mesh.userData.position.x;
                    }
                });
            });
            this.translateY?.addDragListener((ev) => {
                if (state.objectModeState !== 'move' || state.currentMode !== 'object') {
                    return;
                }
                this.selectedObjects.forEach((mesh) => {
                    if (ev.isFirstMovement) {
                        mesh.userData.position = mesh.position.clone();
                    }
                    let movement = ev.movement3dY.y - ev.movement3dOriginY.y;
                    mesh.userData.position.y += movement;
                    if (state.snapActive) {
                        mesh.position.y = Math.round(mesh.userData.position.y / 10) * 10;
                    } else {
                        mesh.position.y = mesh.userData.position.y;
                    }
                });
            });
            this.translateZ?.addDragListener((ev) => {
                if (state.objectModeState !== 'move' || state.currentMode !== 'object') {
                    return;
                }
                this.selectedObjects.forEach((mesh) => {
                    if (ev.isFirstMovement) {
                        mesh.userData.position = mesh.position.clone();
                    }
                    let movement = ev.movement3dXZ.z - ev.movement3dOriginXZ.z;
                    mesh.userData.position.z += movement;
                    if (state.snapActive) {
                        mesh.position.z = Math.round(mesh.userData.position.z / 10) * 10;
                    } else {
                        mesh.position.z = mesh.userData.position.z;
                    }
                });
            });
        }, () => { }, console.error);


        loader.load('/mesh/scale_mesh.glb', (gltf) => {
            const children = [...gltf.scene.children];
            children.forEach((child) => {
                let mesh = child as MeshObject;
                if (mesh.isMesh) {
                    // (mesh as any).material.opacity = 0.5;
                    mesh = MeshObject.fromMesh(mesh);
                    mesh.draggable = false;
                    mesh.internal = true;
                    mesh.geometry.computeBoundingBox();
                }
                if (mesh.name === 'X') {
                    this.scaleX = mesh;
                    this.scene.add(mesh);
                } else if (mesh.name === 'Y') {
                    this.scaleY = mesh;
                    this.scene.add(mesh);
                } else if (mesh.name === 'Z') {
                    this.scaleZ = mesh;
                    this.scene.add(mesh);
                } else if (mesh.name === 'Free') {
                    this.scaleFree = mesh;
                    this.scene.add(mesh);
                }
            });
            this.scaleX?.addDragListener((ev) => {
                if (state.objectModeState !== 'scale' || state.currentMode !== 'object') {
                    return;
                }
                this.selectedObjects.forEach((mesh) => {
                    if (ev.isFirstMovement) {
                        mesh.userData.scale = mesh.scale.clone();
                    }
                    let movement = ev.movement3dXZ.x - ev.movement3dOriginXZ.x;
                    mesh.userData.scale.x += movement / 2;
                    if (state.snapActive) {
                        mesh.scale.x = Math.round(mesh.userData.scale.x / 2.5) * 2.5;
                    } else {
                        mesh.scale.x = mesh.userData.scale.x;
                    }
                    mesh.scale.x = Math.max(mesh.scale.x, 1);
                });
            });
            this.scaleY?.addDragListener((ev) => {
                if (state.objectModeState !== 'scale' || state.currentMode !== 'object') {
                    return;
                }
                this.selectedObjects.forEach((mesh) => {
                    if (ev.isFirstMovement) {
                        mesh.userData.scale = mesh.scale.clone();
                    }
                    let movement = ev.movement3dY.y - ev.movement3dOriginY.y;
                    mesh.userData.scale.y += movement / 2;
                    if (state.snapActive) {
                        mesh.scale.y = Math.round(mesh.userData.scale.y / 2.5) * 2.5;
                    } else {
                        mesh.scale.y = mesh.userData.scale.y;
                    }
                    mesh.scale.y = Math.max(mesh.scale.y, 1);
                });
            });
            this.scaleZ?.addDragListener((ev) => {
                if (state.objectModeState !== 'scale' || state.currentMode !== 'object') {
                    return;
                }
                this.selectedObjects.forEach((mesh) => {
                    if (ev.isFirstMovement) {
                        mesh.userData.scale = mesh.scale.clone();
                    }
                    let movement = ev.movement3dXZ.z - ev.movement3dOriginXZ.z;
                    mesh.userData.scale.z -= movement / 2;
                    if (state.snapActive) {
                        mesh.scale.z = Math.round(mesh.userData.scale.z / 2.5) * 2.5;
                    } else {
                        mesh.scale.z = mesh.userData.scale.z;
                    }
                    mesh.scale.z = Math.max(mesh.scale.z, 1);
                });
            });
        }, () => { }, console.error);

        loader.load('/mesh/rotate_mesh.glb', (gltf) => {
            const children = [...gltf.scene.children];

            const createRotateShader = (color: THREE.Color) => {
                return new THREE.ShaderMaterial({
                    vertexShader: `
                    varying vec3 vWorldPosition;
    
                    void main() {
                        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                        vWorldPosition = worldPosition.xyz;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                    `,
                    fragmentShader: `
                    uniform vec3 p;
                    uniform vec3 color;
    
                    varying vec3 vWorldPosition;
    
                    void main() {
                        vec3 toFragment = vWorldPosition - p;
                        vec3 planeNormal = normalize(cameraPosition - p);
                        float dotProduct = dot(planeNormal, toFragment);
                        if (dotProduct < 0.0) {
                            discard;
                        }
                        gl_FragColor = vec4(color.xyz, 1.0);
                    }
                    `,
                    uniforms: {
                        color: {
                            value: color,
                        },
                        p: {
                            value: new THREE.Vector3(0)
                        }
                    }
                });
            }
            this.rotateMaterialX = createRotateShader(new THREE.Color("#E70200"));
            this.rotateMaterialY = createRotateShader(new THREE.Color("#30E700"));
            this.rotateMaterialZ = createRotateShader(new THREE.Color("#1500E7"));

            children.forEach((child) => {
                let mesh = child as MeshObject;
                if (mesh.isMesh) {
                    mesh = MeshObject.fromMesh(mesh);
                    mesh.draggable = false;
                    mesh.internal = true;
                    mesh.geometry.computeBoundingBox();
                }
                if (mesh.name === 'X') {
                    (mesh as any).material = this.rotateMaterialX;
                    this.rotateX = mesh;
                    this.scene.add(mesh);
                } else if (mesh.name === 'Y') {
                    (mesh as any).material = this.rotateMaterialY;
                    this.rotateY = mesh;
                    this.scene.add(mesh);
                } else if (mesh.name === 'Z') {
                    (mesh as any).material = this.rotateMaterialZ;
                    this.rotateZ = mesh;
                    this.scene.add(mesh);
                } else if (mesh.name === 'Free') {
                    this.rotateFree = mesh;
                    (mesh.material as THREE.MeshStandardMaterial).side = THREE.DoubleSide;
                    // (mesh.material as THREE.MeshStandardMaterial).color = new THREE.Color(1, 0.5, 0.5);
                    // (mesh.material as THREE.MeshStandardMaterial).opacity = 0.2;
                    // this.scene.add(mesh);
                }
            });

            
            this.rotateX?.addDragListener((ev) => {
                if (state.objectModeState !== 'rotate' || state.currentMode !== 'object') {
                    return;
                }
                this.selectedObjects.forEach((mesh) => {
                    if (ev.isFirstMovement) {
                        mesh.userData.rotation = mesh.rotation.clone();
                        mesh.userData.prevAngleX = Math.atan2(ev.movement3dOriginY.z, ev.movement3dOriginY.y);
                    }
                    const currentAngleX = Math.atan2(ev.movement3dY.z, ev.movement3dY.y);
                    let deltaAngleX = currentAngleX - mesh.userData.prevAngleX;
                    if (deltaAngleX > Math.PI) {
                        deltaAngleX -= 2 * Math.PI;
                    } else if (deltaAngleX < -Math.PI) {
                        deltaAngleX += 2 * Math.PI;
                    }
                    mesh.userData.prevAngleX = currentAngleX;
                    mesh.userData.rotation.x += deltaAngleX;
                    if (state.snapActive) {
                        mesh.rotation.x = Math.round(mesh.userData.rotation.x / (Math.PI / 18)) * (Math.PI / 18);
                    } else {
                        mesh.rotation.x = mesh.userData.rotation.x;
                    }
                });
            });

            this.rotateY?.addDragListener((ev) => {
                if (state.objectModeState !== 'rotate' || state.currentMode !== 'object') {
                    return;
                }
                this.selectedObjects.forEach((mesh) => {
                    if (ev.isFirstMovement) {
                        mesh.userData.rotation = mesh.rotation.clone();
                        mesh.userData.prevAngle = Math.atan2(ev.movement3dOriginXZ.z, ev.movement3dOriginXZ.x);
                    }
                    const currentAngle = Math.atan2(ev.movement3dXZ.z, ev.movement3dXZ.x);
                    let deltaAngle = currentAngle - mesh.userData.prevAngle;
                    if (deltaAngle > Math.PI) {
                        deltaAngle -= 2 * Math.PI;
                    } else if (deltaAngle < -Math.PI) {
                        deltaAngle += 2 * Math.PI;
                    }
                    mesh.userData.prevAngle = currentAngle;

                    mesh.userData.rotation.y -= deltaAngle;
                    if (state.snapActive) {
                        mesh.rotation.y = Math.round(mesh.userData.rotation.y / (Math.PI / 18)) * (Math.PI / 18);
                    } else {
                        mesh.rotation.y = mesh.userData.rotation.y;
                    }
                });
            });

            this.rotateZ?.addDragListener((ev) => {
                if (state.objectModeState !== 'rotate' || state.currentMode !== 'object') {
                    return;
                }
                this.selectedObjects.forEach((mesh) => {
                    if (ev.isFirstMovement) {
                        mesh.userData.rotation = mesh.rotation.clone();
                        mesh.userData.prevAngleZ = Math.atan2(ev.movement3dOriginY.y, ev.movement3dOriginY.x);
                    }
                    const currentAngleZ = Math.atan2(ev.movement3dY.y, ev.movement3dY.x);
                    let deltaAngleZ = currentAngleZ - mesh.userData.prevAngleZ;
                    if (deltaAngleZ > Math.PI) {
                        deltaAngleZ -= 2 * Math.PI;
                    } else if (deltaAngleZ < -Math.PI) {
                        deltaAngleZ += 2 * Math.PI;
                    }
                    mesh.userData.prevAngleZ = currentAngleZ;
                    mesh.userData.rotation.z += deltaAngleZ;
                    if (state.snapActive) {
                        mesh.rotation.z = Math.round(mesh.userData.rotation.z / (Math.PI / 18)) * (Math.PI / 18);
                    } else {
                        mesh.rotation.z = mesh.userData.rotation.z;
                    }
                });
            });
        }, () => { }, console.error);
    }
}

export default TransformationContext;