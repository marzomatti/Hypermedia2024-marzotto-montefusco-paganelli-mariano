<template>
    <div class="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
      <div>
        <b class="text-lg font-bold">{{ contact.center }}</b>
        <p class="text-gray-700">{{ contact.role }}</p>
        <p v-if="contact.name" class="text-gray-700">{{ contact.name }}</p>
        <p class="text-gray-700">{{ contact.street }}</p>
        <p class="text-gray-700">{{ contact.phone }}</p>
        <a :href="'mailto:' + contact.email" class="text-blue-500">{{ contact.email }}</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactCard',
    props: {
      contact: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional additional styles for ContactCard */
  </style>
  