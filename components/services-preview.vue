<template>
  <section class="bg-white py-12">
    <div class="container mx-auto flex flex-col md:flex-row items-start justify-between">
      <!-- Left Side: Title, Description, and Image -->
      <div class="w-full md:w-1/2 mb-8 md:mb-0 px-4 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p class="text-lg text-gray-600 mb-4">We offer comprehensive support, including legal assistance, counseling, and recovery programs. Let our expert team help you find safety and empowerment. Discover how we can assist you on your journey.</p>
        <Button :text="'See our services ->'" />
      </div>
      <!-- Right Side: Service Buttons -->
      <div class="w-full md:w-1/3 flex flex-col space-y-4 pr-4">
        <img src="/assets/img/gabrielle-henderson-HJckKnwCXxQ-unsplash.jpg" alt="Services Image" class="w-full h-64 object-cover mb-4 rounded-lg"/>
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
