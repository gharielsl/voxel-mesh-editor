<script lang="ts">
    import { defineComponent } from 'vue';
    import { state } from '../../state';

    export default defineComponent({
        data() {
            return {
                state
            }
        },
        methods: {
            dispatchRotationEvent(x: number, y: number, z: number) {
                document.dispatchEvent(new CustomEvent('ui-camera-rotate', {
                    detail: { x, y, z }
                }));
            },
            clickPX() {
                this.dispatchRotationEvent(0, -90, 180);
            },
            clickNX() {
                this.dispatchRotationEvent(0, 90, -180);
            },
            clickPY() {
                this.dispatchRotationEvent(-90, 0, -90);
            },
            clickNY() {
                this.dispatchRotationEvent(90, 0, 90);
            },
            clickPZ() {
                this.dispatchRotationEvent(-360, 180, 540);
            },
            clickNZ() {
                this.dispatchRotationEvent(0, 0, 540);
            }
        }
    });
</script>

<template>
    <div class="axis">
        <div class="axis-container">
            <div class="axis-cube">
                <div @click="clickPY" class="axis-face top">Y</div>
                <div @click="clickNY" class="axis-face bottom"></div>
                <div @click="clickNX" class="axis-face left"></div>
                <div @click="clickPX" class="axis-face right">X</div>
                <div @click="clickNZ" class="axis-face front"></div>
                <div @click="clickPZ" class="axis-face back">Z</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .axis {
        position: absolute;
        z-index: 50;
        bottom: 64px;
        right: 64px;
        color: black;
    }

    .axis-container {
        perspective: 200px;
    }

    .axis-cube {
        position: relative;
        width: 32px;
        height: 32px;
        transform-style: preserve-3d;
        transform: rotateX(v-bind("state.rotationX + 'deg'")) rotateY(v-bind("state.rotationY + 'deg'")) rotateZ(v-bind("state.rotationZ + 'deg'"));
    }

    .axis-face {
        /* width: 32px;
        height: 32px; */
        width: 100%;
        height: 100%;
        user-select: none;
        /* border: 2px solid black; */
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
        font-size: 16px;
    }

    .axis-face.top {
        background: greenyellow;
        transform: rotateX(90deg) translateZ(50px)
    }

    .axis-face.bottom {
        opacity: 0.5;
        background: rgb(171, 255, 46);
        transform: rotateX(-90deg) translateZ(50px)
    }

    .axis-face.left {
        opacity: 0.5;
        background: red;
        transform: rotateY(-90deg) translateZ(50px)
    }

    .axis-face.right {
        background: red;
        transform: rotateY(90deg) translateZ(50px)
    }

    .axis-face.front {
        opacity: 0.5;
        background: blue;
        transform: translateZ(50px)
    }

    .axis-face.back {
        background: blue;
        transform: rotateY(180deg) translateZ(50px)
    }

    .axis-face:hover {
        background: gray;
        color: white;
        font-weight: bolder;
    }
</style>
