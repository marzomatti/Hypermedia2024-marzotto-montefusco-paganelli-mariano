<template>
  <section class="relative bg-cover bg-center h-screen" :style="heroStyle">
    <div class="flex items-end justify-center h-full pb-16">
      <h1 class="text-5xl font-bold text-blue text-center animate-fadeInUp">You are not alone!</h1>
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
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 1s ease-out;
}


</style>
