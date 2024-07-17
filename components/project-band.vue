<template>
    <div :class="backgroundColor" class="lg:px-24 px-4 py-12">
      <div class="flex flex-col lg:flex-row items-center">
        <div class="flex-1">
          <h2 class="text-3xl font-bold text-blue mb-2">{{ name }}</h2>
          <p class="text-blue text-lg mb-4">{{ description }}</p>
          <Button :link="link" text="Read more" />
        </div>
        <div class=" mt-4 sd:pl-32 pr-4">
          <img :src="getImageLink(imageSrc)" alt="Project Image" class="w-80 h-80 lg:w-96 lg:h-64 ml-4 lg:ml-8 rounded-3xl shadow-md">
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  function getImageLink(imageUrl){
  const config = useRuntimeConfig()
  return `${config.public.supabaseImagesUrl}${imageUrl}`
}

  defineProps({
    name: String,
    description: String,
    link: String,
    imageSrc: String,
    backgroundColor: String,
  });
  </script>
  
  <style scoped>
  

  </style>
  