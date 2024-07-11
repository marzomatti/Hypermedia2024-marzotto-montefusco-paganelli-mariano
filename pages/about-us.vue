<template>
  <main>
    <!-- Grande Immagine di Intestazione -->
    <div
      class="bg-no-repeat bg-top bg-cover w-full h-[45rem]"
      :style="'background-image: url(/stop.jpg)'"
    >
      <div
        class="flex flex-col justify-center items-center text-center px-4 lg:px-16 h-full bg-gray-600 bg-opacity-50"
      >
        <transition name="fade" mode="out-in">
          <h1 v-if="showFirstText" class="text-4xl text-white py-8 md:py-32 md:text-5xl">
            No Woman Alone: Empowering Women, Ending Violence
          </h1>
        </transition>
        <transition name="fade" mode="out-in">
          <div
            v-if="showFirstText" class="p-3 md:p-5 m-5 md:m-7 text-lg md:text-xl text-white bg-opacity-75 rounded-3xl"
          >
            At No Woman Alone, we are dedicated to providing a safe haven and
            comprehensive support for women affected by violence. Our mission is
            to empower women through compassionate care, advocacy, and education,
            helping them to rebuild their lives free from fear and abuse.
          </div>
        </transition>
      </div>
    </div>

    <!-- Sezione "Our Values" -->
    <transition name="fade" @after-enter="showValues = true">
      <div v-show="true" class="bg-white w-full px-4 lg:px-16 py-8">
        <h1
          class="text-4xl py-8 md:py-12 md:text-5xl font-bold text-center text-blue"
        >
          Our Values
        </h1>
        <div class="flex flex-wrap justify-around">
          <div
            v-for="(value, index) in values"
            :key="index"
            class="max-w-sm rounded-3xl overflow-hidden shadow-lg m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            :style="{ backgroundColor: value.color, visibility: isValueVisible(index) ? 'visible' : 'hidden' }"
          >
            <div class="px-6 py-8 rounded-3xl">
              <div class="font-bold text-2xl mb-4" :class="value.textColor">
                {{ value.title }}
              </div>
              <p class="text-base text-blue">
                {{ value.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Sezione "Our Expert Team" -->
    <transition name="fade" @after-enter="showTeam = true">
      <div v-show="true" class="bg-gray-200 w-full px-4 lg:px-16 py-8">
        <h1
          class="text-3xl py-8 md:py-12 md:text-5xl font-bold text-center text-blue"
        >
          Meet Our Expert Team
        </h1>
        <div class="flex flex-wrap justify-center gap-20 items-center py-12">
          <img
            v-for="(image, index) in teamImages"
            :key="index"
            class="rounded-3xl w-full max-w-lg object-cover"
            :src="image.src"
            :alt="image.alt"
            :style="{ visibility: isTeamImageVisible(index) ? 'visible' : 'hidden' }"
          />
        </div>
        <div
          class="text-blue flex flex-col text-xl text-center pb-10 md:pb-12 md:flex-row justify-center px-4 lg:px-16"
        >
          At No Woman Alone, our team consists of highly skilled and compassionate
          professionals dedicated to supporting women affected by violence. Our
          experts bring a wealth of experience in various fields, including
          psychology, social work, and advocacy. We work tirelessly to provide
          comprehensive care and guidance, helping women to heal and thrive. Our
          team is here to listen, support, and empower you every step of the way.
          Learn more about the individuals who make our mission possible and their
          unwavering commitment to creating a safer world for all women.
        </div>
        <div class="text-center">
          <nuxt-link
            to="/team"
            class="inline-block mt-6 border-2 border-secondary-color text-secondary-color px-6 py-3 rounded-full hover:bg-secondary-color hover:text-white transition duration-300"
          >
            Meet Our Staff &rarr;
          </nuxt-link>
        </div>
      </div>
    </transition>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';

useHead({
  title: "About Us - No Woman Alone",
  meta: [
    {
      name: "description",
      content:
        "Learn about our mission, values, and the dedicated team at No Woman Alone, a center committed to supporting women affected by violence.",
    },
  ],
});

const showTitle = ref(false);
const showFirstText = ref(false);
const showValues = ref(false);
const showTeam = ref(false);

const values = [
  {
    title: 'Compassion',
    description: 'Compassion is at the heart of everything we do. We believe in providing a supportive and understanding environment where women can feel safe and valued. Our team is dedicated to offering empathy and care to every individual we serve.',
    color: '#ffcccc',
    textColor: 'text-secondary-color'
  },
  {
    title: 'Empowerment',
    description: 'We are committed to empowering women by providing them with the tools and resources they need to regain control of their lives. Through education, support groups, and advocacy, we strive to help women build a future free from violence.',
    color: '#ffffe6',
    textColor: 'text-yellow'
  },
  {
    title: 'Change',
    description: 'Our goal is to bring about lasting change in our community. We work tirelessly to raise awareness, educate the public, and advocate for policies that protect women and prevent violence. Together, we can create a safer world for everyone.',
    color: '#ffe6cc',
    textColor: 'text-orange-200'
  }
];

const teamImages = [
  {
    src: '/about_2.jpg',
    alt: 'Team Image 1'
  },
  {
    src: '/about_3.jpg',
    alt: 'Team Image 2'
  }
];

const visibleValueIndices = ref([]);
const visibleTeamImageIndices = ref([]);

const isValueVisible = (index) => visibleValueIndices.value.includes(index);
const isTeamImageVisible = (index) => visibleTeamImageIndices.value.includes(index);

onMounted(() => {
  setTimeout(() => {
    showTitle.value = true;
  }, 500);
  setTimeout(() => {
    showFirstText.value = true;
  }, 300);
  values.forEach((_, index) => {
    setTimeout(() => {
      visibleValueIndices.value.push(index);
    }, index * 500); // Delay each card by 500ms
  });
  teamImages.forEach((_, index) => {
    setTimeout(() => {
      visibleTeamImageIndices.value.push(index);
    }, index * 500); // Delay each image by 500ms
  });
  setTimeout(() => {
    showValues.value = true;
  }, 600);
  setTimeout(() => {
    showTeam.value = true;
  }, 900);
});
</script>

<style scoped>
@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-enter-active {
  animation: fade 1s ease-out forwards;
}
</style>
