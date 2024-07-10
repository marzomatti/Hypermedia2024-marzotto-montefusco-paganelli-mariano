<template>
  <div>
    <Breadcrumb :is-customized="true" :label="currProject.name"/>
    <main class="py-12 px-4 lg:px-24 bg-white min-h-screen">
      <div class="flex flex-col lg:flex-row justify-between mb-8 items-center">
        <!-- Section: Project Details -->
        <div class="lg:w-2/3 flex flex-col justify-between mb-8 lg:mb-0 lg:pr-8">
          <h1 class="text-5xl font-bold text-blue mb-4">{{ currProject.name }}</h1>
          <h2 class="text-2xl text-blue my-6 mr-2 font-bold">Responsible of the project: 
            <NuxtLink :to="`/team/staff/${currProject.responsible_person.id}`" class="hover:text-secondary-color active:font-bold hover:transform hover:scale-105 hover:font-bold transition duration-200">
              {{ currProject.responsible_person.name }} {{ currProject.responsible_person.surname }}</NuxtLink>
          </h2>
          <p class="text-lg text-blue mb-6">{{ currProject.summary }}</p>
        </div>
        <!-- Section: Project Image -->
        <div class="lg:w-2/3 pt-32 lg:mt-0">
          <img :src="'../../assets/img/projects' + currProject.image" alt="Project Image" class="w-full h-auto rounded-3xl shadow-lg">
        </div>
      </div>




      <!-- <div class="flex justify-start items-start space-x-8">
        <div class = "w-1/3">
          <ContactCard :profile="currProject.responsible_person" class="w-full h-auto rounded-3xl shadow-lg"/>
        </div>
        <div class="w-2/3"> -->
          <h2 class="text-2xl text-blue mb-2 mr-2 font-bold">Team</h2>
          <p class="text-lg text-blue mb-6">{{ currProject.team }}</p>
        <!-- </div> -->

      <h2 class="text-2xl text-blue mb-2 mr-2 font-bold">Insights</h2>
      <p class="text-lg text-blue mb-6">{{ currProject.insights }}</p>


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
import { ref, computed, watch } from 'vue';
const route = useRoute();
const id = route.params.id;
const projects = ref([]);
const responsible = ref([]);

const { data, error, loading } = await useFetch('/api/projects');
projects.value = data.value;

const currProject = computed(() => {
  if (Array.isArray(projects.value)) {
    const filteredProjects = projects.value.filter((p) => p.id == id);
    return filteredProjects.length > 0 ? filteredProjects[0] : null;
  }
  return null;
});

function getProjectLink(id) {
  return `/activities/projects/` + `${id}`;
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
