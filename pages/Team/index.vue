<template>
  <section class="bg-gray-100 py-12">
    <h2 class="text-4xl font-semibold text-center text-gray-800 mb-12">Our Team</h2>
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <!-- Staff Block -->
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <img src="/public/stop_violence.avif" alt="Staff" class="w-full h-64 object-cover mb-4 rounded-lg"/>
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">Staff</h3>
          <nuxt-link to="/team/staff" class="text-red-400 hover:underline">Learn more &rarr;</nuxt-link>
        </div>
        <!-- Volunteers Block -->
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <img src="/public/stop_violence.avif" alt="Volunteers" class="w-full h-64 object-cover mb-4 rounded-lg"/>
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">Volunteers</h3>
          <nuxt-link to="/team/volunteers" class="text-red-400 hover:underline">Learn more &rarr;</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PeoplePage'
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
