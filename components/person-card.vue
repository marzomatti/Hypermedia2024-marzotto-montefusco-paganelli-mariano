<template>
  <div class="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
    <img :src="imageUrl" alt="Face Image" class="w-24 h-24 rounded-full mb-4 object-cover">
    <h3 class="text-xl font-bold text-gray-800 mb-2">{{ name }} {{ surname }}</h3>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <Button text="See more" :link="link" class="mt-4"/>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
/* Additional styles if needed */
</style>
