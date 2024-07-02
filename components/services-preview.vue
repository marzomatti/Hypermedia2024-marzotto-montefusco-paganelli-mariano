<template>
  <section class="bg-white py-12">
    <div class="container mx-auto flex flex-col md:flex-row items-start justify-between">
      <!-- Left Side: Title and Description -->
      <div class="w-full md:w-1/2 mb-8 md:mb-0 px-4">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p class="text-lg text-blue-600 mb-4">We offer comprehensive support, including legal assistance, counseling, and recovery programs. Let our expert team help you find safety and empowerment. Discover how we can assist you on your journey.</p>
        <Button :text="'See our services ->'" />
      </div>
      <!-- Right Side: Service Buttons -->
      <div class="w-full md:w-1/2 flex flex-col space-y-4 px-4">
        <button class="flex items-center border-2 border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white transition hover:bg-primary-color duration-300">
          <span class="text-2xl mr-2">+</span> <span class="text-xl">Service Name 1</span>
        </button>
        <button class="flex items-center border-2 border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white transition hover:bg-primary-color duration-300">
          <span class="text-2xl mr-2">+</span> <span class="text-xl">Service Name 2</span>
        </button>
        <button class="flex items-center border-2 border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white transition hover:bg-primary-color duration-300">
          <span class="text-2xl mr-2">+</span> <span class="text-xl">Service Name 3</span>
        </button>
        <button class="flex items-center border-2 border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white transition hover:bg-primary-color duration-300">
          <span class="text-2xl mr-2">+</span> <span class="text-xl">Service Name 4</span>
        </button>
        <button class="flex items-center border-2 border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white transition hover:bg-primary-color duration-300">
          <span class="text-2xl mr-2">+</span> <span class="text-xl">Service Name 5</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const supabase = useSupabaseClient()

const services = ref([])

const { data, pending } = await useAsyncData('services', async () => {
  const { data, error } = await supabase
    .from('services')
    .select()
    
  if (error) {
    return []
  }

  return data
})

services.value = data.value
</script>

<style scoped>
/* Additional styles if needed */
</style>
