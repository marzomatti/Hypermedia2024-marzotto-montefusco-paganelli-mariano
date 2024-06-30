<template>
  <section class="bg-white py-12">
    <h2 class="text-4xl font-semibold text-center text-gray-800 mb-12">Activities</h2>
    <div class="container mx-auto">
      <!-- Services Section -->
      <ServicesPreview />
      <!-- Most Relevant Projects Section -->
      <ProjectsPreview/>
    </div>
  </section>
  <section>
    
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
