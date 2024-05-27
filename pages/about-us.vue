<template>
  <div class="bg-gray-50 min-h-screen">

    <!-- Main Content Section -->
    <div class="container max-w-7xl mx-auto px-4 py-16 lg:flex lg:space-x-8">
      <!-- Text Section -->
      <div class="lg:flex-1">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-4">About</h1>
        <p class="text-xl text-gray-600 mb-8">Subheading for description or instructions</p>
        <p class="text-gray-700 mb-4">
          At the Women's Violence Center for Abuse, our mission is to provide a safe haven for women who have 
          experienced violence and abuse, offering comprehensive support services to empower them towards a 
          life of dignity, security, and independence. We are committed to breaking the cycle of violence 
          through compassionate care, advocacy, and education.
        </p>
        <p class="text-gray-700 mb-4">
          At the Women's Violence Center for Abuse, we are steadfast in our commitment to providing a lifeline to those 
          in need. Every woman deserves to live a life free from violence, and we are here to support them every step of 
          the way. Together, we can build a safer, more just world for all women.
        </p>
      </div>
      <!-- Image Section -->
      <div class="lg:flex-1 mt-8 lg:mt-0">
        <img src="/public/test_logo.png" alt="About Image" class="w-full h-auto rounded-lg shadow-md">
      </div>
    </div>


  </div>
</template>
  
<script setup>
useHead({
  title: 'About Us',
})
</script>
  
<style scoped>
/* Scoped styles if needed */
</style>
  
