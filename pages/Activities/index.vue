<template>
    <div class="bg-gray-50 min-h-screen py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-extrabold mb-8 text-center">Our Activities</h1>
        <p class="text-center text-gray-700 mb-12">Explore our services and projects.</p>
        
        <ServicesPreview />
        <ProjectsPreview />
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .container {
    @apply mx-auto px-4;
  }
  
  .title {
    @apply text-3xl font-extrabold text-center mb-8;
  }
  
  .description {
    @apply text-center text-gray-700 mb-12;
  }
  </style>
  