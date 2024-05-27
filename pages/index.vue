<template>
  <div class="container max-w-7xl mx-auto px-4">
    <TheMission/>
    <SectionsPreview/>
    <ThePraticalnformation/>
  </div>

  </template>
  
  <script setup>
  useSeoMeta({
  title: 'Home - NoWomanAlone',
  description: 'This is the home page',
  ogTitle: 'Home - NoWomanAlone',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'Home - NoWomanAlone',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
  </script>
  
  <style scoped>
  </style>
  