<template>
    <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg m-4 bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div class="px-4 py-8 bg-white rounded-3xl">
        <div class="font-bold text-2xl mb-4 text-blue">
          {{ name }}, {{ age }} years
        </div>
        <img
          :src="getImageLink(photoSrc)"
          :alt="'Photo of testimonial ' + name + ', ' + age + ' years old'"
          class="w-full h-48 object-cover rounded-3xl mb-4"
        />
        <p class="text-blue text-base">"{{ citation }}"</p>
      </div>
    </div>
</template>
  
  <script setup>
  defineProps({
    name: String,
    age: String,
    photoSrc: String,
    citation: String,
  });

  function getImageLink(imageUrl){
  const config = useRuntimeConfig()
  return `${config.public.supabaseImagesUrl}${imageUrl}`
  }
  </script>
  
  <style scoped>
  .bg-white {
    background-color: #ffffff;
  }
  
  .rounded-3xl {
    border-radius: 1.5rem;
  }
  
  .shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  
  .transition {
    transition: transform 0.3s ease-in-out;
  }
  </style>
  