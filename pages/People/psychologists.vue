<template>
  <TeamSection :people="psychologists" :team-name="teamName"/>
</template>
  
<script setup>
useHead({
  title: 'Psychologists',
})

const teamName = 'Psychologists';
const psychologists = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe',
    imageUrl: '../face1.jpg',
    description: 'John is an experienced clinical psychologist.',
    link: '/people/person1'
  },
  {
    id: 2,
    name: 'Jane',
    surname: 'Smith',
    imageUrl: '../face1.jpg',
    description: 'Jane specializes in child psychology.',
    link: '/people/person1'
  },
  {
    id: 3,
    name: 'Alice',
    surname: 'Johnson',
    imageUrl: '../face1.jpg',
    description: 'Alice has a background in neuropsychology.',
    link: '/people/person1'
  },
  {
    id: 4,
    name: 'Robert',
    surname: 'Brown',
    imageUrl: '../face1.jpg',
    description: 'Robert focuses on behavioral therapy.',
    link: '/people/person1'
  },
  {
    id: 5,
    name: 'Emily',
    surname: 'Davis',
    imageUrl: '../face1.jpg',
    description: 'Emily is an expert in trauma therapy.',
    link: '/people/person1'
  },
  {
    id: 6,
    name: 'Michael',
    surname: 'Wilson',
    imageUrl: '../face1.jpg',
    description: 'Michael specializes in anxiety disorders.',
    link: '/people/person1'
  },
  {
    id: 7,
    name: 'Sarah',
    surname: 'Miller',
    imageUrl: '../face1.jpg',
    description: 'Sarah works with depression and mood disorders.',
    link: '/people/person1'
  },
  {
    id: 8,
    name: 'David',
    surname: 'Garcia',
    imageUrl: '../face1.jpg',
    description: 'David is skilled in cognitive behavioral therapy.',
    link: '/people/person1'
  },
  {
    id: 9,
    name: 'Laura',
    surname: 'Martinez',
    imageUrl: '../face1.jpg',
    description: 'Laura has extensive experience in family therapy.',
    link: '/people/person1'
  },
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
  