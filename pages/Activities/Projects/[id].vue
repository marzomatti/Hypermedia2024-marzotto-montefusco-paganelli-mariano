<template>
  <div>
    <Breadcrumb/>
    <main class="py-12 px-4 lg:px-24 bg-white min-h-screen">
      <div class="flex flex-col items-start justify-between mb-12">
        <!-- Section: Project Details -->
        <div class="lg:w-2/3">
          <h1 class="text-5xl font-bold text-blue mb-4">{{ currProject.name }}</h1>
          <h2 class="text-2xl text-blue mb-2">Responsible Person: {{ currProject.responsible }}</h2>
        </div>
        <div class="justify-content-right">
          <p class="text-lg align-right text-blue mb-6">{{ currProject.description }}</p>
        </div>
        <!-- Section: Project Image -->
        <div class="w-full mt-8">
          <img :src="currProject.image" alt="Project Image" class="w-full h-auto rounded-3xl shadow-lg">
        </div>
      </div>

      <!-- Navigation Arrows -->
      <div class="flex justify-between mt-12">
        <NuxtLink v-if="currProject.previousProject > 0" :to="getProjectLink(currProject.previousProject)" class="nav-button inline-block mt-6 border-2 border-secondary-color text-secondary-color px-6 py-3 rounded-full hover:bg-secondary-color hover:text-white transition duration-300">
          &larr; Previous Project
        </NuxtLink>
        <div class="flex-1"></div>
        <NuxtLink v-if="currProject.nextProject > 0" :to="getProjectLink(currProject.nextProject)" class="nav-button inline-block mt-6 border-2 border-secondary-color text-secondary-color px-6 py-3 rounded-full hover:bg-secondary-color hover:text-white transition duration-300">
          Next Project &rarr;
        </NuxtLink>
      </div>
    </main>
  </div>

</template>

<script setup>
const route = useRoute();
const id = route.params.id
const { data: projects, error, loading } = await useFetch('/api/projects');

const currProject = computed(() => {
  if (Array.isArray(projects.value)) {
    const filteredProjects = projects.value.filter((p) => p.id == route.params.id);
    return filteredProjects.length > 0 ? filteredProjects[0] : null;
  }
  return null;
});

function getProjectLink(id) {
  return `/activities/projects/` + `${id}`
}
</script>

<style scoped>
.bg-white {
  background-color: #ffffff;
}

.rounded-3xl {
  border-radius: 1.5rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.min-h-screen {
  min-height: 100vh;
}
</style>
