<template>
  <section class="bg-white py-12 px-12 hiddenItem">
    <div class="container mx-auto flex flex-col md:flex-row items-center">
      <div class="w-full md:w-1/2 text-left md:pr-8 mb-8 md:mb-0 hiddenItem">
        <h2 class="font-sans font-extrabold no-italic text-[40px] md:text-[56px] md:leading-[66px] text-blue mb-4">Our team</h2>
        <p class="text-lg mb-6 text-blue">
          Our dedicated team of professionals, including both staff and volunteers, is here to support and guide you. <span class="text-secondary-color">Break the silence</span> and reach out to us for help. We understand that every individual's situation is unique, and we are committed to providing personalized support to meet your specific needs. Our experienced counselors, legal advisors, and advocates are dedicated to helping you navigate through difficult times with compassionate care. Don't hesitate to reach out and let us help you on your journey to healing and empowerment.
        </p>
        <Button text="Meet our team" link="/team"></Button>
      </div>
      <div class="w-full md:w-1/2 flex justify-center hiddenItem">
        <div class="border border-gray-300 rounded-3xl overflow-hidden shadow-lg">
          <img :data-src="getImageLink('/homepage/homepage_2.jpg')" alt="Our team" class="lazy object-cover w-full h-auto"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

function getImageLink(imageUrl){
  const config = useRuntimeConfig()
  return `${config.public.supabaseImagesUrl}${imageUrl}`
}

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
