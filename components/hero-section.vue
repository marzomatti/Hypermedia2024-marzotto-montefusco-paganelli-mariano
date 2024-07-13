<template>
  <div>
    <section class="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24 relative" :style="heroStyle">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex items-center h-full">
        <div class="relative fadeInLeft">
          <div class="lg:w-2/3">
            <h1 class="mt-6 text-4xl text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
              <span class="text-orange-100 bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">You're not alone</span>
            </h1>
            <p class="max-w-lg mt-4 text-xl text-orange-100 sm:mt-8">Join us in providing support, resources, and a safe haven for women affected by violence</p>
          </div>
        </div>
        <div class="relative lg:w-1/3 text-right lg:pr-16 mt-auto fadeInRight">
          <p class="max-w-lg text-xl text-orange-100 sm:mt-8">Facing domestic violence? We are here to support you</p>
          <div class="relative inline-flex items-center justify-center mt-4 sm:mt-6 group">
            <div class="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
            <NuxtLink to="/virtual-assistant" title="" class="relative inline-flex items-center justify-center px-8 py-3 text-base text-orange-100 bg-blue border border-transparent rounded-full hover:bg-orange-100 hover:text-blue" role="button"> Chat Now </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import backgroundUrl from '~/public/homepage/homepage_12.png';

const isVisible = ref(false);
const heroStyle = ref({
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '80vh'
});

onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        heroStyle.value.backgroundImage = `url(${backgroundUrl})`;
        isVisible.value = true;
        observer.disconnect();
      }
    });
  });

  observer.observe(document.querySelector('.bg-black'));
});
</script>

<style scoped>
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeInLeft {
  animation: fadeInLeft 1s ease-in-out;
}

.fadeInRight {
  animation: fadeInRight 1.5s ease-in-out;
}

.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}

.opacity-50 {
  opacity: 0.7;
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
