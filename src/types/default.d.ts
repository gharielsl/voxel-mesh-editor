import { ColorRepresentation, Texture } from "three"

export type VoxelMaterial = {
    color?: string,
    texture?: string,
    normal?: string,
    textureGl?: Texture,
    normalGl?: Texture
}