<template>
  <div class="flex justify-between mt-8">
    <button @click="onPrevious" class="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
      Previous
    </button>
    <button @click="onNext" class="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
      Next
    </button>
  </div>
</template>

<script setup>
defineProps({
  onPrevious: Function,
  onNext: Function
});
</script>

<style scoped>
.bg-blue-500 {
  background-color: #4299e1;
}

.text-white {
  color: #ffffff;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.hover\:bg-blue-700:hover {
  background-color: #2b6cb0;
}

.transition {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
}

.duration-300 {
  transition-duration: 300ms;
}
</style>
