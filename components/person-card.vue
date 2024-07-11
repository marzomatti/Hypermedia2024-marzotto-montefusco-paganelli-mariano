<template>
  <nuxt-link
    :to="link"
    class="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-700 hover:scale-105 animate-fadeIn"
    :style="{ visibility: isVisible ? 'visible' : 'hidden' }"
  >
    <img :src="imageSrc" alt="Volunteer Photo" class="w-full h-auto object-cover rounded-lg mb-4 aspect-portrait">
    <h3 class="text-xl font-semibold text-blue">{{ name }} {{ surname }}</h3>
    <p class="text-blue">{{ role }}</p>
  </nuxt-link>
</template>

<script setup>
defineProps({
  link: String,
  imageSrc: String,
  name: String,
  surname: String,
  role: String,
  isVisible: Boolean,
});
</script>

<style scoped>
.rounded-lg {
  border-radius: 1.5rem;
}

.aspect-portrait {
  aspect-ratio: 3 / 4;
}

.bg-white {
  background-color: #ffffff;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
