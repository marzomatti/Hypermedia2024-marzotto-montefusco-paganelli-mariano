<template>
  <div class="bg-white mb-6">
    <main class="container mx-auto py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SectionCard
          v-for="section in sections"
          :key="section.title"
          :title="section.title"
          :description="section.description"
          :imageUrl="section.imageUrl"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SectionCard from '@/components/SectionCard.vue'

const sections = ref([
  {
    title: "People",
    description: "People description people description people description people description people description people description",
    imageUrl: "/group_pic.jpeg",
  },
  {
    title: "Services",
    description: "Services description services description services description services description services description services description",
    imageUrl: "/group_pic.jpeg",
  },
  {
    title: "Projects",
    description: "Projects description projects description projects description projects description projects description projects description",
    imageUrl: "/group_pic.jpeg",
  },
])
</script>

<style scoped>

</style>
