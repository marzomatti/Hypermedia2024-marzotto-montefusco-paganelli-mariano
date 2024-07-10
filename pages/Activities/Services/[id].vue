<template>
  <div>
    <Breadcrumb :is-customized="true" :label="currService.name" />
    <main class="py-12 px-4 lg:px-24 bg-white min-h-screen">
      <div class="flex flex-col lg:flex-row items-start justify-between mb-12">
        <!-- Sezione Sinistra: Dettagli del Servizio -->
        <div class="lg:w-2/3 flex flex-col justify-center">
          <h1 class="text-5xl font-bold text-blue mb-4">
            {{ currService.name }}
          </h1>
          <h2 class="text-2xl text-blue mb-2">
            Responsible Person: {{ currService.responsible }}
          </h2>
          <p class="text-lg text-blue mb-6">{{ currService.description }}</p>

          <!-- Testo -->
          <div class="flex items-center mb-4">
            <p class="text-blue font-bold text-xl mr-2">
              Send here your request:
            </p>
          </div>

          <!-- Nuovo Form -->
          <form
            @submit.prevent="submitForm"
            class="bg-white p-6 rounded-3xl shadow-lg w-120 mx-auto"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="form-group">
                <label for="name" class="block text-blue font-bold mb-1 text-sm"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full p-2 border rounded-3xl focus:border-primary-color focus:ring-primary-color text-sm"
                />
              </div>
              <div class="form-group">
                <label
                  for="surname"
                  class="block text-blue font-bold mb-1 text-sm"
                  >Surname</label
                >
                <input
                  type="text"
                  id="surname"
                  v-model="form.surname"
                  required
                  class="w-full p-2 border rounded-3xl focus:border-primary-color focus:ring-primary-color text-sm"
                />
              </div>
              <div class="form-group col-span-2">
                <label
                  for="email"
                  class="block text-blue font-bold mb-1 text-sm"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full p-2 border rounded-3xl focus:border-primary-color focus:ring-primary-color text-sm"
                />
              </div>
            </div>
            <div class="form-group relative mt-2">
              <label
                for="service"
                class="block text-blue font-bold mb-1 text-sm"
                >Service</label
              >
              <select
                id="service"
                v-model="form.service"
                required
                class="w-full p-2 border rounded-3xl focus:border-primary-color focus:ring-primary-color text-sm"
              >
                <option
                  v-for="service in services"
                  :key="service.id"
                  :value="service.name"
                >
                  {{ service.name }}
                </option>
                <option value="Other">Other</option>
              </select>
              <div
                class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="form-group mt-2">
              <label
                for="message"
                class="block text-blue font-bold mb-1 text-sm"
                >Message</label
              >
              <textarea
                id="message"
                v-model="form.message"
                required
                class="w-full p-2 border rounded-3xl h-20 resize-none focus:border-primary-color focus:ring-primary-color text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full inline-block mt-4 border-2 border-secondary-color text-secondary-color px-3 py-1 rounded-full hover:bg-secondary-color hover:text-white transition duration-300 text-sm"
            >
              Send your request
            </button>
          </form>
        </div>
        <!-- Sezione Destra: Immagine del Servizio -->
        <div class="lg:w-1/2 lg:pl-8 flex items-center">
          <div
            class="relative w-full pb-[133%] rounded-3xl shadow-lg overflow-hidden"
          >
            <img
            alt="Service Image"
            :src="'../../assets/img/services' + currService.image"
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
    <!-- Sezione "Testimonials" -->
    <div class="w-full px-4 lg:px-16 py-8">
      <h1
        class="text-4xl py-8 md:py-12 md:text-5xl font-bold text-center text-blue"
      >
        Testimonials
      </h1>
      <div class="flex flex-wrap justify-around">
        <div v-for="testimonial in serviceTestimonials" :key="testimonial.id"
          class="max-w-sm rounded-3xl overflow-hidden shadow-lg m-4 bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div class="px-4 py-8 bg-white rounded-3xl">
            <div class="font-bold text-2xl mb-4 text-blue">{{ testimonial.name }}, {{ testimonial.age }} years</div>
            <img
              :src="'../../assets/img/services/testimonials' + testimonial.photo_link"
              :alt="' Photo of testimonnial ' + testimonial.name + ', ' + testimonial.age + ' years old'"
              class="w-full h-48 object-cover rounded-3xl mb-4"
            />
            <p class="text-blue text-base">
              "{{ testimonial.citation }}"
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Frecce di Navigazione -->
    <div class="pb-12 px-4 lg:px-24 bg-white flex justify-between">
      <NuxtLink
        v-if="currService.previousService > 0"
        :to="getServiceLink(currService.previousService)"
        class="nav-button inline-block mt-6 border-2 border-secondary-color text-secondary-color px-6 py-3 rounded-full hover:bg-secondary-color hover:text-white transition duration-300"
      >
        &larr; Previous Project
      </NuxtLink>
      <div class="flex-1"></div>
      <NuxtLink
        v-if="currService.nextService > 0"
        :to="getServiceLink(currService.nextService)"
        class="nav-button inline-block mt-6 border-2 border-secondary-color text-secondary-color px-6 py-3 rounded-full hover:bg-secondary-color hover:text-white transition duration-300"
      >
        Next Project &rarr;
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  name: "",
  surname: "",
  email: "",
  service: "",
  message: "",
});
const { data: services, error, loading } = await useFetch("/api/services");

const route = useRoute();

const currService = computed(() => {
  if (Array.isArray(services.value)) {
    const filteredServices = services.value.filter(
      (p) => p.id == route.params.id
    );
    return filteredServices.length > 0 ? filteredServices[0] : null;
  }
  return null;
});

const router = useRouter();

function getServiceLink(id) {
  return `/activities/services/` + `${id}`;
}

const {
  data: testimonials,
  error1,
  loading1,
} = await useFetch("/api/testimonials");

const serviceTestimonials = computed(() => {
  if (Array.isArray(testimonials.value)) {
    const serviceTestimonials = testimonials.value.filter(
      (p) => (p.id == route.params.id*3 || p.id == route.params.id*3-1 || p.id == route.params.id*3-2)
    );
    return serviceTestimonials.length > 0 ? serviceTestimonials : null;
  }
  return null;
});
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

.min-h-screen {
  min-height: 100vh;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #d32f2f;
  box-shadow: 0 0 0 3px rgba(255, 76, 76, 0.2);
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

select::-ms-expand {
  display: none;
}

.bg-primary-color {
  background-color: #d32f2f;
}

button:hover {
  background-color: #d32f2f;
}

textarea {
  resize: none;
}
</style>
