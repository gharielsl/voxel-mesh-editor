<script lang="ts">
    import { defineComponent } from 'vue';
    import { state } from '../../state';

    export default defineComponent({
        data() {
            return {
                state
            }
        },
        methods: {
            editClick() {
                if (state.currentTool === 'edit') return;
                state.currentTool = 'edit';
                document.dispatchEvent(new CustomEvent('tool-switch-edit'));
            },
            measureClick() {
                if (state.currentTool === 'measure') return;
                state.currentTool = 'measure';
                document.dispatchEvent(new CustomEvent('tool-measure-edit'));
            },
            exploreClick() {
                if (state.currentTool === 'explore') return;
                state.currentTool = 'explore';
                document.dispatchEvent(new CustomEvent('tool-explore-edit'));
            },
            annotateClick() {
                if (state.currentTool === 'annotate') return;
                state.currentTool = 'annotate';
                document.dispatchEvent(new CustomEvent('tool-annotate-edit'));
            }
        }
    });
</script>

<template>
    <div class="tool-bar">
        <div @click="editClick" title="edit" class="tool-bar-item edit">
            <i class="bi bi-cup-hot-fill"></i>
        </div>
        <div @click="measureClick" title="measure" class="tool-bar-item measure">
            <i class="bi bi-rulers"></i>
        </div>
        <div @click="exploreClick" title="explore" class="tool-bar-item explore">
            <i class="bi bi-person-walking"></i>
        </div>
        <div @click="annotateClick" title="annotate" class="tool-bar-item annotate">
            <i class="bi bi-pen-fill"></i>
        </div>
    </div>
</template>

<style scoped>
    .tool-bar {
        position: absolute;
        top: 8px;
        left: 0px;
        z-index: 5;
        display: flex;
        flex-direction: column;
    }

    .tool-bar-item {
        width: 48px;
        height: 48px;
        border-radius: 8px;
        /* background-color: var(--color-foreground-1); */
        margin: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tool-bar-item:hover {
        color: var(--color-primary);
    }

    .tool-bar-item.edit {
        background-color: v-bind("state.currentTool === 'edit' ? 'var(--color-secondary)' : 'var(--color-foreground-1)'");
    }

    .tool-bar-item.measure {
        background-color: v-bind("state.currentTool === 'measure' ? 'var(--color-secondary)' : 'var(--color-foreground-1)'");
    }

    .tool-bar-item.explore {
        background-color: v-bind("state.currentTool === 'explore' ? 'var(--color-secondary)' : 'var(--color-foreground-1)'");
    }

    .tool-bar-item.annotate {
        background-color: v-bind("state.currentTool === 'annotate' ? 'var(--color-secondary)' : 'var(--color-foreground-1)'");
    }
</style>
