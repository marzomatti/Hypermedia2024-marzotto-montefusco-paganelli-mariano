<template>
    <div>
      <h1>Contact us</h1>
      <ul class="contact-list">
        <li v-for="contact in contacts" :key="contact.id" class="contact-item">
          <b>{{ contact.center }}</b> / {{ contact.role }}<br>
          <span v-if="contact.name">{{ contact.name }}<br></span>
          {{ contact.street }}<br>
          {{ contact.phone }}<br>
          <a :href="'mailto:' + contact.email">{{ contact.email }}</a>
        </li>
      </ul>
      <hr class="separator" />
      <h2>Do you need help? Send us a message!</h2>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="surname">Surname</label>
          <input type="text" id="surname" v-model="form.surname" required />
        </div>
        <div class="form-group">
          <label for="address">Address</label>
          <input type="text" id="address" v-model="form.address" required />
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" id="subject" v-model="form.subject" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactList',
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
            email: 'luca.rossi@example.com'
          },
          {
            id: 2,
            center: 'Counseling and Support Services',
            role: 'Chief Psychologist',
            name: 'Maria Bianchi',
            street: 'Corso Vittorio Emanuele, 10',
            phone: '02-7654321',
            email: 'maria.bianchi@example.com'
          },
          {
            id: 3,
            center: 'Legal Assistance Department',
            role: 'Lead Legal Advisor',
            name: 'Giovanna Verdi',
          street: 'Piazza Garibaldi, 20',
          phone: '055-9876543',
          email: 'giovanni.verdi@example.com'
        },
        {
          id: 4,
          center: 'Outreach and Education',
          role: 'Program Coordinator',
          name: 'Anna Neri',
          street: 'Via Dante, 5',
          phone: '041-6543210',
          email: 'anna.neri@example.com'
        },
        {
          id: 5,
          center: 'Shelter Services',
          role: 'Shelter Manager',
          name: 'Paolo Russo',
          street: 'Viale dei Pini, 12',
          phone: '081-4567890',
          email: 'paolo.russo@example.com'
        }
        ],
        form: {
          name: '',
          surname: '',
          address: '',
          subject: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission
        // For example, you can send the form data to a server
        console.log('Form submitted:', this.form);
      }
    }
  };
  </script>
  
  <style scoped>
  h1 {
    margin-top: 20px;
    text-align: center;
    font-size: 32px;
    margin-bottom: 50px; /* Add margin-bottom to create space */
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
    max-width: 500px; /* Make the form a bit smaller */
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
  
