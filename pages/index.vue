<template>
  <main>
  <div>
    <HeroSection/>
    <div>
        <Mission/>
        <ActivitiesPreview/>
        <PeoplePreview/>
    </div>
  </div>
  </main>

  </template>
  
  <script setup>
import Temporary from '~/components/mission.vue';

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
  