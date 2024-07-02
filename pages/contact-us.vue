<template>
  <main>
    <div class="container mx-auto px-12 py-12">
      <h1 class="text-4xl font-extrabold text-center text-gray-800 mb-8">Contact Us</h1>
      <!-- Titolo con immagine -->
      <div class="flex flex-col items-center mb-8">
        <img src="/stop_violence.avif" alt="Contact Us Image" class="w-full h-64 object-cover rounded-lg shadow-md mb-6">
        <p class="text-center text-lg text-gray-700 max-w-3xl">
          We appreciate your interest in reaching out to us. To ensure a smooth and efficient communication process, we kindly request you to fill out the form below with your relevant information. This will help us better understand your needs and provide you with the most appropriate assistance. We are here to support you and provide the help you need.
        </p>
      </div>
      <!-- Form + immagine -->
      <div class="md:flex mb-8">
        <div class="md:w-1/2 p-7">
          <img class="rounded-3xl w-full" src="/public/stop_violence.avif" alt="Contact Image" />
        </div>
        <div class="md:w-1/2 p-7">
          <form @submit.prevent="submitForm" class="bg-white p-6 rounded-lg shadow-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="form-group">
                <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" v-model="form.name" required class="w-full p-3 border rounded" />
              </div>
              <div class="form-group">
                <label for="surname" class="block text-gray-700 font-bold mb-2">Surname</label>
                <input type="text" id="surname" v-model="form.surname" required class="w-full p-3 border rounded" />
              </div>
              <div class="form-group">
                <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" v-model="form.email" required class="w-full p-3 border rounded" />
              </div>
              <div class="form-group">
                <label for="company" class="block text-gray-700 font-bold mb-2">Company</label>
                <input type="text" id="company" v-model="form.company" required class="w-full p-3 border rounded" />
              </div>
            </div>
            <div class="form-group mt-4">
              <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" v-model="form.message" required class="w-full p-3 border rounded h-32"></textarea>
            </div>
            <button type="submit" class="w-full bg-red-500 text-white p-3 rounded hover:bg-red-700 mt-4">Send</button>
          </form>
        </div>
      </div>
      <!-- Cards di contatto -->
      <div class="md:flex md:justify-around mb-8">
        <div class="bg-white p-6 rounded-lg shadow-lg m-4 transform transition duration-500 hover:scale-105">
          <h3 class="text-xl font-semibold mb-2">Email us</h3>
          <p class="text-gray-700">nowoman@alone.com</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg m-4 transform transition duration-500 hover:scale-105">
          <h3 class="text-xl font-semibold mb-2">Call us</h3>
          <p class="text-gray-700">+12 123 456 789</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg m-4 transform transition duration-500 hover:scale-105">
          <h3 class="text-xl font-semibold mb-2">Our location</h3>
          <p class="text-gray-700 mb-2">Via Larga 12, Milan Italy</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.3835724117585!2d9.191949900000001!3d45.462076599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a8d6c8a797%3A0x853071d1537e8bc0!2sVia%20Larga%2C%2012%2C%2020122%20Milano%20MI!5e0!3m2!1sit!2sit!4v1685293835994!5m2!1sit!2sit"
            width="100%" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
      <!-- Sezione Social -->
      <div class="bg-white p-6 rounded-lg shadow-lg m-4 text-center">
        <h3 class="font-bold text-3xl text-primary-color p-2">Follow us</h3>
        <div class="flex justify-center space-x-4">
          <a href="https://it-it.facebook.com/" target="_blank">
            <img class="w-12 h-12 rounded-full hover:shadow-2xl" src="/stop_violence.avif" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img class="w-12 h-12 rounded-full hover:shadow-2xl" src="/stop_violence.avif" alt="Instagram" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <img class="w-12 h-12 rounded-full hover:shadow-2xl" src="/stop_violence.avif" alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <img class="w-12 h-12 rounded-full hover:shadow-2xl" src="/stop_violence.avif" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Contact Us',
})

import { ref } from 'vue';

const form = ref({
  name: '',
  surname: '',
  email: '',
  company: '',
  message: '',
});

const submitForm = () => {
  console.log('Form submitted:', form.value);
};
</script>

<style scoped>
.bg-primary-color {
  background-color: #ff4c4c;
}

.text-primary-color {
  color: #ff4c4c;
}

button:hover {
  background-color: #d32f2f;
}
</style>
