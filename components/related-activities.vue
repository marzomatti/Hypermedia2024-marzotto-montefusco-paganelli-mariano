<template>
    <section v-if="services.length > 0 || projects.length > 0">
      <h2 class="text-4xl font-extrabold text-blue mb-8">Related Activities</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <nuxt-link v-for="service in services" :key="service.id" :to="`/activities/services/${service.id}`" class="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
          <div>
            <img :src="`/services${service.image}`" alt="Activity Image" class="w-full h-48 object-cover rounded-3xl mb-4">
            <h3 class="text-2xl font-bold text-blue mb-2">{{ service.name }}</h3>
            <p class="text-blue">{{ service.description_s }}</p>
          </div>
        </nuxt-link>
        <nuxt-link v-for="project in projects" :key="project.id" :to="`/activities/projects/${project.id}`" class="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
          <div>
            <img :src="`/projects${project.image}`" alt="Activity Image" class="w-full h-48 object-cover rounded-3xl mb-4">
            <h3 class="text-2xl font-bold text-blue mb-2">{{ project.name }}</h3>
            <p class="text-blue">{{ project.description_s }}</p>
          </div>
        </nuxt-link>
      </div>
    </section>
  </template>
  
  <script setup>
  defineProps({
    services: Array,
    projects: Array,
  });
  </script>
  
  <style scoped>
  .rounded-3xl {
    border-radius: 1.5rem;
  }
  
  .shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  
  .hover\:shadow-xl:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  .transition-transform {
    transition: transform 0.3s ease-in-out;
  }
  </style>
  