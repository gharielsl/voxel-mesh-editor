<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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
                    this.src = reader.result as string;
                    this.$emit('selectImage', this.src);
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
    },
    data() {
        return {
            src: undefined as string | undefined
        }
    }
});
</script>

<template>
    <div @click="upload" class="input">
        <img v-if="src" :src="src" alt="">
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