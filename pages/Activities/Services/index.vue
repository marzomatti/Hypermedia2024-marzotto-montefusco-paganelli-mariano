<template>
  <main>
    <div class="flex flex-col w-full">
      <Breadcrumb/>

      <!-- Header Section -->
      <div class="flex flex-col bg-red-500 lg:py-12 py-8">
        <div class="lg:px-24 px-4">
          <!-- Title of the page -->
          <h1 class="lg:text-5xl text-4xl text-white text-center font-bold">Our Services</h1>
          <!-- Description of the page -->
          <div class="flex justify-center mt-4">
            <h2 class="text-white text-center lg:text-2xl text-xl">
              We provide a wide range of services to support women affected by violence. Explore our services to learn how we can help you.
            </h2>
          </div>
        </div>
      </div>

      <!-- Services List -->
      <div v-for="(service, index) in services" :key="service.id" :class="index % 2 === 0 ? 'bg-gray-100' : 'bg-white'" class="lg:px-24 px-4 py-12">
        <div class="flex flex-col lg:flex-row items-center">
          <img :src="service.icon" alt="Service Icon" class="w-16 h-16 lg:w-24 lg:h-24 mr-4 mb-4 lg:mb-0 lg:mr-8">
          <div class="flex-1">
            <h2 class="text-3xl font-bold text-gray-800 mb-2">{{ service.title }}</h2>
            <p class="text-gray-600 text-lg mb-4">{{ service.description }}</p>
            <nuxt-link :to="'/services/' + service.id" class="text-red-600 hover:underline font-bold">Discover more →</nuxt-link>
          </div>
          <img src="/stop_violence.avif" alt="Service Image" class="w-32 h-32 lg:w-48 lg:h-48 ml-4 lg:ml-8 rounded-lg shadow-md">
        </div>
      </div>

      <!-- How We Help You Section -->
      <div class="lg:px-24 px-4 py-12 bg-white">
        <section class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-extrabold text-gray-900 mb-4">How We Help You?</h2>
          <p class="text-gray-600 mb-4">
            Our comprehensive services are designed to provide you with the support and resources you need. Learn more about our services:
            <nuxt-link to="/services/1" class="text-red-600 hover:underline">Service 1</nuxt-link>,
            <nuxt-link to="/services/2" class="text-red-600 hover:underline">Service 2</nuxt-link>,
            <nuxt-link to="/services/3" class="text-red-600 hover:underline">Service 3</nuxt-link>,
            <nuxt-link to="/services/4" class="text-red-600 hover:underline">Service 4</nuxt-link>, and
            <nuxt-link to="/services/5" class="text-red-600 hover:underline">Service 5</nuxt-link>.
          </p>
          <img src="/stop_violence.avif" alt="Helping Image" class="w-full h-auto rounded-lg">
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Services',
})

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
