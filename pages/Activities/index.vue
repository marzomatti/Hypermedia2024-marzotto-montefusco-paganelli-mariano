<template>
  <div class="bg-gray-50 min-h-screen py-8">
    <div class="container max-w-5xl mx-auto px-4">
      
      <!-- Breadcrumb Navigation -->
      <nav class="text-gray-500 mb-4">
        <ol class="list-reset flex">
          <li><nuxt-link to="/" class="hover:text-gray-900">Home</nuxt-link></li>
          <li><span class="mx-2">/</span></li>
          <li class="text-gray-900">All Activities</li>
        </ol>
      </nav>

      <!-- Description and Mission Section -->
      <header class="mb-12">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-2">Our Activities</h1>
        <p class="text-gray-600">Our mission is to provide comprehensive services and support to our community through various activities and projects.</p>
      </header>

      <!-- Services Section -->
      <section class="mb-12">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-extrabold text-gray-900">Services</h2>
          <nuxt-link to="" class="text-indigo-600 hover:underline">See all</nuxt-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul class="list-disc pl-5 text-gray-600">
            <li><nuxt-link to="" class="hover:underline">Get medical help/emergency</nuxt-link></li>
            <li><nuxt-link to="" class="hover:underline">Get in touch with a psychiatrist</nuxt-link></li>
            <li><nuxt-link to="" class="hover:underline">Join a support group</nuxt-link></li>
            <li><nuxt-link to="" class="hover:underline">Get legal counsel</nuxt-link></li>
          </ul>
          <img src="../support.jpg" alt="Services Image" class="w-full h-auto rounded-lg shadow-md">
        </div>
      </section>

      <!-- Latest Projects Section -->
      <section>
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-extrabold text-gray-900">Latest Projects</h2>
          <nuxt-link to="" class="text-indigo-600 hover:underline">See all</nuxt-link>
        </div>
        <div class="relative">
          <div class="flex overflow-x-scroll space-x-4">
            <div v-for="project in projects" :key="project.id" class="bg-white p-6 rounded-lg shadow-md min-w-[300px]">
              <img :src="project.image" alt="Project Image" class="w-full h-32 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-bold text-gray-900">{{ project.title }}</h3>
              <p class="text-gray-600">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Mock data, replace with your data fetching logic
const projects = ref([
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A comprehensive project focused on ...',
    image: '../support.jpg'
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'An engaging project about ...',
    image: '../support.jpg'
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'A detailed project covering ...',
    image: '../support.jpg'
  }
])

onMounted(() => {
  // Fetch project data if needed
})
</script>

<style scoped>
/* Scoped styles if needed */
</style>
