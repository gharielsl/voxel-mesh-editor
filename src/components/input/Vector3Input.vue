<script lang="ts">
import * as THREE from "three";
import { defineComponent } from 'vue';
import NumberInput from "./NumberInput.vue";

export default defineComponent({
    components: {
        NumberInput
    },
    props: {
        xp: Number,
        yp: Number,
        zp: Number,
        unit: String
    },
    emits: {
        changeValue: (v: THREE.Vector3) => {

        }
    },
    methods: {
        xc(x: number) {
            this.updateFromProps();
            this.x = x;
            this.$emit("changeValue", new THREE.Vector3(this.x, this.y, this.z));
        },
        yc(y: number) {
            this.updateFromProps();
            this.y = y;
            this.$emit("changeValue", new THREE.Vector3(this.x, this.y, this.z));
        },
        zc(z: number) {
            this.updateFromProps();
            this.z = z;
            this.$emit("changeValue", new THREE.Vector3(this.x, this.y, this.z));
        },
        updateFromProps() {
            this.x = this.$props.xp,
            this.y = this.$props.yp,
            this.z = this.$props.zp
        }
    },
    data() {
        return {
            x: this.$props.xp,
            y: this.$props.yp,
            z: this.$props.zp
        }
    }
});
</script>

<template>
    <div class="container">
        <h5>X:</h5>
        <NumberInput @changeValue="xc" :unit="unit || 'm'" :value="xp" />
    </div>
    <div class="container">
        <h5>Y:</h5>
        <NumberInput @changeValue="yc" :unit="unit || 'm'" :value="yp" />
    </div>
    <div class="container">
        <h5>Z:</h5>
        <NumberInput @changeValue="zc" :unit="unit || 'm'" :value="zp" />
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;
        margin-bottom: 8px;
    }

    h5 {
        margin: 0;
    }
</style>