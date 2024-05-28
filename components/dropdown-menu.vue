<template>
  <div @mouseover="clearHideTimeout" @mouseleave="delayedHideDropdown" class="relative">
    <slot></slot>
    <div v-if="showDropdown" class="absolute left-0 mt-2 w-96 bg-white shadow-lg rounded-lg z-50">
      <div class="p-4 grid grid-cols-2 gap-6">
        <div>
          <h3 class="text-sm font-bold text-gray-700 mb-2">Services</h3>
          <ul class="space-y-2">
            <li v-for="(service, index) in services" :key="index" class="flex items-start p-2 rounded-lg hover:bg-gray-100">
              <span class="text-gray-700">{{ service }}</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-bold text-gray-700 mb-2">Projects</h3>
          <ul class="space-y-2">
            <li v-for="(project, index) in projects" :key="index" class="flex items-start p-2 rounded-lg hover:bg-gray-100">
              <span class="text-gray-700">{{ project }}</span>
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

const services = [
  'Analytics',
  'Engagement',
  'Security',
  'Integration',
  'Automation'
]

const projects = [
  'Project A',
  'Project B',
  'Project C',
  'Project D',
  'Project E'
]

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
