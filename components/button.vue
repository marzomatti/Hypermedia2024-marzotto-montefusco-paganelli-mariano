<template>
    <nuxt-link :to="link" class="nav-button inline-block mt-6 border-2 border-secondary-color text-secondary-color px-6 py-3 rounded-full hover:bg-secondary-color hover:text-white transition duration-300">
    {{ text }}
    </nuxt-link>
</template>

<script setup>
    const props = defineProps(
        {
            text: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            },
    });
</script>