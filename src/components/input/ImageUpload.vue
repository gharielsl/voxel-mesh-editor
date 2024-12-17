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
    </div>
</template>

<style scoped>
.input {
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
</style>