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

<script setup>
useHead({
  titleTemplate: '%s - NoWomanAlone',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter&display=swap',
      crossorigin: ''
    }
  ]
})
</script>
  
<style>
  .bg-custom-background-color {
    background-color: white;
  }

  body {
    font-family: 'Inter';
  }
</style>


  