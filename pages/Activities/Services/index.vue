<template>
  <div class="flex flex-col bg-primary-color lg:py-12 py-8">
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
  <main>
    <div class="flex flex-col w-full">
      <!-- Services List -->
      <div v-for="(service, index) in services" :key="service.id" :class="index % 2 === 0 ? 'bg-red-100' : 'bg-gray-100'" class="lg:px-24 px-4 py-12">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="flex-1">
            <h2 class="text-3xl font-bold text-gray-800 mb-2">{{ service.name }}</h2>
            <p class="text-gray-600 text-lg mb-4">{{ service.description }}</p>
            <Button :text="'Discover more ->'" :link="service.link"></Button>
          </div>
          <div class="pl-32 pr-4">
            <img src="/stop_violence.avif" alt="Service Image" class="w-64 h-64 lg:w-72 lg:h-48 ml-4 lg:ml-8 rounded-3xl shadow-md">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Services',
})

import { ref } from 'vue'

const supabase = useSupabaseClient()

const services = ref([])

const { data, pending } = await useAsyncData('services', async () => {
  const { data, error } = await supabase
    .from('services')
    .select()
    
  if (error) {
    return []
  }

  return data
})

services.value = data.value
</script>

<style scoped>
/* Scoped styles if needed */
.rounded-3xl {
  border-radius: 1.5rem;
}

.bg-red-100 {
  background-color: #ffffff
}

.bg-gray-100 {
  background-color: #f7fafc;
}
</style>
