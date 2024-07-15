<template>
  <section class="bg-secondary-color py-6 px-12 hiddenItem">
    <div class="container mx-auto text-center">
      <TitleColor
      title="Our Activities"
    />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <!-- Services Block -->
        <NuxtLink to="/Activities/Services" class="rounded-3xl flex items-center hiddenItem">
          <div class="bg-white p-6 rounded-3xl shadow-lg transition duration-500 hover:shadow-xl hover:scale-105">
            <img data-src="/services_preview.jpg" alt="Services Image" class="lazy w-full h-64 object-cover mb-4 rounded-3xl"/>
            <h3 class="text-4xl font-bold text-blue mb-2">Services</h3>
            <p class="text-blue">
              Offering counseling, legal help, and recovery programs to support and empower women.
            </p>
          </div>
        </NuxtLink>
        
        <!-- Projects Block -->
        <NuxtLink to="/Activities/Projects" class="rounded-3xl flex items-center hiddenItem">
          <div class="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition duration-500 hover:scale-105">
            <img data-src="/projects_preview.jpg" alt="Projects Image" class="lazy w-full h-64 object-cover mb-4 rounded-3xl"/>
            <h3 class="text-4xl font-bold font-sans no-italic text-blue mb-2">Projects</h3>
            <p class="text-blue">
              Raising awareness and actively advocating for women's rights through community projects.
            </p>
          </div>
        </NuxtLink>
      </div>
      <NuxtLink to="/activities" class="inline-block border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-secondary-color transition duration-300">
        See all activities
      </NuxtLink>
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
