<template>
  <div>
    <Breadcrumb />
    <section class="py-12 px-4 lg:px-24">
      <h1 class="text-4xl text-blue font-bold text-center mb-8">Our Staff</h1>
      <p class="text-lg text-blue text-center mb-12">
        Meet our dedicated staff committed to supporting and advocating for women affected by violence. Our team is composed of experienced professionals who are passionate about making a difference. Each member brings a unique set of skills and expertise to provide comprehensive support and create a safe and empowering environment for all. We are here to help, listen, and guide you every step of the way.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <nuxt-link
          v-for="(person, index) in staff"
          :key="person.id"
          :to="`/team/staff/${person.id}`"
          class="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-700 hover:scale-105 animate-fadeIn"
          :style="{ visibility: isVisible(index) ? 'visible' : 'hidden' }"
        >
          <img :src="'/team/staff' + person.image" alt="Staff Photo" class="w-full h-auto object-cover rounded-lg mb-4 aspect-portrait">
          <h3 class="text-xl font-semibold text-blue">{{ person.name }} {{ person.surname }}</h3>
          <p class="text-blue">{{ person.role }}</p>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

useHead({
  title: 'Staff',
})
const { data: staff, error, loading } = await useFetch('/api/staff');

const visibleIndices = ref([]);

const isVisible = (index) => visibleIndices.value.includes(index);

onMounted(() => {
  staff.value.forEach((_, index) => {
    setTimeout(() => {
      visibleIndices.value.push(index);
    }, index * 500); // Delay each card by 500ms
  });
});
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
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
