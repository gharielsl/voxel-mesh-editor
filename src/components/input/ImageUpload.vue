<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        value: String
    },
    methods: {
        upload() {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = ".png,.jpg,.jpeg";
            input.multiple = false;
            input.addEventListener('change', (ev: Event) => {
                if (!input.files?.[0]) {
                    return;
                }
                const reader = new FileReader();
                reader.onload = () => {
                    this.$emit('selectImage', reader.result as string);
                }
                reader.onerror = () => {

                }
                const file = input.files[0];
                reader.readAsDataURL(file);
            });
            input.click();
        },
        reset(ev: Event) {
            ev.stopPropagation();
            this.$emit('selectImage', "");
        }
    },
    emits: {
        selectImage: (dataUri: string) => { }
    }
});
</script>

<template>
    <div @click="upload" class="input">
        <img v-if="value" :src="value" alt="">
        <div v-if="value" @click="reset" title="reset" class="H"><i class="bi bi-arrow-clockwise"></i></div>
    </div>
</template>

<style scoped>
.input {
    position: relative;
    width: 256px;
    height: 256px;
    background-color: black;
    border-radius: 8px;
    overflow: hidden;
}

.input:hover {
    cursor: pointer;
}

img {
    width: 100%;
    height: 100%;
}

.H {
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: white;
    font-weight: bolder;
}

.H:hover {
    background-color: rgba(255, 255, 255, 0.25);
}
</style>