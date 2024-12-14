<script lang="ts">
import { defineComponent, ref } from 'vue';
import * as THREE from "three";
import MeshObject from '../../core/MeshObject';
import { state } from '../../state';
import TransformationContext from '../../core/TransformationContext';

export default defineComponent({
    props: {
        defaultCollapsed: Boolean,
        item: THREE.Object3D,
        level: Number,
        index: Number
    },
    mounted() {
        this.interval = setInterval(() => {
            this.$forceUpdate();
        }, 100);
    },
    unmounted() {
        clearInterval(this.interval);
    },
    methods: {
        checkChange(item: MeshObject, event: any, isProxy: boolean, hide: boolean) {
            let itemTarget: MeshObject | undefined;
            if (isProxy) {
                (window as any).renderingContext?.scene.traverse((child: any) => {
                    if (child.id === item.id) {
                        itemTarget = child as MeshObject;
                    }
                });
            } else {
                itemTarget = item;
            }
            if (!itemTarget) {
                return;
            }
            if (hide && !this.isItemInternal(itemTarget)) {
                itemTarget.visible = !itemTarget.visible;
            }
            if (!this.isItemInternal(itemTarget) && event.target.checked && !itemTarget.selected && !hide) {
                itemTarget.select();
                TransformationContext.INSTANCE.selectedObjects.push(itemTarget);
                if (state.renderingContext?.outlinePass) {
                    state.renderingContext.outlinePass.selectedObjects = TransformationContext.INSTANCE.selectedObjects;
                }
            } 
            if (!this.isItemInternal(itemTarget) && !event.target.checked && itemTarget.selected && !hide) {
                itemTarget.unselect();
                let indexOfMesh = TransformationContext.INSTANCE.selectedObjects.indexOf(itemTarget);
                if (indexOfMesh !== -1) {
                    TransformationContext.INSTANCE.selectedObjects.splice(indexOfMesh, 1);
                    if (state.renderingContext?.outlinePass) {
                        state.renderingContext.outlinePass.selectedObjects = TransformationContext.INSTANCE.selectedObjects;
                    }
                }
            }
            if (itemTarget) {
                itemTarget.children.forEach((child) => {
                    if (child instanceof MeshObject) {
                        this.checkChange(child, event, false, hide);
                    }
                });
            }
        },
        itemHasChildren(item: MeshObject) {
            if (!item) {
                return false;
            }
            if (state.treeShowInternal) {
                return item.children.length > 0;
            }
            return (item?.children.filter((i: any) => i.isMeshObject).length || 0) > 0
        },
        areAllChildrenSelected(item: MeshObject) {
            if (!item) {
                return false;
            }
            let childCount = 0;
            for (const child of item.children) {
                if (child instanceof MeshObject && !this.isItemInternal(child)) {
                    childCount++;
                    if (!child.selected) {
                        return false;
                    }
                }
            }
            return childCount > 0;
        },
        isItemInternal(item: THREE.Object3D) {
            if (!item) {
                return true;
            }
            return (!(item as MeshObject)?.isMeshObject && 
                !item?.userData.isRootScene) || 
                (item as MeshObject).internal
        }
    },
    setup(props) {
        const hoverIndex = ref<number | null>(null);

        const onMouseOver = (index: number) => {
            hoverIndex.value = index;
        };

        const onMouseLeave = () => {
            hoverIndex.value = null;
        };

        return {
            hoverIndex,
            onMouseOver,
            onMouseLeave,
            interval: 0,
            collapsed: props.defaultCollapsed
        };
    },
    data() {
        return {
            state
        }
    }
});
</script>

<template>
    <div class="item">
        <div :style="`transform: translateX(${(level || 0) * 16}px);width:100%`">
            <div class="title" @mouseover="onMouseOver(index as number)" @mouseleave="onMouseLeave" :class="{ hovered: hoverIndex === index }">
                <div @click="collapsed=!collapsed;" class="title-left">
                    <i :class="{'bi bi-caret-down-fill': !collapsed, 'bi bi-caret-right-fill': collapsed}" :style="`display: ${itemHasChildren(item as MeshObject) ? 'block' : 'none'}`"></i>
                    <div style="margin-left: 4px;">
                        {{ item?.name || (item as any)?.constructor.name + `<#${item?.id}>` }}
                    </div>
                </div>
                <div class="title-right">
                    <i v-if="!isItemInternal(item as any)" @click="checkChange(item as MeshObject, $event, true, true)" :class="{'bi bi-eye-fill': (item as any)?.visible, 'bi bi-eye-slash-fill': !(item as any)?.visible}"></i>
                    <input :disabled="(state.currentMode !== 'object') || isItemInternal(item as any)" @change="checkChange(item as MeshObject, $event, true, false)" type="checkbox" :checked="(item as MeshObject)?.selected || areAllChildrenSelected(item as MeshObject)">
                </div>
            </div>
            <div v-if="!collapsed" v-for="(child, idx) in item?.children" :key="child.id || idx" style="width:100%">
                <SceneTreeItem 
                    v-if="!isItemInternal(child) || state.treeShowInternal"
                    :defaultCollapsed="false" 
                    :item="child" 
                    :level="(level || 0) + 1" 
                    :index="idx"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .item {
        width: v-bind("`calc(100% - ${(level || 0) * 16}px)`");
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .title {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    .title-left {
        display: flex;
        align-items: center;
    }

    .title-right {
        display: flex;
        align-items: center;
    }

    .title.hovered {
        color: var(--color-primary);
    }

    i {
        margin-top: 0.1em;
        color: var(--color-text) !important;
    }

    i:hover {
        color: var(--color-secondary);
        cursor: pointer;
    }

    .bi-eye-slash-fill {
        color: var(--color-text-disabled) !important;
    }
</style>