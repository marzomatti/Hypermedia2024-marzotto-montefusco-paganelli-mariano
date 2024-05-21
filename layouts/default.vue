<template>
    <div>
      <header>
        <AppHeader />
      </header>
  
      <main>
                <slot />
      </main>
      <footer>
        <AppFooter />
      </footer>
    </div>
  </template>
  
  <style scoped>
  /* .logo {
    @apply h-12 w-auto max-w-full transition-transform duration-300 ease-in-out;
  }
  
  .logo:hover {
    @apply transform scale-105;
  }
  
  .container {
    @apply rounded-md p-6 w-full;
  }
  
  .Menu ul {
    @apply flex space-x-4 justify-center;Centering the menu items 
  }
  
  .Menu ul li .link {
    @apply p-2 px-4 mx-1 rounded-md hover:bg-gray-200;
  } */
  </style>
  