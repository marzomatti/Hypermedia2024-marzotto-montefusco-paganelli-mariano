<template>
  <nav class="bg-header-bg-color fixed top-0 left-0 right-0 z-50 shadow">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-24 items-center justify-between">
        <Logo />
        <div class="flex items-center justify-center">
          <div class="hidden md:flex items-center mr-8">
            <template v-for="item in navigation">
              <NuxtLink
                v-if="item.name !== 'Activities' && item.name !== 'Our team'"
                :key="item.name"
                :to="item.href"
                class="text-blue hover:bg-secondary-color hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                <span>{{ item.name }}</span>
              </NuxtLink>
              <DropdownMenu v-else-if="item.name === 'Activities'" :key="item.id" :categories="activityCategories">
                <NuxtLink to="/activities" class="text-blue hover:bg-secondary-color hover:text-white rounded-md px-3 py-2 text-sm font-medium flex items-center">
                  <span>{{ item.name }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </NuxtLink>
              </DropdownMenu>
              <DropdownMenu v-else :key="item.href" :categories="teamCategories">
                <NuxtLink to="/team" class="text-blue hover:bg-secondary-color hover:text-white rounded-md px-3 py-2 text-sm font-medium flex items-center">
                  <span>{{ item.name }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </NuxtLink>
              </DropdownMenu>
            </template>
          </div>
        </div>

        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="relative inline-flex items-center justify-center rounded-md bg-secondary-color p-2 text-white hover:bg-red-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <svg
              v-if="!mobileMenuOpen"
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <svg
              v-else
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div v-if="mobileMenuOpen" class="md:hidden shadow">
      <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="hover:bg-secondary-color hover:text-white block rounded-md px-3 py-2 text-base font-medium "
        >{{ item.name }}</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useNavigationStore } from '../src/stores/NavigationStore'

const mobileMenuOpen = ref(false)
const open = ref(false)

const store = useNavigationStore()
const navigation = ref(store.navigation)
const setCurrentPage = ref(store.setCurrentPage)

const activityCategories = [
  {
    name: 'Services',
    href: '/activities/services',
  },
  {
    name: 'Projects',
    href: '/activities/projects',
  }
]

const teamCategories = [
  {
    name: 'Staff',
    href: '/team/staff',
  },
  {
    name: 'Volunteers',
    href: '/team/volunteers',
  }
]

function getLink(name){
  switch(name){
    case 'Activities':
      return '/activities'
    case 'Our team':
      return '/team'
  }
}
</script>

<style>
body {
  margin-top: 96px;
}
</style>