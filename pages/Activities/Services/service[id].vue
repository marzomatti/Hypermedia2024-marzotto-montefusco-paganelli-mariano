<template>
  <Breadcrumb />

  <main class="py-12 px-4 lg:px-24 bg-white min-h-screen">
    <div class="flex flex-col lg:flex-row items-start justify-between mb-12">
      <!-- Sezione Sinistra: Dettagli del Servizio -->
      <div class="lg:w-2/3">
        <h1 class="text-5xl font-bold text-blue mb-4">{{ service.name }}</h1>
        <h2 class="text-2xl text-blue mb-2">Responsible Person: {{ service.responsible }}</h2>
        <p class="text-lg text-blue mb-6">{{ service.description }}</p>
      </div>
      <!-- Sezione Destra: Immagine del Servizio -->
      <div class="lg:w-1/3 lg:pl-8">
        <img :src="service.image" alt="Service Image" class="w-full h-auto rounded-3xl shadow-lg">
      </div>
    </div>

    <!-- Sezione Obiettivi -->
    <section class="bg-white py-12 px-12">
      <h2 class="text-2xl font-semibold lg:text-[40px] text-center mb-12 text-blue">Our Goals</h2>
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <!-- Blocco Obiettivo -->
          <div v-for="goal in goals" :key="goal.id" class="flex flex-col items-center">
            <img :src="goal.icon" alt="Goal Icon" class="h-24 w-24 mb-4" />
            <h3 class="text-2xl font-bold text-blue mb-2">{{ goal.title }}</h3>
            <p>{{ goal.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Frecce di Navigazione -->
    <div class="flex justify-between mt-12">
      <button v-if="hasPreviousService" @click="navigateTo(previousServiceId)" class="nav-button inline-block mt-6 border-2 border-secondary-color text-secondary-color px-6 py-3 rounded-full hover:bg-secondary-color hover:text-white transition duration-300">
        &larr; Previous Service
      </button>
      <div class="flex-1"></div>
      <button v-if="hasNextService" @click="navigateTo(nextServiceId)" class="nav-button inline-block mt-6 border-2 border-secondary-color text-secondary-color px-6 py-3 rounded-full hover:bg-secondary-color hover:text-white transition duration-300">
        Next Service &rarr;
      </button>
    </div>
  </main>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const service = ref({});
const goals = ref([]);

const supabase = useSupabaseClient();

const hasPreviousService = ref(false);
const hasNextService = ref(false);
const previousServiceId = ref(null);
const nextServiceId = ref(null);

onMounted(async () => {
  const { data: serviceData, error: serviceError } = await supabase
    .from('services')
    .select()
    .eq('id', route.params.id)
    .single();

  if (serviceError) {
    console.error(serviceError);
  } else {
    service.value = serviceData;
    checkNavigation(serviceData.id);
  }

  const { data: goalsData, error: goalsError } = await supabase
    .from('goals')
    .select()
    .eq('service_id', route.params.id);

  if (goalsError) {
    console.error(goalsError);
  } else {
    goals.value = goalsData;
  }
});

const checkNavigation = async (currentServiceId) => {
  const { data: services, error: servicesError } = await supabase
    .from('services')
    .select('id')
    .order('id', { ascending: true });

  if (servicesError) {
    console.error(servicesError);
  } else {
    const serviceIds = services.map(s => s.id);
    const currentIndex = serviceIds.indexOf(currentServiceId);

    hasPreviousService.value = currentIndex > 0;
    hasNextService.value = currentIndex < serviceIds.length - 1;

    if (hasPreviousService.value) {
      previousServiceId.value = serviceIds[currentIndex - 1];
    }
    if (hasNextService.value) {
      nextServiceId.value = serviceIds[currentIndex + 1];
    }
  }
};

const navigateTo = (id) => {
  if (id) {
    router.push(`/activities/services/service`+ `${id}`);
  }
};
</script>

<style scoped>
.bg-white {
  background-color: #ffffff;
}

.rounded-3xl {
  border-radius: 1.5rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.min-h-screen {
  min-height: 100vh;
}
</style>
