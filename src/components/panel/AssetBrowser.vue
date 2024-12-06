<script lang="ts">
import { defineComponent } from 'vue';

    export default defineComponent({

    });
</script>

<template>
    <div class="bottom-section">
        <div class="tree-browser">

        </div>
        <div class="visual-browser-container">
            <div class="browser-tools">
                <div class="browser-tools-add">Add +</div>
                <div class="browser-tools-title">Material Browser</div>
                <div class="browser-tools-search">
                    <input placeholder="Search" type="text">
                    <div class="browser-tools-search-icon">
                        <i class="bi bi-search"></i>
                    </div>
                </div>
            </div>
            <div class="visual-browser">
                
            </div>
        </div>
    </div>
</template>

<style scoped>
    .bottom-section {
        position: relative;
        bottom: 0;
        left: 0;
        right: 0;
        min-height: 256px;
        background-color: var(--color-foreground);
        display: flex;
    }

    .tree-browser {
        width: 256px;
        background-color: var(--color-foreground-1);
        border: 1px var(--color-foreground-2) solid;
    }

    .visual-browser-container {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .visual-browser {
        flex: 1;
        border-top: 1px var(--color-foreground-2) solid;
        border-bottom: 1px var(--color-foreground-2) solid;
    }

    .browser-tools {
        height: 48px;
        background-color: var(--color-foreground-1);
        border-top: 1px var(--color-foreground-2) solid;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .browser-tools-add {
        margin-left: 32px;
        height: 32px;
        width: 64px;
        background-color: var(--color-foreground-2);
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .browser-tools-add:hover {
        color: var(--color-primary);
        cursor: pointer;
    }

    .browser-tools-title {
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .browser-tools-search {
        margin-right: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-foreground-2);
        height: 32px;
        border-radius: 8px;
    }

    .browser-tools-search-icon {
        width: 32px;
        height: 100%;
        overflow: hidden;
        border-radius: 0px 8px 8px 0px;
        background-color: var(--color-foreground-2);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .browser-tools-search i {
        color: white;
    }

    .browser-tools-search input {
        flex: 1;
        margin-left: 8px;
    }
</style>
