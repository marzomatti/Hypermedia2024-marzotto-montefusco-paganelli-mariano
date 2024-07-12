<template>
  <div class="bg-white p-8 rounded-3xl shadow-lg mb-12 flex flex-col md:flex-row items-center">
    <div class="md:flex-1 md:mr-8">
      <img :src="imageSrc" alt="Profile Photo" class="w-full h-auto rounded-3xl shadow-md mb-4 md:mb-0">
    </div>
    <div class="md:flex-1 text-center md:text-left">
      <h1 class="text-5xl font-extrabold text-blue mb-4">{{ name }} {{ surname }}</h1>
      <h2 class="text-3xl text-blue mb-6">{{ role }}</h2>
      <div class="mt-4">
        <h3 class="text-2xl font-bold text-blue">Contact</h3>
        <p class="text-blue text-xl">Email: <a :href="'mailto:' + email" class="text-blue hover:underline">{{ email }}</a></p>
      </div>
      <div class="mt-6">
        <h3 class="text-2xl font-bold text-blue">Description</h3>
        <p class="text-blue text-xl">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imageSrc: String,
  name: String,
  surname: String,
  role: String,
  email: String,
  description: String,
});
</script>

<style scoped>
.rounded-3xl {
  border-radius: 1.5rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
