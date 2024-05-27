<template>
    <div class="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      <img :src="imageUrl" alt="Face Image" class="w-24 h-24 rounded-full mb-4 object-cover">
      <h3 class="text-xl font-bold mb-2">{{ name }} {{ surname }}</h3>
      <p class="text-gray-700 mb-4">{{ description }}</p>
      <NuxtLink :to="link" class="text-blue-500 hover:underline">See more</NuxtLink>
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
  /* Additional styles can be added here if needed */
  </style>
  