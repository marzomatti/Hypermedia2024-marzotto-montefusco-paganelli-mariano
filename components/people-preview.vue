<template>
  <section class="bg-white py-12 px-12">
    <div class="container mx-auto flex items-center">
      <div class="w-1/2 text-left pr-8">
        <h2 class="text-4xl font-bold text-gray-800 mb-2">Our team</h2>
        <p class="text-lg mb-6">Our dedicated team of professionals is here to support and guide you. <br> <span class="text-primary-color">Break the silence</span> and reach out to us for help.</p>
        <Button text="See our team" link="/team"></Button>
        
      </div>
      <div class="w-1/2 flex justify-center">
        <div class="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
          <img :src="backgroundUrl" alt="Our team" class="object-cover w-full h-auto"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import backgroundUrl from '~/assets/img/homepage_2.jpg';
export default {
  name: 'PeoplePreview',
  data() {
    return {
      backgroundUrl
    };
  }
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
