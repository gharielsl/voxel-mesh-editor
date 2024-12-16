import { ColorRepresentation } from "three"

export type VoxelMaterial = {
    color?: ColorRepresentation,
    texture?: string,
    normal?: string
}