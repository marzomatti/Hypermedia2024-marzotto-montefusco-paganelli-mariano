<template>
    <section class="bg-red-400 py-12 px-12">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold text-white mb-8">Our Activities</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <!-- Services Block -->
           <NuxtLink to="/Activities/Services" class="hover:shadow-md hover:transform hover:scale-101 transition duration-200">
            <div class="bg-white p-6 rounded-lg shadow-lg">
            <img src="/services_preview.jpg" alt="Services Image" class="w-full h-64 object-cover mb-4 rounded-lg"/>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Services</h3>
            <p class="text-gray-600">Description for the services offered.</p>
            </div>
           </NuxtLink>

          <!-- Projects Block -->
           <NuxtLink to="/Activities/Projects" class="hover:shadow-md hover:transform hover:scale-104 transition duration-200">
            <div class="bg-white p-6 rounded-lg shadow-lg">
            <img src="/projects_preview.jpg" alt="Projects Image" class="w-full h-64 object-cover mb-4 rounded-lg"/>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Projects</h3>
            <p class="text-gray-600">Description for the projects.</p>
            </div>
           </NuxtLink>
        </div>
        <nuxt-link to="/activities" class="inline-block border-2 border-white text-white px-6 py-3 rounded-full  hover:bg-white hover:text-red-400 transition duration-300">
          See all activities ->
        </nuxt-link>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ActivitiesPreview',
  };
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  