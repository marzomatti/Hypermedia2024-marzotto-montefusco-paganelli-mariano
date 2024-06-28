<template>
  <section class="bg-white py-12 px-12">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold text-gray-800 mb-2">Our people that will help you</h2>
      <p class="text-lg text-red-400 font-semibold">Break the silence</p>
      <div class="grid md:grid-cols-4 grid-cols-2 lg:gap-4 gap-2 w-auto md:mx-x_padding_page mx-x_padding_page_mobile bg-white lg:p-10 p-2 rounded-xl">
        <div v-for="person in people" :key="person.id" class="bg-white p-4 rounded-lg shadow-lg">
          <img src="/public/face1.jpg" alt="Person Image" class="w-full h-48 object-cover rounded-lg"/>
        </div>
      </div>
      <nuxt-link to="/people" class="inline-block border-2 border-red-400 text-red-400 px-6 py-3 rounded-full font-semibold hover:bg-red-400 hover:text-white transition duration-300">
        See our people ->
      </nuxt-link>
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
