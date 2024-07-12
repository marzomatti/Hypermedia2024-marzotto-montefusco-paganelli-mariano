<template>
    <h1 class="font-sans font-extrabold no-italic text-[40px] md:text-[56px] md:leading-[66px] text-center text-blue mb-4"> {{ title }}</h1>
    <p class="text-lg text-center mb-12">
        {{ description }}
    </p>
</template>

<script setup>
    defineProps({
        title: String,
        description: String
    });

</script>