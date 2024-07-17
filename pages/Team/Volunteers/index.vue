<template>
  <div>
    <Breadcrumb/>
    <section class="py-12 px-4 lg:px-24">
      <TitleOne 
        title="Our Volunteers" 
        :description="text"
      />
      <div v-if="loading" class="flex justify-center items-center">
        <Loader />
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          v-for="person in volunteers"
          :key="person.id"
          class="hiddenCard person-card bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-80 hover:scale-105"
        >
          <nuxt-link :to="`/team/volunteers/${person.id}`">
            <img :data-lazy="getImageLink(person.image)" alt="Volunteer Photo" class="lazy w-full h-auto object-cover rounded-lg mb-4 aspect-portrait">
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
  title: "Volunteers",
  meta: [
    {
      name: "description",
      content:
        "Meet our dedicated volunteers at No Woman Alone. They tirelessly support women affected by violence, providing essential assistance and compassionate care.",
    },
  ],
});

const { data: volunteers, error, loading } = await useFetch('/api/volunteers');

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

function getImageLink(imageUrl){
  const config = useRuntimeConfig()
  return `${config.public.supabaseImagesUrl}/team/volunteers${imageUrl}`
}

const text ="Meet our dedicated volunteers who play a crucial role in supporting and advocating for women affected by violence. Our volunteers bring a diverse range of skills and a deep commitment to making a positive impact. They work tirelessly alongside our staff to provide comprehensive support and create a safe and empowering environment for all. We are grateful for their passion, dedication, and the invaluable contributions they make every day."
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

.text-gray-800 {
  color: #2d3748;
}

.text-gray-600 {
  color: #718096;
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
