<template>
  <div class="bg-gray-50 min-h-screen py-8">
    <div class="container mx-auto px-4">
      <Breadcrumb/>

      <!-- Header Section -->
      <header class="mb-12 text-center">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-2">Our Projects</h1>
      </header>

      <!-- Featured Project Section -->
      <section class="mb-12">
        <div class="mb-4">
          <h2 class="text-2xl font-extrabold text-gray-900">Project (Most Relevant)</h2>
          <div class="bg-white p-6 rounded-lg shadow-md flex">
            <div class="flex-1">
              <h3 class="text-xl font-bold">Project Title</h3>
              <p class="text-gray-600">Brief description of the most relevant project. It includes key points and highlights.</p>
              <ul class="list-disc pl-5 text-gray-600">
                <li>Key point 1</li>
                <li>Key point 2</li>
                <li>Key point 3</li>
              </ul>
            </div>
          <img src="/test_logo.png" alt="Featured Project Image" class="w-12 rounded-lg shadow-md">
            
          </div>
        </div>
      </section>

      <!-- All Projects Section -->
      <section>
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-extrabold text-gray-900">All Projects</h2>
          <div class="relative">
            <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Filters
            </button>
            <div class="absolute mt-2 bg-white border border-gray-200 rounded-lg shadow-lg hidden">
              <ul class="py-2">
                <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Relevance</a></li>
                <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Date</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="project in projects" :key="project.id" class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold">{{ project.title }}</h3>
            <p class="text-gray-600">{{ project.description }}</p>
            <div class="flex items-center mt-4">
              <img :src="relatedPersonalImage" alt="Related Person Image" class="w-10 h-10 rounded-full mr-4">
              <div>
                <p class="text-gray-700">{{ project.relatedPerson }}</p>
                <p class="text-gray-500 text-sm">{{ project.date }}</p>
              </div>
            </div>
            <nuxt-link :to="'/projects/' + project.id" class="text-indigo-600 hover:underline mt-4 block">Read more</nuxt-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Projects',
})
import { ref } from 'vue'

const projects = ref([
  { id: 1, title: 'Project 1', description: 'Description of project 1.', relatedPerson: 'John Doe', relatedPersonImage: 'public/test_logo.png', date: '2023-01-01' },
  { id: 2, title: 'Project 2', description: 'Description of project 2.', relatedPerson: 'Jane Smith', relatedPersonImage: 'public/test_logo.png', date: '2023-02-01' },
  { id: 3, title: 'Project 3', description: 'Description of project 3.', relatedPerson: 'Emily Johnson', relatedPersonImage: 'public/test_logo.png', date: '2023-03-01' }
])
</script>

<style scoped>
/* Scoped styles if needed */
</style>
  