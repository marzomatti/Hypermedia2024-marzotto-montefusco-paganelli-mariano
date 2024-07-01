<template>
    <nuxt-link :to="link" class="inline-block border-2 border-primary-color text-primary-color px-6 py-3 rounded-full font-semibold hover:bg-primary-color hover:text-white transition duration-300">
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
            }
    });
</script>