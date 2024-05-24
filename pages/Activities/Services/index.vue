<template>
  <div class="bg-gray-50 min-h-screen py-8">
    <div class="container mx-auto px-4">
      
      <!-- Breadcrumb Navigation -->
      <nav class="text-gray-500 mb-4">
        <ol class="list-reset flex">
          <li><nuxt-link to="/" class="hover:text-gray-900">Home</nuxt-link></li>
          <li><span class="mx-2">/</span></li>
          <li><nuxt-link to="/activities" class="hover:text-gray-900">Activities</nuxt-link></li>
          <li><span class="mx-2">/</span></li>
          <li class="text-gray-900">Services</li>
        </ol>
      </nav>

      <!-- Header Section -->
      <header class="mb-12">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-2">Our Services</h1>
        <hr class="border-gray-300">
      </header>

      <!-- Services Grid Layout -->
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        <div v-for="service in services" :key="service.id" class="bg-white p-6 rounded-lg shadow-md text-center">
          <img :src="service.icon" alt="Service Icon" class="w-16 h-16 mx-auto mb-4">
          <h2 class="text-xl font-bold">{{ service.title }}</h2>
          <p class="text-gray-600">{{ service.description }}</p>
        </div>
      </section>

      <!-- How We Help You Section -->
      <section class="bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">How We Help You?</h2>
        <p class="text-gray-600 mb-4">
          Description of all services with access links in the paragraph. 
          <nuxt-link to="/services/1" class="text-indigo-600 hover:underline">Service 1</nuxt-link>, 
          <nuxt-link to="/services/2" class="text-indigo-600 hover:underline">Service 2</nuxt-link>, 
          <nuxt-link to="/services/3" class="text-indigo-600 hover:underline">Service 3</nuxt-link>, 
          <nuxt-link to="/services/4" class="text-indigo-600 hover:underline">Service 4</nuxt-link>, and 
          <nuxt-link to="/services/5" class="text-indigo-600 hover:underline">Service 5</nuxt-link>.
        </p>
        <img src="/public/support.jpg" alt="Helping Image" class="w-full h-auto rounded-lg">
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  { id: 1, title: 'Service 1', description: 'Description of service 1.', icon: '/path/to/icon1.png' },
  { id: 2, title: 'Service 2', description: 'Description of service 2.', icon: '/path/to/icon2.png' },
  { id: 3, title: 'Service 3', description: 'Description of service 3.', icon: '/path/to/icon3.png' },
  { id: 4, title: 'Service 4', description: 'Description of service 4.', icon: '/path/to/icon4.png' },
  { id: 5, title: 'Service 5', description: 'Description of service 5.', icon: '/path/to/icon5.png' }
])
</script>

<style scoped>
/* Scoped styles if needed */
</style>
