<template>
    <div class="flex flex-col min-h-screen">
      <header>
        <AppHeader />
      </header>
  
      <main class="flex-grow">
        <slot />
      </main>
      
      <footer>
        <AppFooter />
      </footer>
    </div>
  </template>
  
  <style scoped>
    .bg-custom-background-color {
      background-color: white;
    }
  </style>
  