<template>
  <div class="bg-gray-50 min-h-screen py-8">
    <div class="container mx-auto px-4">
      
      <!-- Breadcrumb Navigation -->
      <nav class="text-gray-500 mb-4">
        <ol class="list-reset flex">
          <li><nuxt-link to="/" class="hover:text-gray-900">Home</nuxt-link></li>
          <li><span class="mx-2">/</span></li>
          <li><nuxt-link to="/people" class="hover:text-gray-900">People</nuxt-link></li>
          <li><span class="mx-2">/</span></li>
          <li class="text-gray-900">{{ person.name }}</li>
        </ol>
      </nav>

      <!-- Profile Section -->
      <div class="flex flex-col md:flex-row mb-12">
        <div class="md:flex-1">
          <h1 class="text-3xl font-extrabold text-gray-900">{{ person.name }} {{ person.surname }}, {{ person.role }}</h1>
          <div class="mt-4">
            <h2 class="text-xl font-bold text-gray-700">Contact</h2>
            <p class="text-gray-600">Email: <a :href="'mailto:' + person.email" class="text-indigo-600 hover:underline">{{ person.email }}</a></p>
          </div>
          <div class="mt-4">
            <h2 class="text-xl font-bold text-gray-700">Description</h2>
            <p class="text-gray-600">{{ person.description }}</p>
          </div>
        </div>
        <div class="md:flex-1 md:ml-8 mt-8 md:mt-0">
          <img :src="person.photo" alt="Profile Photo" class="w-full h-auto rounded-lg shadow-md">
          <a :href="person.cv" download class="mt-4 inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Download CV</a>
        </div>
      </div>

      <!-- Related Activities Section -->
      <section>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Related Activities</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="activity in person.activities" :key="activity.id" class="bg-white p-6 rounded-lg shadow-md">
            <img :src="activity.image" alt="Activity Image" class="w-full h-32 object-cover rounded-lg mb-4">
            <h3 class="text-xl font-bold text-gray-900">{{ activity.title }}</h3>
            <p class="text-gray-600">{{ activity.description }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
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
/* Scoped styles if needed */
</style>
