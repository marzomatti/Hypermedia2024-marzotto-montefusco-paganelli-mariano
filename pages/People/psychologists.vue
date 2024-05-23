<template>
    <div class="bg-gray-50 min-h-screen py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-extrabold text-center mb-8">Our Psychologists</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <PsychologistCard
            v-for="psychologist in psychologists"
            :key="psychologist.id"
            :name="psychologist.name"
            :surname="psychologist.surname"
            :imageUrl="psychologist.imageUrl"
            :description="psychologist.description"
            :link="psychologist.link"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import PsychologistCard from '@/components/PsychologistCard.vue'
  
  const psychologists = [
    {
      id: 1,
      name: 'John',
      surname: 'Doe',
      imageUrl: '../face1.jpg',
      description: 'John is an experienced clinical psychologist.',
      link: '/psychologists/john-doe'
    },
    {
      id: 2,
      name: 'Jane',
      surname: 'Smith',
      imageUrl: '../face1.jpg',
      description: 'Jane specializes in child psychology.',
      link: '/psychologists/jane-smith'
    },
    {
      id: 3,
      name: 'Alice',
      surname: 'Johnson',
      imageUrl: '../face1.jpg',
      description: 'Alice has a background in neuropsychology.',
      link: '/psychologists/alice-johnson'
    },
    {
      id: 4,
      name: 'Robert',
      surname: 'Brown',
      imageUrl: '../face1.jpg',
      description: 'Robert focuses on behavioral therapy.',
      link: '/psychologists/robert-brown'
    },
    {
      id: 5,
      name: 'Emily',
      surname: 'Davis',
      imageUrl: '../face1.jpg',
      description: 'Emily is an expert in trauma therapy.',
      link: '/psychologists/emily-davis'
    },
    {
      id: 6,
      name: 'Michael',
      surname: 'Wilson',
      imageUrl: '../face1.jpg',
      description: 'Michael specializes in anxiety disorders.',
      link: '/psychologists/michael-wilson'
    },
    {
      id: 7,
      name: 'Sarah',
      surname: 'Miller',
      imageUrl: '../face1.jpg',
      description: 'Sarah works with depression and mood disorders.',
      link: '/psychologists/sarah-miller'
    },
    {
      id: 8,
      name: 'David',
      surname: 'Garcia',
      imageUrl: '../face1.jpg',
      description: 'David is skilled in cognitive behavioral therapy.',
      link: '/psychologists/david-garcia'
    },
    {
      id: 9,
      name: 'Laura',
      surname: 'Martinez',
      imageUrl: '../face1.jpg',
      description: 'Laura has extensive experience in family therapy.',
      link: '/psychologists/laura-martinez'
    },
    {
      id: 10,
      name: 'James',
      surname: 'Rodriguez',
      imageUrl: '../face1.jpg',
      description: 'James is a licensed clinical social worker.',
      link: '/psychologists/james-rodriguez'
    }
  ];
  </script>
  
  <style scoped>
  .container {
    @apply mx-auto px-4;
  }
  
  h1 {
    @apply text-3xl font-extrabold text-center mb-8;
  }

  </style>
  