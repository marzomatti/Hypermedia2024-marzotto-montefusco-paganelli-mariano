<template>
  <main class="bg-gray-50 min-h-screen py-8">
    <div class="container mx-auto px-4 max-w-5xl">
      <!-- Profile Section -->
      <div class="bg-white p-6 rounded-lg shadow-lg mb-12 flex flex-col md:flex-row items-start">
        <div class="md:flex-1 md:mr-8">
          <img :src="person.photo" alt="Profile Photo" class="w-full h-auto rounded-lg shadow-md mb-4 md:mb-0">
        </div>
        <div class="md:flex-1">
          <h1 class="text-4xl font-extrabold text-gray-900 mb-2">{{ person.name }} {{ person.surname }}</h1>
          <h2 class="text-2xl text-gray-700 mb-4">{{ person.role }}</h2>
          <div class="mt-4">
            <h3 class="text-xl font-bold text-gray-700">Contact</h3>
            <p class="text-gray-600">Email: <a :href="'mailto:' + person.email" class="text-red-600 hover:underline">{{ person.email }}</a></p>
          </div>
          <div class="mt-4">
            <h3 class="text-xl font-bold text-gray-700">Description</h3>
            <p class="text-gray-600">{{ person.description }}</p>
          </div>
          <a :href="person.cv" download class="mt-6 inline-block bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition-colors duration-200">Download CV</a>
        </div>
      </div>

      <!-- Related Activities Section -->
      <section>
        <h2 class="text-3xl font-extrabold text-gray-900 mb-6">Related Activities</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="activity in person.activities" :key="activity.id" class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img :src="activity.image" alt="Activity Image" class="w-full h-32 object-cover rounded-lg mb-4">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ activity.title }}</h3>
            <p class="text-gray-600">{{ activity.description }}</p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Personal Info',
})

import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

// Mock data, replace with your data fetching logic
const person = ref({
  name: 'John',
  surname: 'Doe',
  role: 'Senior Developer',
  email: 'john.doe@example.com',
  description: 'John Doe is a senior developer with over 10 years of experience in full-stack development.',
  photo: '../face1.jpg',
  cv: '/path/to/cv.pdf',
  activities: [
    {
      id: 1,
      title: 'Project Alpha',
      description: 'A comprehensive project focused on ...',
      image: '../support.jpg'
    },
    {
      id: 2,
      title: 'Workshop Beta',
      description: 'An engaging workshop about ...',
      image: '../support.jpg'
    },
    {
      id: 3,
      title: 'Seminar Gamma',
      description: 'A detailed seminar covering ...',
      image: '../support.jpg'
    }
  ]
})

const route = useRoute()

onMounted(() => {
  // Fetch person data based on route.params.id
  // Example: person.value = await fetchPerson(route.params.id)
})
</script>

<style scoped>
/* Additional styles can be added here if needed */
</style>
