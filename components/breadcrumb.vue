<template>
  <nav class="flex bg-gray-100 py-2 px-4 w-full shadow" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="inline-flex items-center">
        <svg class="w-4 h-4 text-blue mx-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
        </svg>
        <NuxtLink v-if="index < breadcrumbs.length - 1" :to="breadcrumb.path" class="text-blue hover:text-secondary-color underline">
          {{ breadcrumb.name }}
        </NuxtLink>
        <span v-else-if="!isCustomized" class="text-blue font-medium">
          {{ breadcrumb.name }}
        </span>
        <span v-else class="text-blue font-medium">
          {{ label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
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

const props = defineProps({
  isCustomized: {
    type: Boolean,
    required: false,
    default: false
  },
  label: {
    type: String,
    required: false,
    default: ""
  }
}

)
</script>

<style scoped>


</style>
