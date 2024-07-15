<template>
  <section class="bg-gray-100 px-12">
    <div class="container mx-auto">
      <div class="p-6 rounded-lg">
        <div class="items-center mb-6 mt-4">
          <h2 class="hiddenItem text-4xl font-extrabold text-blue text-center">
            Most Relevant Projects
          </h2>
        </div>
        <div
          class="hiddenItem grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <nuxt-link
            v-for="project in mostRelevantProjects"
            :key="project.id"
            :to="`/activities/projects/${project.id}`"
            class="bg-white p-6 rounded-3xl shadow-lg transition duration-500 hover:shadow-xl hover:scale-105"
          >
            <img
              :src="getImageLink('/projects' + project.image)"
              alt="project.name"
              class="w-full h-60 object-cover rounded-3xl mb-2"
            />
            <h4 class="text-xl font-semibold text-blue mb-2">
              {{ project.name }}
            </h4>
            <p class="text-blue mb-2">{{ project.description_s }}</p>
          </nuxt-link>
        </div>
        <div class="hiddenItem flex justify-center mt-6">
          <Button :text="'See all projects'" :link="'/activities/projects'" class="mt-4"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, computed } from "vue";

function getImageLink(imageUrl){
  const config = useRuntimeConfig()
  return `${config.public.supabaseImagesUrl}${imageUrl}`
}

const { data: projects, error, loading } = await useFetch("/api/projects");
const router = useRouter();

const navigateTo = (id) => {
  if (id) {
    router.push(`/activities/projects/${id}`);
  }
};

const mostRelevantProjects = computed(() => {
  return Array.isArray(projects.value) ? projects.value.slice(0, 3) : [];
});

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          entry.target.classList.remove("hiddenItem");
        }
      });
    },
    {
      rootMargin: "-20% 0px -10% 0px",
    }
  );

  const hiddenElements = document.querySelectorAll(".hiddenItem");
  hiddenElements.forEach((element) => {
    observer.observe(element);
  });
});
</script>

<style scoped>
.hiddenItem {
  opacity: 0;
  transition: opacity 0.5s ease-in-out, filter 0.5s ease-in-out,
    transform 0.5s ease-in-out;
  filter: blur(10px);
  transform: translateY(30px);
}

.show {
  opacity: 1;
  filter: blur(0px);
  transform: translateY(0);
}

.rounded-3xl {
  border-radius: 1.5rem;
}

.h-128 {
  height: 32rem;
}
</style>
