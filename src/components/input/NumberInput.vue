<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        unit: String,
        value: Number
    },
    emits: {
        changeValue: (n: number) => {}
    },
    methods: {
        changeCallback(event: any) {
            this.$emit("changeValue", +event.target.value);
        },
        focus() {
            this.focused = true;
        },
        unFocus() {
            this.focused = false;
        },
        click() {
            const input = (this.$el as Element).querySelector("input") as HTMLInputElement;
            if (!this.focused) {
                input.focus();
                input.select();
            }
        }
    },
    data() {
        return {
            focused: false
        }
    }
});
</script>

<template>
    <div @click="click" class="number-input">
        <input @focusin="" @focusout="" @keyup="changeCallback" :value="value || 0" style="margin-left: 4px;" type="number">
        <div class="number-input-icon">
            {{ unit }}
        </div>
    </div>
</template>

<style scoped>
    .number-input {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-foreground-2-bright);
        height: 32px;
        border-radius: 8px;
        color: var(--color-text-disabled);
    }

    .number-input-icon {
        padding-left: 4px;
        padding-right: 4px;
        height: 100%;
        overflow: hidden;
        background-color: var(--color-foreground-1);
        border-radius: 0 8px 8px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .number-input input {
        width: 100px;
        color: var(--color-text-disabled);
        margin-bottom: 0.04em;
    }
</style>
