<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<template>
    <div class="number-input">
        <input placeholder="px" type="number">
        <div class="number-input-icon">
            px
        </div>
    </div>
</template>

<style scoped>
    .number-input {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-foreground-2);
        height: 48px;
        border-radius: 8px;
    }

    .number-input-icon {
        padding-left: 4px;
        padding-right: 4px;
        height: 100%;
        overflow: hidden;
        border-radius: 0px 8px 8px 0px;
        background-color: var(--color-foreground-1);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .number-input input {
        width: 120px;
    }
</style>
