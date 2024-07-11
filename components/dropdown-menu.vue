<template>
  <div class="relative orange-100" @mouseover="clearHideTimeout" @mouseleave="delayedHideDropdown" ref="dropdownContainer">
    <slot @click="toggleDropdown"></slot>
    <div v-if="showDropdown" :class="[dropdownPosition, 'absolute', 'mt-2', 'w-max', 'bg-orange-100', 'shadow-lg', 'rounded-lg', 'z-50']">
      <div class="p-4 flex flex-col space-y-4 orange-100">
        <div v-for="category in categories" :key="category.name" class="w-48 ">
          <NuxtLink :to="getCategoryLink(category.name)" >
            <h3 class="block px-4 py-2 text-blue  mb-2 rounded-md hover:bg-secondary-color hover:text-white">{{ category.name }}</h3>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'

const showDropdown = ref(false)
let hideTimeout = null
const dropdownContainer = ref(null)
const dropdownPosition = ref('left-0')

const props = defineProps({
  categories: {
    type: Array,
    required: true
  }
})

function toggleDropdown() {
  showDropdown.value = !showDropdown.value
  if (showDropdown.value) {
    nextTick(() => {
      adjustDropdownPosition()
    })
  }
}

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

const supabase = useSupabaseClient()
const services = ref([])
const projects = ref([])

const fetchServicesData = async () => {
  const { data, error } = await supabase
    .from('services')
    .select('*')

  if (error) {
    console.error(error)
  } else {
    services.value = data
  }
}

const fetchProjectsData = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')

  if (error) {
    console.error(error)
  } else {
    projects.value = data
  }
}

function getItems(categoryName) {
  if (categoryName === 'Services') {
    return services.value
  } else if (categoryName === 'Projects') {
    return projects.value
  }
  return []
}

function getItemLink(categoryName, itemId) {
  if (categoryName === 'Services') {
    return `/activities/services/${itemId}`
  } else if (categoryName === 'Projects') {
    return `/activities/projects/${itemId}`
  }
  return '#'
}

function getCategoryLink(categoryName) {
  if (categoryName === 'Services') {
    return '/activities/services'
  } else if (categoryName === 'Projects') {
    return '/activities/projects'
  } else if (categoryName === 'Staff') {
    return '/team/staff'
  } else if (categoryName === 'Volunteers') {
    return '/team/volunteers'
  }
  return '#'
}

function adjustDropdownPosition() {
  const dropdownRect = dropdownContainer.value.getBoundingClientRect()
  const viewportWidth = window.innerWidth
  if (dropdownRect.right > viewportWidth) {
    dropdownPosition.value = 'right-0'
  } else {
    dropdownPosition.value = 'left-0'
  }
}

onMounted(() => {
  fetchServicesData()
  fetchProjectsData()
  adjustDropdownPosition()
})

watch(showDropdown, (newValue) => {
  if (newValue) {
    adjustDropdownPosition()
  }
})
</script>

<style scoped>
.left-0 {
  left: 0;
}

.right-0 {
  right: 0;
}

.dropdown-menu {
  transition: opacity 0.3s ease;
  opacity: 0;
}

.show-dropdown .dropdown-menu {
  opacity: 1;
}
</style>
