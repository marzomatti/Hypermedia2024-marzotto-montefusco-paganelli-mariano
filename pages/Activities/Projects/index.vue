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
    <div class="flex flex-col w-full py-8">
      <!-- Search Bar -->
      <div class="flex justify-left mb-8 px-4 lg:px-24">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search projects..." 
          class="w-full max-w-2xl p-4 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary-color"
        />
      </div>
      <!-- Projects List -->
      <div v-for="(project, index) in filteredProjects" :key="project.id" :class="getBackgroundColor(index)" class="lg:px-24 px-4 py-12">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="flex-1">
            <h2 class="text-3xl font-bold text-gray-800 mb-2">{{ project.name }}</h2>
            <p class="text-gray-600 text-lg mb-4">{{ project.description }}</p>
            <Button :text="'Discover more ->'" :link="project.link"></Button>
            <!-- <nuxt-link :to="'/services/' + service.id" class="text-red-600 hover:underline font-bold">Discover more →</nuxt-link> -->
          </div>
          <div class="pl-32 pr-4">
            <img src="/stop_violence.avif" alt="Project Image" class="w-64 h-64 lg:w-72 lg:h-48 ml-4 lg:ml-8 rounded-3xl shadow-md">
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

import { ref, computed } from 'vue'

const supabase = useSupabaseClient()

const projects = ref([])
const searchQuery = ref('')

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

const filteredProjects = computed(() => {
  if (!searchQuery.value) {
    return projects.value
  }
  return projects.value.filter(project => 
    project.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const getBackgroundColor = (index) => {
  const colors = ['bg-gray-100', 'bg-white'];
  return colors[index % colors.length];
}
</script>

<style scoped>
.rounded-3xl {
  border-radius: 1.5rem;
}


.focus\:ring-primary-color:focus {
  box-shadow: 0 0 0 2px rgba(255, 76, 76, 0.5);
}
</style>
