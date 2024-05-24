<template>
    <section class="py-6 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-extrabold mb-6">Our Mission</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-4">Why?</h3>
            <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus dui a erat congue, tempus sagittis libero tempus. Etiam egestas non metus sit amet convallis.
            </p>
          </div>
          <div class="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-4">How?</h3>
            <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus dui a erat congue, tempus sagittis libero tempus. Etiam egestas non metus sit amet convallis.
            </p>
          </div>
          <div class="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-4">Who?</h3>
            <p class="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus dui a erat congue, tempus sagittis libero tempus. Etiam egestas non metus sit amet convallis.

            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No need for additional scripts in this basic component
  </script>
  
  <style scoped>
  .container {
    @apply mx-auto px-4;
  }
  
  .title {
    @apply text-3xl font-extrabold text-center mb-6;
  }
  
  .mission-block {
    @apply p-6 bg-gray-100 rounded-lg shadow-lg;
  }
  
  .mission-title {
    @apply text-2xl font-bold mb-4;
  }
  
  .mission-description {
    @apply text-gray-700;
  }
  </style>
  