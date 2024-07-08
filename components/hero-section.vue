<template>
  <div>
    <section class="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24 relative" :style="heroStyle">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex items-center h-full">
        <div class="relative">
          <div class="lg:w-2/3">
            <h1 class="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl"><span class="text-orange-100 bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">You're not alone</span></h1>
            <p class="max-w-lg mt-4 text-xl font-normal text-orange-100 sm:mt-8">Join us in providing support, resources, and a safe haven for women affected by violence.</p>
            <div class="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
              <div class="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <a href="#" title="" class="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-orange-100 bg-blue border border-transparent rounded-full" role="button"> Contact Us </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import backgroundUrl from '~/assets/img/homepage_1.jpg';
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
.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}

.opacity-50 {
  opacity: 0.7; /* Aumentata opacità per migliorare visibilità del testo */
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--color-cyan-500), var(--color-purple-500));
}

.text-transparent {
  color: transparent;
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

.group-hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
