<template>
  <section class="bg-red-500 py-12">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold text-white mb-8">Our Services</h2>
      <p class="text-lg text-white mb-8">Allow us to help you. Break the silence. We are here for you.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
        <div v-for="service in services" :key="service.id" class="bg-gray-100 p-6 rounded-lg shadow-lg">
          <img src="/assets/img/psychologists_preview.jpg" alt="Service Image" class="w-full object-cover mb-4 rounded-lg"/>
          <h3 class="text-xl font-semibold text-gray-800">{{ service.name }}</h3>
        </div>
      </div>
      <nuxt-link to="/activities/services" class="inline-block border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:text-red-500 hover:bg-white transition duration-300">
        See all services
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesPreview',
  data() {
    return {
      services: [ // Sample data -> Replace with actual data from database
        { id: 1, name: 'Get in touch with our psychologists', image: '/assets/img/logo.png' },
        { id: 2, name: 'Call our emergency support assistance', image: '/stop_violence.avif' },
        { id: 3, name: 'Join a support group', image: '/stop_violence.avif' },
        { id: 4, name: 'Get legal counsel', image: '/stop_violence.avif' },
        { id: 5, name: 'Get medical help', image: '/stop_violence.avif' },
      ],
    };
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
