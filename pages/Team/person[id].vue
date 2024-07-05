<template>
  <main class="bg-gray-50 min-h-screen py-8">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Profile Section -->
      <div class="bg-white p-8 rounded-3xl shadow-lg mb-12 flex flex-col md:flex-row items-center">
        <div class="md:flex-1 md:mr-8">
          <img :src="person.image" alt="Profile Photo" class="w-full h-auto rounded-3xl shadow-md mb-4 md:mb-0">
        </div>
        <div class="md:flex-1 text-center md:text-left">
          <h1 class="text-5xl font-extrabold text-blue mb-4">{{ person.name }} {{ person.surname }}</h1>
          <h2 class="text-3xl text-blue mb-6">{{ person.role }}</h2>
          <div class="mt-4">
            <h3 class="text-2xl font-bold text-blue">Contact</h3>
            <p class="text-gray-600 text-xl">Email: <a :href="'mailto:' + person.email" class="text-secondary-color hover:underline">{{ person.email }}</a></p>
          </div>
          <div class="mt-6">
            <h3 class="text-2xl font-bold text-blue">Description</h3>
            <p class="text-gray-600 text-xl">{{ person.description }}</p>
          </div>
        </div>
      </div>

      <!-- Related Activities Section -->
      <section>
        <h2 class="text-4xl font-extrabold text-blue mb-8">Related Activities</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <nuxt-link v-for="activity in person.activities" :key="activity.id" :to="'/activity/' + activity.id" class="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img :src="activity.image" alt="Activity Image" class="w-full h-48 object-cover rounded-3xl mb-4">
            <h3 class="text-2xl font-bold text-blue mb-2">{{ activity.title }}</h3>
            <p class="text-gray-600">{{ activity.description }}</p>
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Personal Info',
})
const supabase = useSupabaseClient()

const person = ref();
const route = useRoute();

const { data, pending } = await useAsyncData('staff', async () => {
  const { data, error } = await supabase
    .from('staff')
    .select()
    .eq('id', route.params.id)
    .single();

  if (error) {
    return []
  }

  return data
})

person.value = data.value

</script>

<style scoped>
.rounded-3xl {
  border-radius: 1.5rem;
}


.text-secondary-color {
  color: var(--color-secondary);
}

.bg-secondary-color {
  background-color: var(--color-secondary);
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.transition-transform {
  transition: transform 0.3s ease-in-out;
}

.aspect-portrait {
  aspect-ratio: 3 / 4;
}
</style>
