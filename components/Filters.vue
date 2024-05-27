<template>
    <div class="flex justify-between items-center p-4">
      <label for="sort" class="text-sm font-medium text-gray-700">Sort by:</label>
      <select id="sort" v-model="selectedFilter" class="ml-2 p-2 border rounded-md">
        <option value="relevance">Relevance</option>
        <option value="date">Date</option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const selectedFilter = ref('relevance')
  
  watch(selectedFilter, (newFilter) => {
    // Emit the selected filter to the parent component
    emit('update:filter', newFilter)
  })
  </script>
  
  <style scoped>
  /* Additional scoped styles can be added here */
  </style>
  