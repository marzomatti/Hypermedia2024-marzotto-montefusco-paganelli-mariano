<template>
  <section class="bg-gray-100 py-12 px-12">
    <div class="container mx-auto">
      <div class="p-6 rounded-lg">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-4xl font-semibold text-center text-blue mb-4">Most Relevant Projects</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <nuxt-link
            v-for="project in projects"
            :key="project.id"
            :to="`/activities/projects/project-${project.id}`"
            class="bg-white p-6 rounded-3xl shadow-lg transition duration-500 hover:shadow-xl hover:scale-105"
          >
            <img :src="project.image" alt="project.name" class="w-full h-128 object-cover mb-2 rounded-3xl" />
            <h4 class="text-xl font-semibold text-blue mb-2">{{ project.name }}</h4>
            <p class="text-blue mb-2">{{ project.description_s }}</p>
          </nuxt-link>
        </div>
        <div class="flex justify-center">
          <Button :text="'See our projects ->'" :link="'/activities/projects'" class="mt-4"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const supabase = useSupabaseClient()

const projects = ref([])

const fetchProjectsData = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .limit(3)

    if (error) {
    console.error(error)
  } else {
    projects.value = data
  }
}

onMounted(fetchProjectsData)
</script>

<style scoped>
.rounded-3xl {
  border-radius: 1.5rem;
}

.h-128 {
  height: 32rem;
}
</style>
