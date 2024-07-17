<template>
  <div>
    <Breadcrumb
      v-if="currService"
      :is-customized="true"
      :label="currService.name"
    />
    <main class="pt-12 px-4 lg:px-24 bg-white min-h-screen">
      <div
        class="flex flex-col lg:flex-row items-start justify-between"
        v-if="currService"
      >
        <!-- Left Section: Service Details -->
        <div class="lg:w-2/3 flex flex-col justify-center">
          <h1 class="text-5xl font-bold text-blue mb-2 mt-4">
            {{ currService.name }}
          </h1>
          <h2 class="text-2xl text-blue my-2 mr-2 font-bold">
            Responsible of the service:
            <NuxtLink
              :to="`/team/staff/${currService.responsible_person.id}`"
              class="hover:text-secondary-color active:font-bold hover:transform hover:scale-105 hover:font-bold transition duration-200"
            >
              {{ currService.responsible_person.name }}
              {{ currService.responsible_person.surname }}
            </NuxtLink>
          </h2>
          <p class="text-lg text-blue mb-6 mt-2">
            {{ currService.description }}
          </p>
          <div class="hidden xl:block">
            <h2 class="text-4xl font-bold text-blue mb-4 mt-10">
              What We Aim to Achieve
            </h2>
            <ul class="list-none text-lg text-blue ml-4">
              <li class="mb-2 flex items-start" v-if="currService.goal1">
                <img
                  :src="getImageLink('/service_list_icon.png')"
                  alt="Goal Icon"
                  class="h-8 w-8 mr-2"
                />
                <span>{{ currService.goal1 }}</span>
              </li>
              <li class="mb-2 flex items-start" v-if="currService.goal2">
                <img
                  :src="getImageLink('/service_list_icon.png')"
                  alt="Goal Icon"
                  class="h-8 w-8 mr-2"
                />
                <span>{{ currService.goal2 }}</span>
              </li>
              <li class="mb-2 flex items-start" v-if="currService.goal3">
                <img
                  :src="getImageLink('/service_list_icon.png')"
                  alt="Goal Icon"
                  class="h-8 w-8 mr-2"
                />
                <span>{{ currService.goal3 }}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- Right Service: Service Picture -->
        <div class="lg:w-1/2 lg:pl-8 flex items-center">
          <div
            class="relative w-full pb-[133%] rounded-3xl shadow-lg overflow-hidden"
          >
            <img
              v-if="currService.image"
              :src="getImageLink('/services' + currService.image)"
              alt="Service Image"
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div class="xl:hidden block">
        <h2 class="text-4xl font-bold text-blue mb-4 mt-10">
          What We Aim to Achieve
        </h2>
        <ul class="list-none text-lg text-blue ml-4">
          <li class="mb-2 flex items-start" v-if="currService.goal1">
            <img
              :src="getImageLink('/service_list_icon.png')"
              alt="Goal Icon"
              class="h-8 w-8 mr-2"
            />
            <span>{{ currService.goal1 }}</span>
          </li>
          <li class="mb-2 flex items-start" v-if="currService.goal2">
            <img
              :src="getImageLink('/service_list_icon.png')"
              alt="Goal Icon"
              class="h-8 w-8 mr-2"
            />
            <span>{{ currService.goal2 }}</span>
          </li>
          <li class="mb-2 flex items-start" v-if="currService.goal3">
            <img
              :src="getImageLink('/service_list_icon.png')"
              alt="Goal Icon"
              class="h-8 w-8 mr-2"
            />
            <span>{{ currService.goal3 }}</span>
          </li>
        </ul>
      </div>

      <!-- Form + image -->
      <div class="md:flex items-stretch justify-center">
        <div class="md:w-1/2 p-7 flex items-stretch">
          <img
            class="rounded-3xl w-full h-full object-cover"
            :src="getImageLink('/singleservice_fiximage.jpg')"
            alt="Service Image"
          />
        </div>
        <div class="md:w-1/2 p-7">
          <form
            @submit.prevent="submitForm"
            class="bg-white p-6 rounded-3xl shadow-lg h-full"
          >
            <div class="grid grid-cols-1 gap-4">
              <div class="form-group">
                <label for="name" class="block text-blue font-bold mb-2"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full p-3 border rounded-3xl focus:border-primary-color focus:ring-primary-color"
                  placeholder="Jane"
                />
              </div>

              <div class="form-group">
                <label for="surname" class="block text-blue font-bold mb-2"
                  >Surname</label
                >
                <input
                  type="text"
                  id="surname"
                  v-model="form.surname"
                  required
                  class="w-full p-3 border rounded-3xl focus:border-primary-color focus:ring-primary-color"
                  placeholder="Doe"
                />
              </div>

              <div class="form-group">
                <label for="email" class="block text-blue font-bold mb-2"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full p-3 border rounded-3xl focus:border-primary-color focus:ring-primary-color"
                  placeholder="example@mail.com"
                />
              </div>
            </div>

            <div class="form-group relative mt-4">
              <label for="service" class="block text-blue font-bold mb-2"
                >Service</label
              >
              <select
                id="service"
                v-model="form.service"
                required
                class="w-full p-3 border rounded-3xl focus:border-primary-color focus:ring-primary-color"
              >
                <option value="" disabled selected>Select service</option>
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
                  class="w-4 h-4 text-blue mt-7 mx-2"
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

            <div class="form-group mt-4">
              <label for="message" class="block text-blue font-bold mb-2"
                >Message</label
              >
              <textarea
                id="message"
                v-model="form.message"
                required
                class="w-full p-3 border rounded-3xl h-32 resize-none focus:border-primary-color focus:ring-primary-color"
                placeholder="Explain here your request..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full inline-block mt-6 border-2 border-secondary-color text-secondary-color px-6 py-3 rounded-full hover:bg-secondary-color hover:text-white transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </main>

    <!-- Section "Testimonials" -->
    <div class="w-full px-4 lg:px-16 py-8">
      <h1
        class="text-4xl py-6 md:py-12 md:text-5xl font-bold text-center text-blue"
      >
        Testimonials
      </h1>
      <div class="flex flex-wrap justify-around">
        <TestimonialCard
          v-for="testimonial in serviceTestimonials"
          :key="testimonial.id"
          :name="testimonial.name"
          :age="testimonial.age"
          :photoSrc="'/services/testimonials' + testimonial.photo_link"
          :citation="testimonial.citation"
        />
      </div>
    </div>

    <!-- Navigation Arrows -->
    <div
      class="pb-12 px-4 lg:px-24 bg-white flex justify-between"
      v-if="currService"
    >
      <Button
        v-if="currService.previousService > 0"
        :link="getServiceLink(currService.previousService)"
        text="&larr; Previous Service"
      />
      <div class="flex-1"></div>
      <Button
        v-if="currService.nextService > 0"
        :link="getServiceLink(currService.nextService)"
        text="Next Service &rarr;"
      />
    </div>
  </div>
</template>
zw
<script setup>
import { ref, computed } from "vue";
const route = useRoute();

const { data: services, error, pending } = await useFetch("/api/services");

const currService = computed(() => {
  if (Array.isArray(services.value)) {
    const filteredServices = services.value.filter(
      (p) => p.id == route.params.id
    );
    return filteredServices.length > 0 ? filteredServices[0] : null;
  }
  return null;
});

const serviceName = computed(() => {
  return currService.value ? currService.value.name : "";
});

useHead({
  title: serviceName,
  meta: [
    {
      name: "description",
      content:
        "Discover" +
        serviceName +
        "at No Woman Alone. We offer vital support, including legal assistance, counseling, and recovery programs, to help women affected by violence.",
    },
  ],
});

function getImageLink(imageUrl) {
  const config = useRuntimeConfig();
  return `${config.public.supabaseImagesUrl}${imageUrl}`;
}

const form = ref({
  name: "",
  surname: "",
  email: "",
  service: "",
  message: "",
});

const formSubmitted = ref(false);

const submitForm = () => {
  console.log("Form submitted:", form.value);
  alert("Message sent successfully!");

  // Reset the form
  form.value = {
    name: "",
    surname: "",
    email: "",
    service: "",
    message: "",
  };
};

function getServiceLink(id) {
  return `/activities/services/` + `${id}`;
}

const { data: testimonials, error1, pending1 } = useFetch("/api/testimonials");

const serviceTestimonials = computed(() => {
  if (Array.isArray(testimonials.value)) {
    const serviceTestimonials = testimonials.value.filter(
      (p) =>
        p.id == route.params.id * 3 ||
        p.id == route.params.id * 3 - 1 ||
        p.id == route.params.id * 3 - 2
    );
    return serviceTestimonials.length > 0 ? serviceTestimonials : [];
  }
  return [];
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

button:hover {
  background-color: #d32f2f;
}

textarea {
  resize: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
