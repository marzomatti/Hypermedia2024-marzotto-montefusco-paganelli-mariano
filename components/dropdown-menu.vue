<template>
  <div @mouseover="clearHideTimeout" @mouseleave="delayedHideDropdown" class="relative">
    <slot></slot>
    <div v-if="showDropdown" class="absolute left-0 mt-2 w-96 bg-white shadow-lg rounded-lg z-50">
      <div class="p-4 flex space-x-6">
        <div v-for="category in categories" :key="category.name" class="w-1/2">
          <NuxtLink :to="category.href" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-bold mb-2">{{ category.name }}</NuxtLink>
          <ul class="space-y-2">
            <li v-for="item in category.items" :key="item.name">
              <NuxtLink :to="item.href" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showDropdown = ref(false)
let hideTimeout = null

const props = defineProps({
  categories: {
    type: Array,
    required: true
  }
})

function delayedHideDropdown() {
  hideTimeout = setTimeout(() => {
    showDropdown.value = false
  }, 100)
}

function clearHideTimeout() {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
    hideTimeout = null
  }
  showDropdown.value = true
}
</script>

<style scoped>
/* Optional: Customize the dropdown style here */
</style>
