<template>
  <div class="bg-gray-50 min-h-screen py-12">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-extrabold text-center mb-8">Our {{ teamName }}</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <PersonCard
          v-for="person in people"
          :key="person.id"
          :name="person.name"
          :surname="person.surname"
          :imageUrl="person.imageUrl"
          :description="person.description"
          :link="person.link"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  people: {
    type: Array,
    required: true
  },
  teamName : {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.container {
  @apply mx-auto px-4;
}

h1 {
  @apply text-3xl font-extrabold text-center mb-8;
}

</style>
