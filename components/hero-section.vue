<template>
  <section class="relative bg-cover bg-center h-screen" :style="heroStyle">
    <div class="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
      <div class="absolute bottom-20 left-5 p-10 text-left text-white">
        <h1 class="text-5xl font-bold">You are not alone!</h1>
        <p class="mt-4 text-lg">We are here to help you</p>
        <div class="mt-6">
          <nuxt-link to="/about" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg--700">Get help</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import backgroundUrl from '~/assets/img/hero-image.avif';
export default {
  name: 'HeroSection',
  data() {
    return {
      backgroundUrl
    };
  },
  computed: {
    heroStyle() {
      return {
        backgroundImage: `url(${this.backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '80vh'
      };
    }
  }
};
</script>

<style scoped>
section {
  background-image: url('./assets/img/hero-image.avif');
}
</style>
