<template>
  <header>
    <div class="flex flex-col bg-primary-color lg:py-12 py-8">
      <div class="lg:px-24 px-4">
        <!-- Title of the page -->
        <h1 class="lg:text-5xl text-4xl text-white text-center font-bold">Our Projects</h1>
        <!-- Description of the page -->
        <div class="flex justify-center mt-4">
          <h2 class="text-white text-center lg:text-2xl text-xl">
            Explore our initiatives dedicated to supporting women affected by violence. Join us in making a difference.
          </h2>
        </div>
      </div>
    </div>
  </header>

  <main>
    <div class="flex flex-col w-full">

      <!-- Projects List -->
      <div v-for="(project, index) in projects" :key="project.id" :class="index % 2 === 0 ? 'bg-red-100' : 'bg-white'" class="lg:px-24 px-4 py-12">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="flex-1">
            <h2 class="text-3xl font-bold text-gray-800 mb-2">{{ project.name }}</h2>
            <p class="text-gray-600 text-lg mb-4">{{ project.description }}</p>
            <Button :text="'Discover more ->'" :link="project.link"></Button>
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
  title: 'Projects',
})

import { ref } from 'vue'


const supabase = useSupabaseClient()

const projects = ref([])

const { data, pending } = await useAsyncData('projects', async () => {
  const { data, error } = await supabase
    .from('projects')
    .select()
    
  if (error) {
    return []
  }

  return data
})

projects.value = data.value
</script>

<style scoped>
/* Scoped styles if needed */
</style>
