<template>
  <Breadcrumb/>
  <div>
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
    <main class="py-12 px-4 lg:px-24 bg-white">
      <!-- Services List -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 justify-center text-blue">
        <div v-for="service in services" :key="service.id" class="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition duration-500 flex items-center hover:scale-105">
          <NuxtLink :to="getServiceLink(service.id)" class="flex items-center">
            <img :src="service.logo" alt="Service Icon" class="w-16 h-16 cursor-pointer mr-4"/>
            <div>
              <h2 class="text-2xl font-bold text-blue mb-2">{{ service.name }}</h2>
              <p class="text-blue">{{ service.description_s }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
      <!-- How Section -->
      <section class="text-center mb-12">
        <h2 class="text-4xl font-bold text-blue mb-4">How?</h2>
        <p class="text-lg text-blue">Our services are designed to provide comprehensive support to women affected by violence. From group chats and psychological support to legal aid and medical assistance, we are here to help you navigate through difficult times with the care and expertise you need. Each service is tailored to address specific needs, ensuring that you receive the right kind of support when you need it most. Explore the sections above to learn more about how each service can assist you in your journey towards healing and empowerment.</p>
      </section>
      <!-- Image Section -->
      <div class="flex justify-center">
        <img src="/public/serviceindex_img.jpg" alt="Supporting Image" class="rounded-3xl shadow-lg w-full max-w-4xl">
      </div>
    </main>
  </div>
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
    console.error(error);
    return []
  }

  console.log(data);  // Aggiungi questo per verificare i dati restituiti
  return data
})

services.value = data.value

function getServiceLink(id) {
  return `/activities/services/service` + `${id}`
}
</script>

<style scoped>
.rounded-3xl {
  border-radius: 1.5rem;
}

.bg-white {
  background-color: #ffffff;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
