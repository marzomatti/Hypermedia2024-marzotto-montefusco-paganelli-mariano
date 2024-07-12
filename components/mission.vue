<template>
  <section class="bg-white py-12 px-12 hiddenItem">
    <h2 class="text-2xl font-semibold lg:text-[40px] mx-auto text-center mb-12 text-blue">Our Mission</h2>
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <!-- Mission Block -->
        <div class="flex flex-col items-center hiddenItem">
          <img data-src="/homepage/goal.png" alt="Mission Icon" class="lazy h-24 w-24 mb-4"/>
          <h3 class="text-2xl font-bold text-blue mb-2"><span class="text-blue">Why?</span></h3>
          <p>
            Many women face physical, emotional, and 
            psychological violence daily. Our goal is 
            to provide support, resources, and a safe 
            haven for women escaping abuse. Every woman 
            deserves a life free from fear and violence.</p>
        </div>
        <!-- Vision Block -->
        <div class="flex flex-col items-center hiddenItem">
          <img data-src="/homepage/helpline.png" alt="Vision Icon" class="lazy h-24 w-24 mb-4"/>
          <h3 class="text-2xl font-bold text-blue mb-2"><span class="text-blue">How?</span></h3>
          <p>
            We offer legal assistance, psychological 
            counseling, and recovery programs through 
            dedicated professionals and volunteers. We 
            also host workshops and awareness events to 
            educate and prevent violence against women.</p>
        </div>
        <!-- Values Block -->
        <div class="flex flex-col items-center hiddenItem">
          <img data-src="/homepage/ancestors.png" alt="Values Icon" class="lazy h-24 w-24 mb-4"/>
          <h3 class="text-2xl font-bold text-blue mb-2"><span class="text-blue">Who?</span></h3>
          <p>
            Our team includes counselors, legal experts, 
            and volunteers committed to supporting women. 
            We work with local organizations to create a 
            support system that empowers women and fosters 
            a safer environment for all.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';


onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.classList.remove('hiddenItem');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '-20% 0px -10% 0px'
  });

  const hiddenElements = document.querySelectorAll('.hiddenItem');
  hiddenElements.forEach(element => {
    observer.observe(element);
  });

  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        if (src) {
          img.src = src;
        }
        img.classList.add('lazy-loaded');
        imgObserver.unobserve(entry.target);
      }
    });
  });

  const imgs = document.querySelectorAll('.lazy');
  imgs.forEach(img => {
    imgObserver.observe(img);
  });
});
</script>

<style scoped>
.hiddenItem {
  opacity: 0;
  transition: opacity 0.5s ease-in-out, filter 0.5s ease-in-out, transform 0.5s ease-in-out;
  filter: blur(5px);
  transform: translateY(20px);
}

.show {
  opacity: 1;
  filter: blur(0px);
  transform: translateY(0);
}

.lazy {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.lazy-loaded {
  opacity: 1;
}
</style>

