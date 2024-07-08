<template>
  <section class="bg-white py-12">
    <div class="container mx-auto flex flex-col md:flex-row items-start justify-between">
      <!-- Left Side: Title and Description -->
      <div class="w-full md:w-1/2 mb-8 md:mb-0 px-4">
        <h2 class="text-4xl font-bold text-blue mb-4">Our Services</h2>
        <p class="text-lg text-blue mb-4">We offer comprehensive support, including legal assistance, counseling, and recovery programs. Let our expert team help you find safety and empowerment. Discover how we can assist you on your journey.</p>
        <Button :text="'See our services ->'" :link="'/activities/services'"/>
      </div>
      <!-- Right Side: Service Buttons -->
      <div class="w-full md:w-1/2 flex md:justify-end justify-center">
        <div class="w-2/3 flex flex-col space-y-4 px-4">
          <div v-if="loading">Loading...</div>
          <div v-else-if="error">{{ error }}</div>
          <div v-else v-for="service in services" :key="service.id" class="flex items-center space-x-2">
            <img :src="service.logo" alt="Service Icon" class="w-16 h-16 cursor-pointer"/>
            <button @click="navigateTo(service.id)" class="flex-1 flex items-center border-2 border-secondary-color text-blue rounded-full px-6 py-4 hover:text-white transition hover:bg-secondary-color duration-300">
              <span class="text-xl">{{ service.name }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: services, error, loading } = await useFetch('/api/services');
const router = useRouter();

const navigateTo = (id) => {
  if (id) {
    router.push(`/activities/services/${id}`);
  }
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
