<template>
  <Breadcrumb/>
  <section class="py-12 px-4 lg:px-24">
    <h1 class="text-4xl font-bold text-center mb-8">Our Volunteers</h1>
    <p class="text-lg text-center mb-12">
      Meet our dedicated volunteers who play a crucial role in supporting and advocating for women affected by violence. Our volunteers bring a diverse range of skills and a deep commitment to making a positive impact. They work tirelessly alongside our staff to provide comprehensive support and create a safe and empowering environment for all. We are grateful for their passion, dedication, and the invaluable contributions they make every day.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <nuxt-link v-for="person in volunteers" :key="person.id" :to="`/volunteers/${person.id}`" class="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
        <img :src="person.photo" alt="Volunteer Photo" class="w-full h-64 object-cover rounded-lg mb-4">
        <h3 class="text-xl font-semibold text-gray-800">{{ person.name }} {{ person.surname }}</h3>
        <p class="text-gray-600">{{ person.role }}</p>
      </nuxt-link>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: 'Volunteers',
})

const supabase = useSupabaseClient()

const volunteers = ref([])

const { data, pending } = await useAsyncData('volunteers', async () => {
  const { data, error } = await supabase
    .from('volunteers')
    .select()
    
  if (error) {
    return []
  }

  return data
})

volunteers.value = data.value
</script>

<style scoped>
.rounded-lg {
  border-radius: 1.5rem;
}

.bg-white {
  background-color: #ffffff;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.text-gray-800 {
  color: #2d3748;
}

.text-gray-600 {
  color: #718096;
}

@media (min-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
