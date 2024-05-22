<template>
    <div class="bg-gray-50 min-h-screen py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-extrabold mb-8 text-center">Our People</h1>
        <p class="text-center text-gray-700 mb-12">Meet the dedicated professionals and volunteers who make our work possible.</p>
        
        <div class="space-y-8">
          <TeamSection 
            title="Psychologists" 
            description="Our team of psychologists are experienced professionals who provide support and counseling services. They work tirelessly to ensure the mental well-being of our clients through individualized care and group therapy sessions."
            imageUrl="../psychologist.jpg"
            link="/psychologists"
          />
          <TeamSection 
            title="Volunteers" 
            description="Our volunteers play a crucial role in supporting our mission and helping our clients. They contribute their time and skills in various capacities, from organizing events to providing direct support to those in need."
            imageUrl="../volunteers.jpg"
            link="/volunteers"
          />
          <TeamSection 
            title="Legal Team" 
            description="Our legal team provides essential legal services and advocacy for our clients. They are dedicated to protecting the rights of our clients and ensuring they receive the justice they deserve, working on cases ranging from family law to immigration."
            imageUrl="../legal_team.jpg"
            link="/legal-team"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import TeamSection from '@/components/TeamPreview.vue'
  </script>
  
  <style scoped>
  .container {
    @apply mx-auto px-4;
  }
  
  .title {
    @apply text-3xl font-extrabold text-center mb-8;
  }
  
  .description {
    @apply text-center text-gray-700 mb-12;
  }
  </style>
  