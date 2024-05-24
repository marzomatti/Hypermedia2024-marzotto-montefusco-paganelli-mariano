<template>
  <div class="bg-gray-50 min-h-screen py-12">
    <div class="container max-w-5xl mx-auto px-4">
      <h1 class="text-3xl font-extrabold text-center mb-8">Contact Us</h1>
      <div class="flex flex-col space-y-6">
        <!-- Horizontal layout for contact cards -->
        <ul class="flex justify-center space-x-6 mb-8">
          <li v-for="contact in contacts" :key="contact.id" class="flex-1">
            <ContactCard :contact="contact" class="h-full" />
          </li>
        </ul>
        <!-- Form below contact cards -->
        <div>
          <h2 class="text-2xl font-bold text-center mb-4">Do you need help? Send us a message!</h2>
          <form @submit.prevent="submitForm" class="contact-form bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
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
                <label for="address" class="block text-gray-700 font-bold mb-2">Address</label>
                <input type="text" id="address" v-model="form.address" required class="w-full p-3 border rounded" />
              </div>
              <div class="form-group">
                <label for="subject" class="block text-gray-700 font-bold mb-2">Subject</label>
                <input type="text" id="subject" v-model="form.subject" required class="w-full p-3 border rounded" />
              </div>
            </div>
            <div class="form-group mt-4">
              <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" v-model="form.message" required class="w-full p-3 border rounded h-32"></textarea>
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700 mt-4">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactCard from '@/components/ContactCard.vue';

export default {
  name: 'contact-us',
  components: {
    ContactCard,
  },
  data() {
    return {
      contacts: [
        {
          id: 1,
          center: 'Emergency Response Unit',
          role: 'Unit Director',
          name: 'Luca Rossi',
          street: 'Via Roma 1',
          phone: '06-1234567',
          email: 'luca.rossi@example.com',
        },
        {
          id: 2,
          center: 'Counseling and Support Services',
          role: 'Chief Psychologist',
          name: 'Maria Bianchi',
          street: 'Corso Vittorio Emanuele, 10',
          phone: '02-7654321',
          email: 'maria.bianchi@example.com',
        },
        {
          id: 3,
          center: 'Legal Assistance Department',
          role: 'Lead Legal Advisor',
          name: 'Giovanna Verdi',
          street: 'Piazza Garibaldi, 20',
          phone: '055-9876543',
          email: 'giovanni.verdi@example.com',
        },
      ],
      form: {
        name: '',
        surname: '',
        address: '',
        subject: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      // For example, you can send the form data to a server
      console.log('Form submitted:', this.form);
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 20px;
  text-align: center;
  font-size: 32px;
  margin-bottom: 50px;
}

.contact-list {
  list-style-type: none;
  padding: 0;
  margin-top: 20px; /* Optional additional margin to ensure spacing */
}

.contact-item {
  margin-bottom: 20px;
  text-align: left;
}

.contact-item b {
  font-size: 1.2em;
}

.separator {
  margin: 40px 0;
  border: none;
  border-top: 2px solid #ccc;
}

h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.contact-form {
  max-width: 768px; /* Increase form width */
  margin-left: auto;
  margin-right: auto;
  padding: 20px; /* Add padding inside the form */
  border: 1px solid #ccc; /* Add a border */
  background-color: #f9f9f9; /* Light background color */
  border-radius: 5px; /* Rounded corners */
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
}

textarea {
  resize: vertical;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
