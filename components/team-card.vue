<template>
  <div class="bg-white p-6 rounded-3xl shadow-lg transition duration-500 hover:shadow-xl hover:scale-105 flex flex-col items-center">
    <div class="flex-shrink-0 w-full">
      <img :src="imageSrc" :alt="altText" class="w-full h-128 object-cover mb-2 rounded-3xl" :class="imageClass"/>
    </div>
    <h3 class="text-2xl font-semibold text-blue mb-2">{{ title }}</h3>
    <p class="text-blue mb-2">{{ description }}</p>
    <Button :text="buttonText" :link="buttonLink" class="mt-2"/>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  imageSrc: String,
  altText: String,
  buttonText: String,
  buttonLink: String,
  imageClass: String
});
</script>

<style scoped>
.rounded-3xl {
  border-radius: 1.5rem;
}

.h-128 {
  height: 32rem;
}

.object-top {
  object-position: top;
}
</style>
