<template>
  <div class="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition duration-500 flex items-center hover:scale-105 animate-fadeIn" :style="{ visibility: isVisible ? 'visible' : 'hidden' }">
    <NuxtLink :to="link" class="flex items-center">
      <img :src="getImageLink(logo)" alt="Service Icon" class="w-16 h-16 cursor-pointer mr-4"/>
      <div>
        <h2 class="text-2xl font-bold text-blue mb-2">{{ name }}</h2>
        <p class="text-blue">{{ description }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  link: String,
  logo: String,
  name: String,
  description: String,
  isVisible: Boolean,
});

function getImageLink(imageUrl){
  const config = useRuntimeConfig()
  return `${config.public.supabaseImagesUrl}${imageUrl}`
}
</script>

<style scoped>
.rounded-3xl {
  border-radius: 1.5rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.transition {
  transition: transform 0.3s ease-in-out;
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
