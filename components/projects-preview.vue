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
      <div class="w-full md:w-1/2 flex flex-col space-y-4 px-4">
        <button class="flex items-center border-2 border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white hover:bg-primary-color transition duration-300">
          <span class="text-2xl mr-2">+</span> <span class="text-xl">Project Name 1</span>
        </button>
        <button class="flex items-center border-2 border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white hover:bg-primary-color transition duration-300">
          <span class="text-2xl mr-2">+</span> <span class="text-xl">Project Name 2</span>
        </button>
        <button class="flex items-center border-2 border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white hover:bg-primary-color transition duration-300">
          <span class="text-2xl mr-2">+</span> <span class="text-xl">Project Name 3</span>
        </button>
        <button class="flex items-center border-2 border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white hover:bg-primary-color transition duration-300">
          <span class="text-2xl mr-2">+</span> <span class="text-xl">Project Name 4</span>
        </button>
        <button class="flex items-center border-2 border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white hover:bg-primary-color transition duration-300">
          <span class="text-2xl mr-2">+</span> <span class="text-xl">Project Name 5</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsPreview',
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
