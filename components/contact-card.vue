<template>
  <div class="w-full border rounded-lg p-4 shadow-lg mx-auto lg:mx-0">
    <img class="w-56 h-64 rounded-full mx-auto" :src="profile.image" alt="Profile Image">
    <div class="text-center mt-4">
      <h2 class="text-xl font-semibold">{{ profile.name }}</h2>
      <p class="text-gray-600">{{ profile.role }}</p>
      <a href="#" class="text-blue-500 mt-2 inline-block">Visit profile &rarr;</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
