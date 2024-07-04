<template>
  <section class="relative bg-cover bg-center h-screen" :style="heroStyle">
    <div class="flex items-center justify-center h-full">
      <div class="absolute top-0 center-5 p-10 text-left text-white">
        <h1 class="text-5xl font-bold text-secondary-color">You are not alone!</h1>
      </div>
    </div>
  </section>
</template>

<script>
import backgroundUrl from '~/assets/img/homepage_1.png';
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
        backgroundPosition: 'center top',
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
