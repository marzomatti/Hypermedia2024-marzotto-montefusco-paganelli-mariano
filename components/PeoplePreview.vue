<template>
  <section class="py-12 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-extrabold text-center mb-6">Meet our leadership</h2>
      <p class="text-center text-gray-600 mb-12">
        We’re a dynamic group of individuals who are passionate about what we do
        and dedicated to delivering the best results for our clients.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="leader in leaders" :key="leader.name" class="bg-white p-6 rounded-lg shadow-lg">
          <img :src="leader.image" :alt="leader.name" class="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h3 class="text-xl font-semibold">{{ leader.name }}</h3>
          <p class="text-gray-500 mb-2">{{ leader.title }}</p>
          <p class="text-gray-700">{{ leader.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const leaders = [
  {
    name: 'Leonard Krasner',
    title: 'Senior Designer',
    description:
      'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
    image: '/images/leonard-krasner.jpg',
  },
  {
    name: 'Floyd Miles',
    title: 'Principal Designer',
    description:
      'Turpis lectus et amet elementum. Mi duis integer sed in vitae consequat. Nam vitae, in felis mi dui tempus. Porta at turpis eu odio. Et, sed duis in blandit bibendum accumsan. Purus viverra facilisi suspendisse quis est.',
    image: '/images/floyd-miles.jpg',
  },
  {
    name: 'Emily Selman',
    title: 'VP, User Experience',
    description:
      'Aliquet adipiscing lectus praesent cras sed quis lectus egestas erat. Bibendum curabitur eget habitant feugiat nec faucibus eu lorem suscipit. Vitae vitae tempor enim eget lacus nulla leo.',
    image: '/images/emily-selman.jpg',
  },
  {
    name: 'Kristin Watson',
    title: 'VP, Human Resources',
    description:
      'Quis bibendum velit diam tellus sed ut. Faucibus posuere enim, vitae enim eget neque tortor. Metus lectus mattis id id. Tellus ornare etiam id velit ut enim lacinia congue ultrices. Sit morbi vel elit a maecenas mauris elit lectus magna.',
    image: '/images/kristin-watson.jpg',
  },
]
</script>
