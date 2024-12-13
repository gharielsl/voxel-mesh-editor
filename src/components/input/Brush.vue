<script lang="ts">
import { defineComponent } from 'vue';
import { state } from '../../state';

export default defineComponent({
    methods: {
        mouseClick(ev: MouseEvent) {
            if (this.justClicked) {
                this.justClicked = false;
                return;
            }
            const options = document.getElementById("brush-options");
            if (options) {
                const rect = options.getBoundingClientRect();
                this.showOptions =
                    ev.clientX >= rect.left &&
                    ev.clientX <= rect.right &&
                    ev.clientY >= rect.top &&
                    ev.clientY <= rect.bottom;
            }
        },
        setBrushShape(shape: string) {
            state.brushShape = shape;
        },
        inputChange(event: any) {
            state.brushSize = +event.target.value;
        }
    },
    mounted() {
        document.addEventListener("click", this.mouseClick);
    },
    unmounted() {
        document.removeEventListener("click", this.mouseClick);
    },
    data() {
        return {
            showOptions: false,
            justClicked: false,
            state
        }
    }
});
</script>

<template>
    <div class="brush-button">
        <div @click="showOptions = true;justClicked = true" class="icons">
            <i class="bi bi-brush-fill"></i>
            <i class="bi bi-caret-down-fill"></i>
        </div>
        <div id="brush-options" v-if="showOptions" class="brush-options">
            <div class="title">
                Brush
            </div>
            <p style="margin: 4px;margin-bottom:0;text-align: left;">Size</p>
            <div style="display: flex;margin-left: 4px;margin-right:4px;align-items: center;">
                <input @mousemove="inputChange" :value="state.brushSize" :min="1" max="64" class="custom-range" type="range" style="flex: 1">
                <span style="height:100%;width:18px;text-align:center;color:var(--color-text-disabled)">{{ state.brushSize }}</span>
                <span style="height:100%;margin-bottom: 0.1em;color:var(--color-text-disabled)">px</span>
            </div>
            <p style="margin: 4px;margin-bottom:0;text-align: left;">Shape</p>
            <div style="display: flex;width: 100%;justify-content: space-around;flex:1;align-items: center;">
                <div @click="setBrushShape('square')" class="brush-type" :style="`background-color: var(${state.brushShape === 'square' ? '--color-secondary' : '--color-foreground-2'});`">
                    <i class="bi bi-square-fill"></i>
                </div>
                <div @click="setBrushShape('round')" class="brush-type" :style="`background-color: var(${state.brushShape === 'round' ? '--color-secondary' : '--color-foreground-2'});`">
                    <i class="bi bi-circle-fill"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .brush-button {
        background-color: var(--color-foreground-2);
        width: 58px;
        height: 48px;
        border-radius: 8px;
        position: relative;
    }

    .icons:hover {
        color: var(--color-primary);
        cursor: pointer;
    }

    .icons {
        width: 58px;
        height: 48px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .brush-options {
        position: absolute;
        top: 56px;
        left: 0;
        width: 164px;
        height: 189px;
        border: 2px solid var(--color-foreground-2);
        background-color: var(--color-background);
        z-index: 99;
        display: flex;
        flex-direction: column;
        border-radius: 0 0 8px 8px;
    }

    .title {
        width: 100%;
        background-color: var(--color-foreground-2);
    }

    .brush-type {
        width: 50px;
        height: 50px; 
        background-color: var(--color-foreground-2);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .brush-type:hover {
        cursor: pointer;
        border: 1px solid var(--color-secondary);
    }

    .custom-range {
        -webkit-appearance: none;
        width: 100%;
        height: 10px;
        background: var(--color-foreground-2);
        border-radius: 5px;
        outline: none;
        transition: background 0.3s ease-in-out;
    }

    .custom-range:hover {
        background: var(--color-foreground-2-bright);
    }

    .custom-range::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 14px;
        height: 14px;
        background: var(--color-foreground-2-se);
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }

    .custom-range::-moz-range-thumb {
        width: 14px;
        height: 14px;
        background: var(--color-foreground-2-se);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }

    .custom-range::-ms-thumb {
        width: 14px;
        height: 14px;
        background: var(--color-foreground-2-se);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }

    .custom-range:active::-webkit-slider-thumb {
        background: var(--color-secondary);
    }

    .custom-range:active::-moz-range-thumb {
        background: var(--color-secondary);
    }

    .custom-range:active::-ms-thumb {
        background: var(--color-secondary);
    }
</style>
