<template>
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mb-6">
      <h3 class="text-2xl font-semibold mb-4">Most Relevant Projects</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in projects" :key="project.id" class="border p-4 rounded-lg">
          <h4 class="text-xl font-semibold">{{ project.title }}</h4>
          <p class="text-gray-700">{{ project.description }}</p>
        </div>
      </div>
      <NuxtLink to="" class="text-blue-500 hover:underline mt-4 inline-block">See all</NuxtLink>
    </div>
  </template>
  
  <script setup>
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of project 1.' },
    { id: 2, title: 'Project 2', description: 'Description of project 2.' },
    { id: 3, title: 'Project 3', description: 'Description of project 3.' },
  ]
  </script>
  
  <style scoped>

  </style>
  