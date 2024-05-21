<template>
    <div class="bg-custom-background-color">
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
    .bg-custom-background-color {
      background-color: white;
    }
  </style>
  