<template>
    <div class="container mx-auto max-w-2xl">
      <header class="flex justify-between items-center mt-5 bg-custom-purple-dark text-white py-4 px-6 rounded-md shadow-md">
        <div>
          <img src="../assets/images/test_logo.png" alt="logo" class="logo">
        </div>
        <Menu />
      </header>
  
      <main class="p-4 bg-white rounded-lg shadow-md mt-6 text-custom-purple-light">
        <slot />
      </main>
    </div>
  </template>
  
  <style scoped>
  .logo {
    @apply h-12 w-auto max-w-full transition-transform duration-300 ease-in-out;
  }
  
  .logo:hover {
    @apply transform scale-105;
  }
  
  .container {
    @apply rounded-md p-6 w-full;
  }
  
  .Menu ul {
    @apply flex space-x-4 justify-center; /* Centering the menu items */
  }
  
  .Menu ul li .link {
    @apply p-2 px-4 mx-1 rounded-md hover:bg-gray-200;
  }
  </style>
  