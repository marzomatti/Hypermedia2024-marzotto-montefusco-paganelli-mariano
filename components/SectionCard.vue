<template>
  <div class="grid grid-cols-1 mdgrid-cols-3 gap-8">
    <h2>{{ title }}</h2>
    <img 
    :src="imageUrl" 
    alt="img"
    class="w-full h-48 object-cover rounded-lg">
    <p class="mt-2 text-gray-700 dark:text-gray-300">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  imageUrl: String,
});
</script>