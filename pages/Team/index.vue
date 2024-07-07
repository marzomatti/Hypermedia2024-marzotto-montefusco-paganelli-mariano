<template>
  <section class="bg-white py-12 px-12">
    <h1 class="font-sans font-extrabold no-italic text-[40px] md:text-[56px] md:leading-[66px] text-center text-blue mb-4">Our Team</h1>

    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <!-- Staff Block -->
        <div class="bg-white p-6 rounded-3xl shadow-lg transition duration-500 hover:shadow-xl hover:scale-105 flex flex-col items-center">
          <div class="flex-shrink-0 w-full">
            <img src="/assets/img/team/people_staff.jpg" alt="Staff" class="w-full h-128 object-cover mb-2 rounded-3xl"/>
          </div>
          <h3 class="text-2xl font-semibold text-blue mb-2">Staff</h3>
          <p class="text-blue mb-2">Meet our dedicated staff members who work tirelessly to provide support and services to women in need.</p>
          <Button text="Discover more ->" link="/team/staff" class="mt-2"/>
        </div>
        <!-- Volunteers Block -->
        <div class="bg-white p-6 rounded-3xl shadow-lg transition duration-500 hover:shadow-xl hover:scale-105 flex flex-col items-center">
          <div class="flex-shrink-0 w-full">
            <img src="/assets/img/team/people_volounteers.jpg" alt="Volunteers" class="w-full h-128 object-cover mb-2 rounded-3xl object-top"/>
          </div>
          <h3 class="text-2xl font-semibold text-blue mb-2">Volunteers</h3>
          <p class="text-blue mb-2">Discover the passionate volunteers who help us make a difference in the lives of women facing violence.</p>
          <Button text="Discover more ->" link="/team/volunteers" class="mt-2"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Additional styles if needed */
.rounded-3xl {
  border-radius: 1.5rem;
}

.h-128 {
  height: 32rem;
}

.object-top {
  object-position: top;
}
</style>
