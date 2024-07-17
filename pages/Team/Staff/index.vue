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
          class="hiddenCard person-card bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-80 hover:scale-105"
        >
          <nuxt-link :to="`/team/staff/${person.id}`">
            <img :data-lazy="getImageLink(person.image)" alt="Staff Photo" class="lazy w-full h-auto object-cover rounded-lg mb-4 aspect-portrait">
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
  title: "Staff",
  meta: [
    {
      name: "description",
      content:
        "Meet the dedicated staff at No Woman Alone. Our team of experts in legal assistance, counseling, and recovery programs work tirelessly to support women affected by violence.",
    },
  ],
});


const { data: staff, error, loading } = await useFetch('/api/staff');

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Show the card
        entry.target.classList.add('show');
        entry.target.classList.remove('hiddenCard');
        
        // Load the image
        const img = entry.target.querySelector('img');
        if (img && img.dataset.lazy) {
          img.src = img.dataset.lazy;
          img.classList.add('lazy-loaded');
        }
      }
    });
  }, {
    rootMargin: '100px',
    threshold: 0.1,
  });

  document.querySelectorAll('.person-card').forEach(card => {
    observer.observe(card);
  });
});

const text = "Meet our dedicated staff committed to supporting and advocating for women affected by violence. Our team is composed of experienced professionals who are passionate about making a difference. Each member brings a unique set of skills and expertise to provide comprehensive support and create a safe and empowering environment for all. We are here to help, listen, and guide you every step of the way."

function getImageLink(imageUrl){
  const config = useRuntimeConfig()
  return `${config.public.supabaseImagesUrl}/team/staff${imageUrl}`
}
</script>

<style scoped>
.hiddenCard {
  opacity: 0;
  transition: opacity 0.3s ease-in-out, filter 0.3s ease-in-out;
  filter: blur(5px);
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
