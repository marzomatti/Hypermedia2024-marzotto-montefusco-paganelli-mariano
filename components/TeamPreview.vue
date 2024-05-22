<template>
  <div class="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto flex flex-col items-center text-center md:flex-row md:text-left">
    <img :src="imageUrl" :alt="title" class="w-24 h-24 object-cover rounded-full md:w-32 md:h-32 mb-4 md:mb-0 md:mr-6">
    <div>
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-700">{{ description }}</p>
      <router-link :to="link" class="text-blue-500 hover:underline mt-2 inline-block">See all</router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
</style>
