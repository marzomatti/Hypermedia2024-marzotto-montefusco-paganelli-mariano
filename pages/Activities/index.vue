<template>
  <main>
  <div class="flex flex-col bg-primary-color lg:py-12 py-8">
    <div class="lg:px-24 px-4">
      
      <!-- Title of the page -->
      <h1 class="lg:text-5xl text-4xl text-white text-center font-bold">Our Activities</h1>
      
      <!-- Description of the page -->
      <div class="flex justify-center mt-4">
        <h2 class="text-white text-center lg:text-2xl text-xl">
          We support women affected by domestic violence with psychological counseling, group chats, legal aid, medical assistance, safe housing, educational programs, community outreach, and wellness retreats.
        </h2>
      </div>
    </div>
  </div>

    <!-- Services Section -->
    <section class="bg-white py-12 px-12">
      <div class="container mx-auto">
        <ServicesPreview/>
      </div>
    </section>

    <!-- Most Relevant Projects Section -->
    <section class="bg-gray-100">
        <ProjectsPreview/>
    </section>
  </main>
</template>

<script setup>

</script>

<style scoped>


.bg-gray-100 {
  background-color: #f7fafc;
}

.text-gray-800 {
  color: #2d3748;
}

.text-gray-600 {
  color: #718096;
}

.text-red-400 {
  color: #fc8181;
}

.hover\:underline:hover {
  text-decoration: underline;
}

.hover\:bg-red-400:hover {
  background-color: #fc8181;
}

.hover\:text-white:hover {
  color: #ffffff;
}

.transition {
  transition: all 0.3s ease-in-out;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:shadow-xl:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.rounded-3xl {
  border-radius: 1.5rem;
}
</style>
