<script lang="ts">
    import { defineComponent } from 'vue';
    import Editor from './pages/Editor.vue';
import { state } from './state';

    export default defineComponent({
        components: {
            Editor
        },
        data() {
            return {
                state
            }
        }
    });
</script>

<template>
    <Editor></Editor>
</template>

<style scoped>
    * {
        cursor: v-bind("state.cursorShape");
    }
</style>
