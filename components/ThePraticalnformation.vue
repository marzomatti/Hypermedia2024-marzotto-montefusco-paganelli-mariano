<template>
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-extrabold mb-8 text-center">Practical Information</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Opening Hours -->
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-4">Opening Hours</h3>
            <ul class="text-gray-700">
              <li v-for="(hours, day) in openingHours" :key="day" class="flex justify-between mb-2">
                <span class="font-medium">{{ day }}</span>
                <span>{{ hours }}</span>
              </li>
            </ul>
          </div>
  
          <!-- Location / Map -->
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-4">Location</h3>
            <p class="text-gray-700 mb-4">{{ location.address }}</p>
            <iframe :src="location.mapUrl" class="w-full h-64 border-0 rounded-lg" allowfullscreen="true" loading="lazy"></iframe>
          </div>
  
          <!-- Units / Departments -->
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-4">Units / Departments</h3>
            <ul class="text-gray-700">
              <li v-for="unit in units" :key="unit.name" class="mb-2">
                <span class="font-medium">{{ unit.name }}</span>: {{ unit.description }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const openingHours = ref({
    "Monday": "9:00 AM - 5:00 PM",
    "Tuesday": "9:00 AM - 5:00 PM",
    "Wednesday": "9:00 AM - 5:00 PM",
    "Thursday": "9:00 AM - 5:00 PM",
    "Friday": "9:00 AM - 5:00 PM",
    "Saturday": "Closed",
    "Sunday": "Closed",
  })
  
  const location = ref({
    address: "123 Main Street, City, Country",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509455!2d144.963058!3d-37.813627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2z5Zu-5rOi55yM5rGf5piO5Lit5b-D!5e0!3m2!1sja!2sjp!4v1615160621756!5m2!1sja!2sjp"
  })
  
  const units = ref([
    { name: "Human Resources", description: "Handles recruitment, employee relations, and benefits." },
    { name: "Finance", description: "Manages company finances and budget." },
    { name: "IT", description: "Maintains the company's IT infrastructure and systems." },
    { name: "Marketing", description: "Responsible for market research and promotional campaigns." },
  ])
  </script>
  
  <style scoped>
  .container {
    @apply mx-auto px-4;
  }
  
  .title {
    @apply text-3xl font-extrabold text-center mb-8;
  }
  
  .info-block {
    @apply bg-white p-6 rounded-lg shadow-lg;
  }
  
  .info-title {
    @apply text-2xl font-bold mb-4;
  }
  
  .info-list {
    @apply text-gray-700;
  }
  
  .map-iframe {
    @apply w-full h-64 border-0 rounded-lg;
  }
  </style>
  