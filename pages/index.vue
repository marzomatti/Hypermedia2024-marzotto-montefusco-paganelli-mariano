<template>
  <div>
    <HeroSection/>
    <div class="container max-w-7xl mx-auto px-4">
      <Mission/>
      <SectionsPreview/>
      <PraticalInformation/>
    </div>
  </div>
  </template>
  
  <script setup>
  useSeoMeta({
  title: 'Home',
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
  