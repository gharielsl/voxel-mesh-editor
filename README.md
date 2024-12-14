## Overview
Visit live demo - [Github Pages](https://gharielsl.github.io/voxel-mesh-editor).

The **Voxel Mesh Editor** is a tool for creating and editing voxel-based 3D models.

It allows to import and voxelify 3D models, sculpt with voxels, and to smooth out voxel meshes.

### Current and future features: 
- Object mode
    - [x] Copy paste
    - [ ] Undo
    - [ ] Fly controls
- Voxel mode
    - [x] Add/Remove
    - [x] Spray
    - [ ] Select
- Scene tree and property editor
    - [x] Hide/Show/Select
    - [x] March cubes
    - [x] Transform
    - [ ] Voxelify mesh
- [ ] Materials
- Import/Export
    - [ ] Save/Open
    - [ ] Import
- Misc
    - [ ] Measuring
    - [ ] First person walk
    - [ ] 3d annotations

## Controls

### General
- **Wheel Mouse Button + Drag**: Orbit.
- **Left Mouse Button + Drag**: Fly.
- **Left Mouse Button + WASD**: Fly - move.
- **Right Mouse Button + Drag**: Span.
- **Tab**: Switch between object mode and voxel mode.

### Object Mode
- **T**: Translate.
- **R**: Rotate.
- **G**: Scale.
- **F**: Select.
- **Delete**: Delete selected objects.
- **Ctrl + C**: Copy selected objects.
- **Ctrl + V**: Paste the copied object.

### Voxel Mode
- **Left Click**: Add a voxel.
- **Right Click**: Remove a voxel.
- **Ctrl + Drag**: Spray voxels.

## Voxelifying Imported Mesh
- On the menu bar select `File`.
- Import GLB/GLTF.
- Select your file.
- On the properties panel in the bottom right click `convert to voxel mesh`.

## Smoothing Voxel Meshes
- Select the mesh.
- On the properties panel tick `march cubes`.
- Tick `smooth`.
