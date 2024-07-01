<template>
  <main>
    <div class="flex flex-col w-full py-12">
      <h2 class="text-4xl font-semibold text-center text-gray-800 mb-12">Our Services</h2>

      <!-- Services List -->
      <div v-for="(service, index) in services" :key="service.id" :class="index % 2 === 0 ? 'bg-red-100' : 'bg-white'" class="lg:px-24 px-4 py-12">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="flex-1">
            <h2 class="text-3xl font-bold text-gray-800 mb-2">{{ service.name }}</h2>
            <p class="text-gray-600 text-lg mb-4">{{ service.description }}</p>
            <Button :text="'Discover more ->'" :link="service.link"></Button>
            <!-- <nuxt-link :to="'/services/' + service.id" class="text-red-600 hover:underline font-bold">Discover more →</nuxt-link> -->
          </div>
          <div class="pl-32 pr-4">
          <img src="/stop_violence.avif" alt="Service Image" class="w-64 h-64 lg:w-72 lg:h-48 ml-4 lg:ml-8 rounded-lg shadow-md">
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
</style>
