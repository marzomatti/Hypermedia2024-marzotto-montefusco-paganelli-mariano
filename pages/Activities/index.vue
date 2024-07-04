<template>
      <div class="flex flex-col bg-orange-200 lg:py-12 py-8">
        <div class="lg:px-24 px-4">
          <!-- Title of the page -->
          <h1 class="lg:text-5xl text-4xl text-white text-center font-bold">Our Activites</h1>
          <!-- Description of the page -->
          <div class="flex justify-center mt-4">
            <h2 class="text-white text-center lg:text-2xl text-xl">
              text
            </h2>
          </div>
        </div>
      </div>
  <section class="bg-white py-12 px-12">
    <div class="container mx-auto">
      <!-- Services Section -->
      <ServicesPreview/>
      <!-- Most Relevant Projects Section -->
      <div class="p-6 rounded-lg">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-4xl font-semibold text-center text-gray-800 mb-4">Most Relevant Projects</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Project 1 -->
          <nuxt-link to="/projects/project-1" class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img src="/stop_violence.avif" alt="Project 1" class="w-full h-48 object-cover mb-4 rounded-lg"/>
            <h4 class="text-xl font-semibold text-gray-800 mb-2">Project 1</h4>
            <p class="text-gray-600">Description of project 1.</p>
          </nuxt-link>
          <!-- Project 2 -->
          <nuxt-link to="/projects/project-2" class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img src="/stop_violence.avif" alt="Project 2" class="w-full h-48 object-cover mb-4 rounded-lg"/>
            <h4 class="text-xl font-semibold text-gray-800 mb-2">Project 2</h4>
            <p class="text-gray-600">Description of project 2.</p>
          </nuxt-link>
          <!-- Project 3 -->
          <nuxt-link to="/projects/project-3" class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img src="/stop_violence.avif" alt="Project 3" class="w-full h-48 object-cover mb-4 rounded-lg"/>
            <h4 class="text-xl font-semibold text-gray-800 mb-2">Project 3</h4>
            <p class="text-gray-600">Description of project 3.</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ActivitiesPage'
}
</script>

<style scoped>
.bg-white {
  background-color: #ffffff;
}

.bg-gray-50 {
  background-color: #f9fafb;
}

.text-gray-800 {
  color: #2d3748;
}

.text-gray-600 {
  color: #718096;
}

.text-red-400 {
  color: #fc8181;
}

.hover\:underline:hover {
  text-decoration: underline;
}

.hover\:bg-red-400:hover {
  background-color: #fc8181;
}

.hover\:text-white:hover {
  color: #ffffff;
}

.transition {
  transition: all 0.3s ease-in-out;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:shadow-xl:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>