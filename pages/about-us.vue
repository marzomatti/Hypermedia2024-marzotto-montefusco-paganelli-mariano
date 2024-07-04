<template>
  <main>
    <!-- Grande Immagine di Intestazione -->
    <div class="bg-no-repeat bg-top bg-cover w-full h-[45rem]" :style="'background-image: url(/stop.jpg)'">
      <div class="flex flex-col justify-center items-center text-center px-4 lg:px-16 h-full bg-gray-600 bg-opacity-50">
        <h1 class="text-4xl text-white py-8 md:py-32 md:text-5xl">
          No Woman Alone: Empowering Women, Ending Violence
        </h1>
        <div class="p-3 md:p-5 m-5 md:m-7 text-lg md:text-xl text-white bg-opacity-75 rounded-3xl">
          At No Woman Alone, we are dedicated to providing a safe haven and comprehensive support for women affected by violence. Our mission is to empower women through compassionate care, advocacy, and education, helping them to rebuild their lives free from fear and abuse.
        </div>
      </div>
    </div>

    <!-- Sezione "Our Values" -->
    <div class="bg-white w-full px-4 lg:px-16 py-8">
      <h1 class="text-4xl py-8 md:py-12 md:text-5xl font-bold text-center">Our Values</h1>
      <div class="flex flex-wrap justify-around">
        <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl" style="background-color: #ffcccc;">
          <div class="px-6 py-8 rounded-3xl">
            <div class="font-bold text-2xl mb-4 text-red-600">Compassion</div>
            <p class="text-gray-700 text-base">
              Compassion is at the heart of everything we do. We believe in providing a supportive and understanding environment where women can feel safe and valued. Our team is dedicated to offering empathy and care to every individual we serve.
            </p>
          </div>
        </div>
        <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl" style="background-color: #e6ccff;">
          <div class="px-6 py-8 rounded-3xl">
            <div class="font-bold text-2xl mb-4 text-purple-600">Empowerment</div>
            <p class="text-gray-700 text-base">
              We are committed to empowering women by providing them with the tools and resources they need to regain control of their lives. Through education, support groups, and advocacy, we strive to help women build a future free from violence.
            </p>
          </div>
        </div>
        <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl" style="background-color: #ffe6cc;">
          <div class="px-6 py-8 rounded-3xl">
            <div class="font-bold text-2xl mb-4 text-orange-600">Change</div>
            <p class="text-gray-700 text-base">
              Our goal is to bring about lasting change in our community. We work tirelessly to raise awareness, educate the public, and advocate for policies that protect women and prevent violence. Together, we can create a safer world for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Sezione "Testimonials" -->
    <div class="bg-gray-100 w-full px-4 lg:px-16 py-8">
      <h1 class="text-4xl py-8 md:py-12 md:text-5xl font-bold text-center">Testimonials</h1>
      <div class="flex flex-wrap justify-around">
        <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg m-4 bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div class="px-6 py-8 bg-white rounded-3xl">
            <div class="font-bold text-2xl mb-4 text-gray-800">Sara, 21 years</div>
            <img src="assets/img/testimonial_2.jpg" alt="Sara" class="w-full h-48 object-cover rounded-3xl mb-4">
            <p class="text-gray-700 text-base">
              "No Woman Alone has changed my life. Their support and care helped me regain my confidence and rebuild my life. I am forever grateful for their help."
            </p>
          </div>
        </div>
        <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg m-4 bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div class="px-6 py-8 bg-white rounded-3xl">
            <div class="font-bold text-2xl mb-4 text-gray-800">Anna, 29 years</div>
            <img src="assets/img/testimonial_1.jpg" alt="Anna" class="w-full h-48 object-cover rounded-3xl mb-4">
            <p class="text-gray-700 text-base">
              "The counselors at No Woman Alone provided me with the emotional support I needed to move forward. Their programs and resources are invaluable."
            </p>
          </div>
        </div>
        <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg m-4 bg-white transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div class="px-6 py-8 bg-white rounded-3xl">
            <div class="font-bold text-2xl mb-4 text-gray-800">Maria, 35 years</div>
            <img src="assets/img/testimonial_3.jpg" alt="Maria" class="w-full h-48 object-cover rounded-3xl mb-4">
            <p class="text-gray-700 text-base">
              "Thanks to No Woman Alone, I have found a new sense of purpose and direction. Their dedication to helping women like me is truly inspiring."
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Sezione "Our Expert Team" -->
    <div class="bg-gray-200 w-full px-4 lg:px-16 py-8">
      <div class="flex flex-wrap justify-center gap-20 items-center py-12">
        <img class="rounded-3xl w-full max-w-lg object-cover" src="/assets/img/about_2.jpg" alt="Team Image 1" />
        <img class="rounded-3xl w-full max-w-lg object-cover" src="/assets/img/about_3.jpg" alt="Team Image 2" />
      </div>
      <h1 class="text-3xl py-8 md:py-12 md:text-5xl font-bold text-center">Meet Our Expert Team</h1>
      <div class="flex flex-col text-xl text-center pb-10 md:pb-12 md:flex-row justify-center px-4 lg:px-16">
        At No Woman Alone, our team consists of highly skilled and compassionate professionals dedicated to supporting women affected by violence. Our experts bring a wealth of experience in various fields, including psychology, social work, and advocacy. We work tirelessly to provide comprehensive care and guidance, helping women to heal and thrive. Our team is here to listen, support, and empower you every step of the way. Learn more about the individuals who make our mission possible and their unwavering commitment to creating a safer world for all women.
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

.bg-gray-100 {
  background-color: #f7fafc;
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
