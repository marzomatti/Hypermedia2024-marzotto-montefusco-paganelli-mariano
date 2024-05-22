<template>
  <div class="bg-gray-100 rounded-lg shadow-lg p-6">
    <img :src="imageUrl" :alt="title" class="w-full h-48 object-cover rounded-t-lg mb-4" />
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-700">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  imageUrl: String,
})
</script>

<style scoped>
/* You can add any additional scoped styles here if needed */
</style>
