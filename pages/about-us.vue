<template>
  <main>
    <!-- Grande Immagine di Intestazione -->
    <div class="bg-no-repeat bg-top bg-cover w-full h-[45rem]" :style="'background-image: url(/stop.jpg)'">
      <div class="flex flex-col justify-center items-center text-center px-4 lg:px-16 h-full bg-black bg-opacity-50">
        <h1 class="text-4xl text-white py-8 md:py-32 md:text-5xl">
          No Woman Alone: Empowering Women, Ending Violence
        </h1>
        <div class="p-3 md:p-5 m-5 md:m-7 text-lg md:text-xl text-white bg-opacity-75 rounded-3xl">
          At No Woman Alone, we are dedicated to providing a safe haven and comprehensive support for women affected by violence. Our mission is to empower women through compassionate care, advocacy, and education, helping them to rebuild their lives free from fear and abuse.
        </div>
      </div>
    </div>

    <!-- Sezione "Our Values" -->
    <div class="bg-white w-full px-4 lg:px-16 py-12">
      <h1 class="text-4xl py-8 md:py-20 md:text-5xl font-bold text-center">Our Values</h1>
      <div class="flex flex-wrap justify-around">
        <div class="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div class="px-6 py-8 bg-red-100">
            <div class="font-bold text-2xl mb-4 text-red-600">Compassion</div>
            <p class="text-gray-700 text-base">
              Compassion is at the heart of everything we do. We believe in providing a supportive and understanding environment where women can feel safe and valued. Our team is dedicated to offering empathy and care to every individual we serve.
            </p>
          </div>
        </div>
        <div class="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div class="px-6 py-8 bg-green-100">
            <div class="font-bold text-2xl mb-4 text-green-600">Empowerment</div>
            <p class="text-gray-700 text-base">
              We are committed to empowering women by providing them with the tools and resources they need to regain control of their lives. Through education, support groups, and advocacy, we strive to help women build a future free from violence.
            </p>
          </div>
        </div>
        <div class="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div class="px-6 py-8 bg-blue-100">
            <div class="font-bold text-2xl mb-4 text-blue-600">Change</div>
            <p class="text-gray-700 text-base">
              Our goal is to bring about lasting change in our community. We work tirelessly to raise awareness, educate the public, and advocate for policies that protect women and prevent violence. Together, we can create a safer world for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Sezione "Our Expert Team" -->
    <div class="bg-gray-200 w-full px-4 lg:px-16 py-12">
      <div class="p-6 md:pt-20 md:px-60">
        <img class="rounded-3xl" src="/stop_violence.avif" alt="Team Image" />
      </div>
      <h1 class="text-3xl py-8 md:py-20 md:text-5xl font-bold text-center">Meet Our Expert Team</h1>
      <div class="flex flex-col text-xl text-center pb-10 md:pb-20 md:flex-row">
        Our dedicated team is here to support you. Learn more about the compassionate professionals who are committed to helping women rebuild their lives.
      </div>
      <div class="text-center">
        <nuxt-link to="/people" class="inline-block mt-6 border-2 border-red-400 text-red-400 px-6 py-3 rounded-full hover:bg-red-400 hover:text-white transition duration-300">
          Meet Our Staff &rarr;
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'About Us - No Woman Alone',
  meta: [
    {
      name: 'description',
      content: 'Learn about our mission, values, and the dedicated team at No Woman Alone, a center committed to supporting women affected by violence.'
    }
  ]
})
</script>

<style scoped>
.bg-white {
  background-color: #ffffff;
}

.bg-gray-200 {
  background-color: #edf2f7;
}

.text-gray-700 {
  color: #4a5568;
}

.rounded-3xl {
  border-radius: 1.5rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
