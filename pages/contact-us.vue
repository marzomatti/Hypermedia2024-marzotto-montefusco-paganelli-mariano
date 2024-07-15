<template>
  <main>
    <div class="py-12 px-4 lg:px-24">

      <TitleOne 
        title="Contact Us" 
        :description="text"
      />

      <!-- Form + image -->
      <div class="hiddenItem md:flex mb-8 items-stretch justify-center">
        <div class="md:w-1/2 p-7 flex items-stretch">
          <img class="rounded-3xl w-full h-full object-cover" src="/assets/img/hero-image.avif" alt="Contact Image" />
        </div>
        <div class="md:w-1/2 p-7">
          <form @submit.prevent="submitForm" class="bg-white p-6 rounded-3xl shadow-lg h-full">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="form-group">
                <label for="name" class="block text-blue font-bold mb-2">Name</label>
                <input type="text" id="name" v-model="form.name" required class="w-full p-3 border rounded-3xl focus:border-primary-color focus:ring-primary-color" placeholder="Jane"/>
              </div>
              
              <div class="form-group">
                <label for="surname" class="block text-blue font-bold mb-2">Surname</label>
                <input type="text" id="surname" v-model="form.surname" required class="w-full p-3 border rounded-3xl focus:border-primary-color focus:ring-primary-color" placeholder="Doe" />
              </div>
            </div>
            <div class="form-group mt-4">
              <label for="email" class="block text-blue font-bold mb-2">Email</label>
              <input type="email" id="email" v-model="form.email" required class="w-full p-3 border rounded-3xl focus:border-primary-color focus:ring-primary-color" placeholder="exaple@mail.com" />
            </div>
            <div class="form-group mt-4">
              <label for="message" class="block text-blue font-bold mb-2">Message</label>
              <textarea id="message" v-model="form.message" required class="w-full p-3 border rounded-3xl h-32 resize-none focus:border-primary-color focus:ring-primary-color" placeholder="Write here your request..."></textarea>
            </div>
            <button type="submit" class="w-full inline-block mt-6 border-2 border-secondary-color text-secondary-color px-6 py-3 rounded-full hover:bg-secondary-color hover:text-white transition duration-300">Send</button>
          </form>
        </div>
      </div>
      <!-- Sezione Chatbot -->
      <div class="hiddenItem bg-orange-100 p-8 rounded-3xl shadow-lg text-center mb-9">
        <h3 class="text-2xl font-bold mb-4 text-blue">Are you a victim of domestic violence?</h3>
        <p class="text-lg text-blue mb-6">Contact our virtual assistant for legal advice and support. We are here to help you understand your options and take the necessary steps.</p>
        <NuxtLink to="/virtual-assistant" class="inline-block mt-6 border-2 border-secondary-color text-secondary-color px-6 py-3 rounded-full hover:bg-secondary-color hover:text-white transition duration-300">
          Chat with us
        </NuxtLink>
      </div>
      <!-- Cards di contatto e mappa -->
      <div class="hiddenItem md:flex mb-8 space-y-4 md:space-y-0 justify-center">
        <div class="md:w-1/2 flex flex-col space-y-4">
          <div class="bg-white p-4 rounded-3xl shadow-lg m-2 h-full flex flex-col justify-center">
            <h3 class="text-xl font-semibold mb-2 text-blue">Email us</h3>
            <p class="text-blue flex justify-center">no@alone.com</p>
          </div>
          <div class="bg-white p-4 rounded-3xl shadow-lg m-2 h-full flex flex-col justify-center">
            <h3 class="text-xl font-semibold mb-2 text-blue">Call us</h3>
            <p class="text-blue flex justify-center">+39 123 4567890</p>
          </div>
          <div class="bg-white p-4 rounded-3xl shadow-lg m-2 h-full flex flex-col justify-center">
            <h3 class="text-xl font-semibold mb-2 text-blue">Follow us</h3>
            <div class="flex justify-center space-x-4">
              <a href="https://it-it.facebook.com/" target="_blank">
                <img class="w-8 h-8 rounded-full hover:shadow-2xl" src="public/facebook.png" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img class="w-8 h-8 rounded-full hover:shadow-2xl" src="public/instagram.png" alt="Instagram" />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <img class="w-8 h-8 rounded-full hover:shadow-2xl" src="public/twitter.png" alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 p-4">
          <div class="bg-white p-4 rounded-3xl shadow-lg h-full">
            <h3 class="text-xl font-semibold mb-4 text-blue">Our location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.6390609265204!2d9.225940975760482!3d45.477074332580294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6f3883528e3%3A0x395935933a2f55dc!2sGiovanni%2C%20Via%20Giovanni%20Celoria%2C%203%2C%2020133%20Milano%20MI!5e0!3m2!1sen!2sit!4v1720198817410!5m2!1sen!2sit"
              width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script setup>
import { ref, onMounted } from 'vue';

useHead({
    title: "Contact Us",
    meta: [{
        name: 'description',
        content: "Learn about No Woman Alone, our mission to support women affected by violence, and the comprehensive services we offer, including legal assistance, counseling, and recovery programs. Join us in our efforts to empower women and create a safe, supportive environment."
    }]
})

const form = ref({
  name: '',
  surname: '',
  email: '',
  message: '',
});

const formSubmitted = ref(false);

const submitForm = () => {
  console.log('Form submitted:', form.value);
  alert('Message sent successfully!');
  
  // Resetta il form
  form.value = {
    name: '',
    surname: '',
    email: '',
    message: '',
  };
};

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.classList.remove('hiddenItem');
      }
    });
  }, {
    rootMargin: '-20% 0px -10% 0px'
  });

  const hiddenElements = document.querySelectorAll('.hiddenItem');
  hiddenElements.forEach(element => {
    observer.observe(element);
  });
});

const text = "We appreciate your interest in reaching out to us. To ensure a smooth and efficient communication process, we kindly request you to fill out the form below with your relevant information. This will help us better understand your needs and provide you with the most appropriate assistance. We are here to support you and provide the help you need."
</script>

<style scoped>
.hiddenItem {
  opacity: 0;
  transition: opacity 0.5s ease-in-out, filter 0.5s ease-in-out;
  filter: blur(5px);
}

.show {
  opacity: 1;
  filter: blur(0px);
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

input:focus,
textarea:focus {
  outline: none;
  border-color: #d32f2f;
  box-shadow: 0 0 0 3px rgba(255, 76, 76, 0.2);
}
</style>

