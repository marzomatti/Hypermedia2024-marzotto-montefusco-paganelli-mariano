<template>
  <section class="bg-white py-4">
    <div class="container mx-auto flex flex-col sv:flex-row items-center justify-between">
      <!-- Left Side: Title and Description -->
      <div class="w-full sv:w-1/2 mb-8 sv:mb-0 px-4 flex flex-col justify-center h-full">
        <h2 class="text-4xl font-bold text-blue mb-4">Our Services</h2>
        <p class="text-lg text-blue mb-4">We offer comprehensive support, including legal assistance, counseling, and recovery programs. Let our expert team help you find safety and empowerment. Discover how we can assist you on your journey with personalized services tailored to your needs. Our goal is to provide a safe and supportive environment where you can heal and thrive.</p>
        <div class="flex justify-left">
          <Button :text="'See our services ->'" :link="'/activities/services'" class="w-auto"/>
        </div>
      </div>
      <!-- Right Side: Service Buttons -->
      <div class="w-full md:w-2/3 flex pl-8 sv:justify-end justify-center">
        <div class="flex flex-col space-y-4 px-4">
          <div v-if="loading">Loading...</div>
          <div v-else-if="error">{{ error }}</div>
          <div v-else v-for="service in services" :key="service.id" class="flex items-center">
            <img :src="'/services'+service.logo" alt="Service Icon" class="w-16 h-16 cursor-pointer pr-2"/>
            <NuxtLink :to="getLink(service.id)" class="flex-1 flex items-center justify-center border-2 border-secondary-color text-blue rounded-full px-6 py-4 hover:text-white transition hover:bg-secondary-color duration-300">
              <span class="text-xl">{{ service.name }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: services, error, loading } = await useFetch('/api/services');

const config = useRuntimeConfig()

function getLink(id){
  return `/activities/services/${id}`
}
</script>

<style scoped>
</style>
