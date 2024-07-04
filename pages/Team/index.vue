<template>
  <section class="bg-white py-12 px-12">
    <h1 class="font-sans font-extrabold no-italic text-[40px] md:text-[56px] md:leading-[66px] text-center">Our Team</h1>

    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <!-- Staff Block -->
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <img src="/stop_violence.avif" alt="Staff" class="w-full h-64 object-cover mb-4 rounded-lg"/>
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">Staff</h3>
          <p class="text-gray-600 mb-4">Meet our dedicated staff members who work tirelessly to provide support and services to women in need.</p>
          <Button text="Discover more ->" link="/team/staff" class="mt-4"/>
        </div>
        <!-- Volunteers Block -->
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <img src="/stop_violence.avif" alt="Volunteers" class="w-full h-64 object-cover mb-4 rounded-lg"/>
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">Volunteers</h3>
          <p class="text-gray-600 mb-4">Discover the passionate volunteers who help us make a difference in the lives of women facing violence.</p>
          <Button text="Discover more ->" link="/team/volunteers" class="mt-4"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
/* Additional styles if needed */
</style>
