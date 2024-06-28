<template>
  <main class="bg-gray-50 min-h-screen py-8">
    <div class="container mx-auto px-4">
      <!-- Header Section -->
      <header class="text-center mb-12">
        <h1 class="text-5xl font-extrabold text-gray-900 mb-4">Meet Our Volunteers</h1>
        <p class="text-xl text-gray-600">
          Our dedicated volunteers are the heart and soul of our organization. They come from various backgrounds and are committed to making a positive impact in the lives of women affected by violence.
        </p>
      </header>

      <!-- Volunteers Grid Layout -->
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div v-for="volunteer in volunteers" :key="volunteer.id" class="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img :src="volunteer.imageUrl" :alt="volunteer.name" class="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ volunteer.name }} {{ volunteer.surname }}</h2>
          <p class="text-gray-600 mb-4">{{ volunteer.description }}</p>
          <nuxt-link :to="volunteer.link" class="inline-block bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition-colors duration-200">Discover More</nuxt-link>
          <div class="absolute bottom-0 right-0 p-2">
            <img src="/path/to/decorative-icon.png" alt="decorative icon" class="w-8 h-8 opacity-50">
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Volunteers',
})

const teamName = 'Volunteers';
const volunteers = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe',
    imageUrl: '/face1.jpg',
    description: 'John is an experienced clinical psychologist.',
    link: '/people/person1'
  },
  {
    id: 2,
    name: 'Jane',
    surname: 'Smith',
    imageUrl: '/face1.jpg',
    description: 'Jane specializes in child psychology.',
    link: '/people/person1'
  },
  {
    id: 3,
    name: 'Alice',
    surname: 'Johnson',
    imageUrl: '/face1.jpg',
    description: 'Alice has a background in neuropsychology.',
    link: '/people/person1'
  },
  {
    id: 4,
    name: 'Robert',
    surname: 'Brown',
    imageUrl: '/face1.jpg',
    description: 'Robert focuses on behavioral therapy.',
    link: '/people/person1'
  },
  {
    id: 5,
    name: 'Emily',
    surname: 'Davis',
    imageUrl: '/face1.jpg',
    description: 'Emily is an expert in trauma therapy.',
    link: '/people/person1'
  },
  {
    id: 6,
    name: 'Michael',
    surname: 'Wilson',
    imageUrl: '/face1.jpg',
    description: 'Michael specializes in anxiety disorders.',
    link: '/people/person1'
  },
  {
    id: 7,
    name: 'Sarah',
    surname: 'Miller',
    imageUrl: '/face1.jpg',
    description: 'Sarah works with depression and mood disorders.',
    link: '/people/person1'
  },
  {
    id: 8,
    name: 'David',
    surname: 'Garcia',
    imageUrl: '/face1.jpg',
    description: 'David is skilled in cognitive behavioral therapy.',
    link: '/people/person1'
  },
  {
    id: 9,
    name: 'Laura',
    surname: 'Martinez',
    imageUrl: '/face1.jpg',
    description: 'Laura has extensive experience in family therapy.',
    link: '/people/person1'
  },
];
</script>

<style scoped>
.container {
  @apply mx-auto px-4;
}

header h1 {
  @apply text-5xl font-extrabold text-center mb-8;
}

header p {
  @apply text-xl text-gray-600 text-center mb-8;
}

section div {
  @apply relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300;
}

section img {
  @apply w-24 h-24 rounded-full mx-auto mb-4 border-4 border-red-500;
}

section h2 {
  @apply text-2xl font-bold text-gray-900 mb-2;
}

section p {
  @apply text-gray-600 mb-4;
}

section a {
  @apply inline-block bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition-colors duration-200;
}

section .absolute {
  @apply bottom-0 right-0 p-2;
}

section .absolute img {
  @apply w-8 h-8 opacity-50;
}
</style>
