<template>
  <Breadcrumb/>
  <main class="py-12 px-4 lg:px-24 bg-white min-h-screen">
    <div class="flex flex-col items-start justify-between mb-12">
      <!-- Section: Project Details -->
      <div class="lg:w-2/3">
        <h1 class="text-5xl font-bold text-blue mb-4">{{ project.name }}</h1>
        <h2 class="text-2xl text-blue mb-2">Responsible Person: {{ project.responsible }}</h2>
      </div>
      <div class="justify-content-right">
        <p class="text-lg align-right text-blue mb-6">{{ project.description }}</p>
      </div>
      <!-- Section: Project Image -->
      <div class="w-full mt-8">
        <img :src="project.image" alt="Project Image" class="w-full h-auto rounded-3xl shadow-lg">
      </div>
    </div>

    <!-- Navigation Arrows -->
    <div class="flex justify-between mt-12">
      <button v-if="hasPreviousProject" @click="navigateTo(previousProjectId)" class="nav-button inline-block mt-6 border-2 border-secondary-color text-secondary-color px-6 py-3 rounded-full hover:bg-secondary-color hover:text-white transition duration-300">
        &larr; Previous Project
      </button>
      <div class="flex-1"></div>
      <button v-if="hasNextProject" @click="navigateTo(nextProjectId)" class="nav-button inline-block mt-6 border-2 border-secondary-color text-secondary-color px-6 py-3 rounded-full hover:bg-secondary-color hover:text-white transition duration-300">
        Next Project &rarr;
      </button>
    </div>
  </main>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const project = ref({});
const supabase = useSupabaseClient();

const hasPreviousProject = ref(false);
const hasNextProject = ref(false);
const previousProjectId = ref(null);
const nextProjectId = ref(null);

onMounted(async () => {
  const { data: projectData, error: projectError } = await supabase
    .from('projects')
    .select()
    .eq('id', route.params.id)
    .single();

  if (projectError) {
    console.error(projectError);
  } else {
    project.value = projectData;
    checkNavigation(projectData.id);
  }
});

const checkNavigation = async (currentProjectId) => {
  const { data: projects, error: projectsError } = await supabase
    .from('projects')
    .select('id')
    .order('id', { ascending: true });

  if (projectsError) {
    console.error(projectsError);
  } else {
    const projectIds = projects.map(p => p.id);
    const currentIndex = projectIds.indexOf(currentProjectId);

    hasPreviousProject.value = currentIndex > 0;
    hasNextProject.value = currentIndex < projectIds.length - 1;

    if (hasPreviousProject.value) {
      previousProjectId.value = projectIds[currentIndex - 1];
    }
    if (hasNextProject.value) {
      nextProjectId.value = projectIds[currentIndex + 1];
    }
  }
};

const navigateTo = (id) => {
  if (id) {
    router.push(`/activities/projects/project`+ `${id}`);
  }
};
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
