<template>
  <section class="bg-white py-12 px-12">
    <div class="container mx-auto flex flex-col md:flex-row items-center">
      <div class="w-full md:w-1/2 text-left md:pr-8 mb-8 md:mb-0">
        <h2 class="text-4xl font-bold text-gray-800 mb-2">Our team</h2>
        <p class="text-lg mb-6">
          Our dedicated team of professionals, including both staff and volunteers, is here to support and guide you. <span class="text-secondary-color">Break the silence</span> and reach out to us for help. We understand that every individual's situation is unique, and we are committed to providing personalized support to meet your specific needs. Our experienced counselors, legal advisors, and advocates are dedicated to helping you navigate through difficult times with compassionate care. Don't hesitate to reach out and let us help you on your journey to healing and empowerment.
        </p>
        <Button text="See our team" link="/team"></Button>
      </div>
      <div class="w-full md:w-1/2 flex justify-center">
        <div class="border border-gray-300 rounded-3xl overflow-hidden shadow-lg">
          <img :src="backgroundUrl" alt="Our team" class="object-cover w-full h-auto"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import backgroundUrl from '~/assets/img/homepage_2.jpg';
export default {
  name: 'PeoplePreview',
  data() {
    return {
      backgroundUrl
    };
  }
};
</script>

<style scoped>
/* Additional styles if needed */
.rounded-3xl {
  border-radius: 1.5rem;
}
</style>
