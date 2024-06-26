<template>
  <section class="py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-semibold text-center text-gray-800 mb-12">Our Mission</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h3 class="text-2xl font-bold text-blue-600 mb-4">Why?</h3>
          <p class="text-gray-700">
            Our mission is to empower women who have been victims of violence by providing them with the resources, support, and guidance they need to reclaim their lives and build a future free from fear and abuse.
          </p>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h3 class="text-2xl font-bold text-blue-600 mb-4">How?</h3>
          <p class="text-gray-700">
            We offer a range of services including counseling, legal assistance, safe shelters, and educational workshops. Our holistic approach ensures that women receive the emotional, legal, and practical support necessary to overcome their experiences and move forward confidently.
          </p>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h3 class="text-2xl font-bold text-blue-600 mb-4">Who?</h3>
          <p class="text-gray-700">
            Our organization comprises a team of compassionate professionals, including counselors, legal experts, and volunteers, all dedicated to supporting women in their journey to recovery. We work tirelessly to create a safe and nurturing environment for all those we serve.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MissionSection',
};
</script>

<style scoped>
section {
  background-color: white; /* Light grey for a peaceful background */
}

h2 {
  font-family: 'Poppins', sans-serif; /* Modern font for the heading */
}

h3 {
  font-family: 'Poppins', sans-serif; /* Matching font for subheadings */
}
</style>
