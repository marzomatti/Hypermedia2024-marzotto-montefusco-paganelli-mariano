<template>
    <nav class="font-mono">
      <ul class="flex space-x-4">
        <li>
          <NuxtLink to="/" class="link">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/people/" class="link">People</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/activities/" class="link">Activities</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/chat/" class="link">Chatbot</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="link">Contact us</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="link">About us</NuxtLink>
        </li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
  .link {
    @apply p-2 text-lg hover:bg-custom-purple hover:text-white rounded-md;
  }
  
  /* Style the active link */
  .link.active {
    @apply bg-custom-purple text-white;
  }
  </style>
  