<template>
  <section class=" py-12">
    <div class="container mx-auto flex flex-col md:flex-row items-start justify-between">
      <!-- Left Side: Title and Description -->
      <div class="w-full md:w-1/2 mb-8 md:mb-0 px-4">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Most Relevant Projects</h2>
        <p class="text-lg text-blue-600 mb-4">Discover our most impactful projects. We are dedicated to making a difference through various initiatives and collaborations. Explore how our projects are changing lives and communities.</p>
        <Button :text="'See our projects ->'" />
      </div>
      <!-- Right Side: Project Buttons -->
      <div class="w-full md:w-1/3 flex flex-col space-y-4 pr-4">
        <img src="assets/img/ehimetalor-akhere-unuabona-lWRandyLSQ8-unsplash.jpg" alt="Services Image" class="w-full h-64 object-cover mb-4 rounded-lg"/>
      </div>
    </div>
  </section>
</template>

<script setup>
  const projects = ref([
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' },
    { id: 4, name: 'Project 4' },
    { id: 5, name: 'Project 5' },
  ])
</script>

<style scoped>
/* Additional styles if needed */
</style>
