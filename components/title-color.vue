<template>
  <div class="flex flex-col bg-secondary-color lg:py-12 py-8">
    <div class="lg:px-24 px-4">
      <!-- Title of the page -->
      <h1 class="hiddenItem font-sans font-extrabold no-italic text-[40px] md:text-[56px] md:leading-[66px] text-center text-4xl text-white text-center font-bold">{{ title }}</h1>
      <!-- Description of the page -->
      <div class="hiddenItem flex justify-center mt-4">
        <h2 class="text-white text-center lg:text-2xl text-xl">{{ description }}</h2>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      required: true,
      default: ''
    },
    description: {
      type: String,
      required: false,
      default: ''
    }
  });
</script>

<style>
/* Rimuovi temporaneamente il CSS per isolare il problema */
</style>
