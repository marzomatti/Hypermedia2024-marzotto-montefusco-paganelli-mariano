<template>
  <section class="bg-white py-2">
    <div class="container mx-auto">
      <!-- Titolo e Descrizione -->
      <div class="text-center mb-6">
        <h1 class="text-4xl font-extrabold text-blue mb-4">Our Services</h1>
        <p class="text-lg text-blue mb-4">We offer comprehensive support, including legal assistance, counseling, and recovery programs. Let our expert team help you find safety and empowerment. Discover how we can assist you on your journey with personalized services tailored to your needs. Our goal is to provide a safe and supportive environment where you can heal and thrive.</p>
        <Button :text="'See our services &rarr;'" :link="'/activities/services'"/>
      </div>
      <!-- Lista di Servizi -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div v-if="loading" class="col-span-full">Loading...</div>
        <div v-else-if="error" class="col-span-full">{{ error }}</div>
        <div v-else v-for="service in services" :key="service.id" class="bg-white p-6 rounded-3xl shadow-lg transition duration-500 hover:shadow-xl hover:scale-105 flex flex-col items-center cursor-pointer" @click="navigateToService(service.id)">
          <img :src="'/services' + service.logo" alt="Service Icon" class="w-24 h-24 mb-4"/>
          <h3 class="text-2xl font-semibold text-blue mb-2">{{ service.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: services, error, loading } = await useFetch('/api/services');

const router = useRouter();

function navigateToService(id) {
  router.push(`/activities/services/${id}`);
}
</script>

<style scoped>
.bg-white {
  background-color: #ffffff;
}



.rounded-3xl {
  border-radius: 1.5rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.transition {
  transition: all 0.3s ease;
}

.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

.text-center {
  text-align: center;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
