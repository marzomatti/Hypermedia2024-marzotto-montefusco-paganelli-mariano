<template>
  <div class="relative" @mouseover="clearHideTimeout" @mouseleave="delayedHideDropdown">
    <slot></slot>
    <div v-if="showDropdown" class="absolute left-0 mt-2 w-max bg-white shadow-lg rounded-lg z-50">
      <div class="p-4 flex space-x-6">
        <div v-for="category in categories" :key="category.name" class="w-1/2">
          <NuxtLink :to="category.href" class="block px-4 py-2 hover:bg-secondary-color hover:text-white text-blue rounded-md text-sm font-bold mb-2">{{ category.name }}</NuxtLink>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service.id">
              <NuxtLink :to="getServiceLink(service.id)" class="text-blue block px-4 py-2 hover:bg-secondary-color hover:text-white rounded-md">
                {{ service.name }}
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

const { data: services, pending } = await useAsyncData('services', async () => {
  const { data, error } = await supabase
    .from('services')
    .select()
    
  if (error) {
    console.error('Error fetching services:', error)
    return []
  }

  return data
})

function getServiceLink(serviceId){
  return "services/service" + serviceId;
}
</script>

<style scoped>
/* Optional: Customize the dropdown style here */
.dropdown-menu {
  transition: opacity 0.3s ease;
  opacity: 0;
}

.show-dropdown .dropdown-menu {
  opacity: 1;
}
</style>
