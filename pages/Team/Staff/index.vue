<template>
  <div>
    <Breadcrumb />
    <section class="py-12 px-4 lg:px-24">
      <TitleOne 
        title="Our Staff" 
        :description="text"
      />
      <div v-if="loading" class="flex justify-center items-center">
        <Loader />
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          v-for="person in staff"
          :key="person.id"
          class="hiddenCard person-card bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-700 hover:scale-105"
        >
          <nuxt-link :to="`/team/staff/${person.id}`">
            <img :data-src="'/team/staff' + person.image" alt="Staff Photo" class="lazy w-full h-auto object-cover rounded-lg mb-4 aspect-portrait">
            <h3 class="text-xl font-semibold text-blue">{{ person.name }} {{ person.surname }}</h3>
            <p class="text-blue">{{ person.role }}</p>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

useHead({
  title: 'Staff',
});
const { data: staff, error, loading } = await useFetch('/api/staff');

onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.dataset.index);
        for (let i = index; i < index + 3; i++) {
          if (i < document.querySelectorAll('.person-card').length) {
            document.querySelectorAll('.person-card')[i].classList.add('show');
            document.querySelectorAll('.person-card')[i].classList.remove('hiddenCard');
          }
        }
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0.1
  });

  setTimeout(() => {
    const hiddenElements = document.querySelectorAll('.person-card');
    hiddenElements.forEach((element, index) => {
      element.dataset.index = index;
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
  }, 80);
});

const text = "Meet our dedicated staff committed to supportingand advocating for women affected by violence. Our team is composed of experienced professionals who are passionate about making a difference. Each member brings a unique set of skills and expertise to provide comprehensive support and create a safe and empowering environment for all. We are here to help, listen, and guide you every step of the way."
</script>

<style scoped>
.hiddenCard {
  opacity: 0;
  transition: 0;
  filter: blur(5px);
}

@media (prefers-reduced-motion: no-preference) {
  .hiddenCard {
    transition: all 1s ease-in-out;
  }
}

.show {
  opacity: 1;
  filter: blur(0px);
}

.lazy {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.lazy-loaded {
  opacity: 1;
}

.rounded-lg {
  border-radius: 1.5rem;
}

.bg-white {
  background-color: #ffffff;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}


.aspect-portrait {
  aspect-ratio: 3 / 4;
}

@media (min-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
