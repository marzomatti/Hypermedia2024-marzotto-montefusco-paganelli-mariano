<template>
  <Breadcrumb/>
  <section class="py-12 px-4 lg:px-24">
    <h1 class="text-4xl text-blue font-bold text-center mb-8">Our Staff</h1>
    <p class="text-lg text-blue text-center mb-12">
      Meet our dedicated staff committed to supporting and advocating for women affected by violence. Our team is composed of experienced professionals who are passionate about making a difference. Each member brings a unique set of skills and expertise to provide comprehensive support and create a safe and empowering environment for all. We are here to help, listen, and guide you every step of the way.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <nuxt-link v-for="person in staff" :key="person.id" :to="`/team/person${person.id}`" class="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
        <img :src="person.image" alt="Staff Photo" class="w-full h-auto object-cover rounded-lg mb-4 aspect-portrait">
        <h3 class="text-xl font-semibold text-blue">{{ person.name }} {{ person.surname }}</h3>
        <p class="text-blue">{{ person.role }}</p>
      </nuxt-link>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: 'Staff',
})

const supabase = useSupabaseClient()

const staff = ref([])

const { data, pending } = await useAsyncData('staff', async () => {
  const { data, error } = await supabase
    .from('staff')
    .select()
    
  if (error) {
    return []
  }

  return data
})

staff.value = data.value
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

.aspect-portrait {
  aspect-ratio: 3 / 4;
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
