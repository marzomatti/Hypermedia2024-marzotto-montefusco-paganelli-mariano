<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <NuxtLink to="/" class="text-gray-700 hover:text-gray-900 inline-flex items-center">
          <svg class="w-4 h-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 20a1 1 0 01-.71-.29l-9-9a1 1 0 011.42-1.42L10 17.58l8.29-8.29a1 1 0 111.42 1.42l-9 9A1 1 0 0110 20z" />
          </svg>
          Home
        </NuxtLink>
      </li>
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="inline-flex items-center">
        <span class="mx-1 text-gray-500">/</span>
        <NuxtLink :to="breadcrumb.path" class="text-gray-700 hover:text-gray-900">
          {{ breadcrumb.name }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbs = computed(() => {
  const pathArray = route.path.split('/').filter(path => path)
  return pathArray.map((path, index) => {
    const to = '/' + pathArray.slice(0, index + 1).join('/')
    const name = path.replace(/-/g, ' ')
    return { path: to, name: name.charAt(0).toUpperCase() + name.slice(1) }
  })
})
</script>
