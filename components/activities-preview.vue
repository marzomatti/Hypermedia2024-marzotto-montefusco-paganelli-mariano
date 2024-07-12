<template>
  <section class="bg-primary-color py-12 px-12">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold text-white mb-8">Our Activities</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <!-- Services Block -->
        <NuxtLink to="/Activities/Services" class="rounded-3xl   flex items-center ">
          <div class="bg-white p-6 rounded-3xl shadow-lg transition duration-500 hover:shadow-xl hover:scale-105">
            <img src="/services_preview.jpg" alt="Services Image" class="w-full h-64 object-cover mb-4 rounded-3xl"/>
            <h3 class="text-xl font-semibold text-blue mb-2">Services</h3>
            <p class="text-blue">
              Offering counseling, legal help, and recovery programs to support and empower women.</p>
          </div>
        </NuxtLink>
        
        <!-- Projects Block -->
        <NuxtLink to="/Activities/Projects" class="rounded-3xl flex items-center ">
          <div class="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition duration-500 hover:scale-105">
            <img src="/projects_preview.jpg" alt="Projects Image" class="w-full h-64 object-cover mb-4 rounded-3xl"/>
            <h3 class="text-xl font-semibold text-blue mb-2">Projects</h3>
            <p class="text-blue">
              Raising awareness and actively advocating for women's rights through community projects.</p>
          </div>
        </NuxtLink>
      </div>
      <NuxtLink to="/activities" class="inline-block border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-color transition duration-300">
        See all activities &rarr;
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ActivitiesPreview',
};
</script>

<style scoped>
/* Additional styles if needed */
.rounded-3xl {
  border-radius: 1.5rem;
}
</style>
