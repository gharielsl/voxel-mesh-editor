<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({

    });
</script>

<template>
    <div class="top-section">
        <div class="menu-bar">
            <div class="menu-item">
                <div class="menu-item-button">
                    File
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-item-button">
                    Edit
                </div>
            </div>
            <div class="menu-item">
                <div class="menu-item-button">
                    Add
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .top-section {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
    }

    .menu-bar {
        width: 100%;
        height: 32px;
        background-color: var(--color-foreground-1);
        border-bottom: 1px var(--color-border) solid;
        display: flex;
    }

    .menu-item {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 8px;
        padding-right: 8px;
    }

    .menu-item-button {
        padding-left: 8px;
        padding-right: 8px;
    }

    .menu-item-button:hover {
        padding-left: 7px;
        padding-right: 7px;
        border-radius: 8px;
        border: 1px var(--color-secondary) dashed;
        cursor: pointer;
    }
</style>
