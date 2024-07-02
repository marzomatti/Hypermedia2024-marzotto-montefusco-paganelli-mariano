<template>
  <section class="bg-white py-12 px-12">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold text-gray-800 mb-2">Our team</h2>
      <p class="text-lg">Our dedicated team of professionals is here to support and guide you. <br> <span class="text-primary-color">Break the silence</span> and reach out to us for help.</p>
      <div class="grid md:grid-cols-4 grid-cols-2 lg:gap-4 gap-2 w-auto md:mx-x_padding_page mx-x_padding_page_mobile bg-white lg:p-10 p-2 rounded-xl">
        <div v-for="person in people" :key="person.id" class="bg-white p-4 rounded-lg shadow-lg">
          <img src="/public/face1.jpg" alt="Person Image" class="w-full h-48 object-cover rounded-lg"/>
        </div>
      </div>
      <Button :text="'See our team ->'"/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PeoplePreview',
  data() {
    return {
      people: [
        { id: 1, image: '/public/face1.jpg' },
        { id: 2, image: '/public/face1.jpg' },
        { id: 3, image: '/public/face1.jpg' },
        { id: 4, image: '/public/face1.jpg' },
        { id: 5, image: '/public/face1.jpg' },
        { id: 6, image: '/public/face1.jpg' },
        { id: 7, image: '/public/face1.jpg' },
        { id: 8, image: '/public/face1.jpg' },
      ],
    };
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
