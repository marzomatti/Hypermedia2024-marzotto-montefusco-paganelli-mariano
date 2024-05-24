<template>
  <div class="bg-gray-50 min-h-screen py-8">
    <div class="container max-w-5xl mx-auto px-4">
      
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
      <header class="mb-12 text-center">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-2">Activities</h1>
        <p class="text-gray-600">Description of the activities</p>
      </header>

      <!-- Image Section -->
      <div class="mb-12">
        <img src="/public/support.jpg" alt="Activities Image" class="w-6/12 mx-auto h-auto rounded-lg shadow-md">
      </div>

      <!-- Services Section -->
      <section class="mb-12">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-extrabold text-gray-900">Services</h2>
          <nuxt-link to="/services" class="text-indigo-600 hover:underline">See all</nuxt-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Random Text Section -->
          <div class="text-gray-600">
            <p>Random text goes here. This text is placed to the left of the services list, providing some contextual information or additional details.</p>
            <p>Additional random text can be added here to fill up space and balance the layout. This ensures the design remains consistent and visually appealing.</p>
          </div>
          <!-- Services List Section -->
          <div class="md:col-span-2">
            <ul class="list-none pl-0">
              <li class="mb-4 flex items-start">
                <img src="/public/medical-symbol.png" alt="Service Icon" class="w-6 h-6 mr-4">
                <span>Get medical help</span>
              </li>
              <li class="mb-4 flex items-start">
                <img src="/public/medical-symbol.png" alt="Service Icon" class="w-6 h-6 mr-4">
                <span>Get in touch with our psychologists</span>
              </li>
              <li class="mb-4 flex items-start">
                <img src="/public/medical-symbol.png" alt="Service Icon" class="w-6 h-6 mr-4">
                <span>Join a support group</span>
              </li>
              <li class="mb-4 flex items-start">
                <img src="/public/medical-symbol.png" alt="Service Icon" class="w-6 h-6 mr-4">
                <span>Get legal counsel</span>
              </li>
              <li class="mb-4 flex items-start">
                <img src="/public/medical-symbol.png" alt="Service Icon" class="w-6 h-6 mr-4">
                <span>Call our emergency support assistance</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Most Relevant Projects Section -->
      <section>
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-extrabold text-gray-900">Most Relevant Projects</h2>
          <nuxt-link to="/projects" class="text-indigo-600 hover:underline">See all</nuxt-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="project in projects" :key="project.id" class="bg-white p-6 rounded-lg shadow-md">
            <img :src="project.image" alt="Project Image" class="w-full h-32 object-cover rounded-lg mb-4">
            <h3 class="text-xl font-bold">{{ project.title }}</h3>
            <p class="text-gray-600">{{ project.description }}</p>
            <nuxt-link :to="'/projects/' + project.id" class="text-indigo-600 hover:underline">Read more</nuxt-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  { id: 1, title: 'Get medical help', icon: '/public/medical-symbol.png' },
  { id: 2, title: 'Get in touch with our psychologists', icon: '/public/medical-symbol.png' },
  { id: 3, title: 'Join a support group', icon: '/public/medical-symbol.png' },
  { id: 4, title: 'Get legal counsel', icon: '/public/medical-symbol.png' },
  { id: 5, title: 'Call our emergency support assistance', icon: '/public/medical-symbol.png' }
])

const projects = ref([
  { id: 1, title: 'Project 1', description: 'Description of project 1.', image: '/public/support.jpg' },
  { id: 2, title: 'Project 2', description: 'Description of project 2.', image: '/public/support.jpg' },
  { id: 3, title: 'Project 3', description: 'Description of project 3.', image: '/public/support.jpg' }
])
</script>

<style scoped>
/* Scoped styles if needed */
</style>
