<template>
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mb-6">
      <h3 class="text-2xl font-semibold mb-4">Services</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="service in services" :key="service.id" class="border p-4 rounded-lg">
          <h4 class="text-xl font-semibold">{{ service.title }}</h4>
          <p class="text-gray-700">{{ service.description }}</p>
        </div>
      </div>
      <router-link to="/activities/services/" class="text-blue-500 hover:underline mt-4 inline-block">See all</router-link>
    </div>
  </template>
  
  <script setup>
  const services = [
    { id: 1, title: 'Service 1', description: 'Description of service 1.' },
    { id: 2, title: 'Service 2', description: 'Description of service 2.' },
    { id: 3, title: 'Service 3', description: 'Description of service 3.' },
    { id: 4, title: 'Service 4', description: 'Description of service 4.' },
    { id: 5, title: 'Service 5', description: 'Description of service 5.' },
  ]
  </script>
  
  <style scoped>
  
  </style>
  