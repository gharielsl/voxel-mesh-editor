<script lang="ts">
    import { defineComponent } from 'vue';

    defineComponent({
        props: {
            image: Image,
            text: String,
            level: Number,
            collapsed: Boolean,
            children: Array
        },
        data: function() {
            return {
                image: this.image,
                text: this.text,
                level: this.level,
                collapsed: this.collapsed,
                children: this.children
            };
        }
    })
</script>

<template>
    <div v-for="(child, index) of children">
        <div>
            
        </div>
    </div>
</template>

<style scoped>

</style>