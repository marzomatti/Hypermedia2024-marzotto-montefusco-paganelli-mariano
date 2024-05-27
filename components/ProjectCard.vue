<template>
    <div class="p-4 border rounded-lg shadow-lg">
      <h2 class="text-xl font-semibold">{{ project.title }}</h2>
      <p class="text-sm text-gray-600">{{ project.description }}</p>
      <p class="text-sm text-gray-500">Date: {{ project.date }}</p>
      <p class="text-sm text-gray-500">Related Person: {{ project.relatedPerson }}</p>
      <img :src="/test_logo.jpg" alt="Project image" class="mt-2 w-full h-32 object-cover">
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  defineProps({
    project: {
      type: Object,
      required: true
    }
  })
  </script>
  
  <style scoped>
  /* Additional scoped styles can be added here */
  </style>
  