<template>
  <div>
    <header>
      <Breadcrumb />
      <TitleColor
        title="Our Projects"
        :description = "text"
      >

         <!-- Search Bar -->
          <div class="flex justify-center px-4 lg:px-24 pt-12">
            <div class="relative w-full max-w-sm">
              <input 
                v-model="searchQuery" 
                type="text" 
                placeholder="Search projects..." 
                class="w-full p-4 pr-10 border border-gray-300 rounded-3xl text-blue focus:outline-none focus:ring-2 focus:ring-primary-color"
              />
              <div class="absolute inset-y-0 right-0 flex items-center color-blue pr-3">
                <button @click="clearSearch" v-if="searchQuery" class="text-blue h-4 w-4 mr-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 8.586L4.707 3.293a1 1 0 00-1.414 1.414L8.586 10l-5.293 5.293a1 1 0 001.414 1.414L10 11.414l5.293 5.293a1 1 0 001.414-1.414L11.414 10l5.293-5.293a1 1 0 00-1.414-1.414L10 8.586z" clip-rule="evenodd"/>
                  </svg>
                </button>
                <button @click="searchProjects" class="text-blue h-4 w-4 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 56.966 56.966" fill="currentColor">
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
      </TitleColor>
    </header>
    <main>
      <div class="flex flex-col w-full">
        <ProjectBand
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :name="project.name"
          :description="project.description_s"
          :link="getProjectLink(project.id)"
          :imageSrc="'/projects' + project.image"
          :backgroundColor="getBackgroundColor(index)"
          :class="{ hiddenItem: !isVisible(index) }"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

useHead({
  title: "Projects",
  meta: [
    {
      name: "description",
      content:
        "Explore the projects at No Woman Alone. We offer legal assistance, counseling, and recovery programs. Join us in empowering women through community and advocacy initiatives.",
    },
  ],
});

const { data: projects, error, loading } = await useFetch('/api/projects');
const searchQuery = ref('');

const filteredProjects = computed(() => {
  if (!searchQuery.value) {
    return projects.value;
  }
  return projects.value.filter(project => 
    project.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const getBackgroundColor = (index) => {
  const colors = ['bg-gray-100', 'bg-white'];
  return colors[index % colors.length];
};

function getProjectLink(id) {
  return `/activities/projects/${id}`;
}

const clearSearch = () => {
  searchQuery.value = '';
};

const visibleIndices = ref([]);

const isVisible = (index) => visibleIndices.value.includes(index);

onMounted(() => {
  projects.value.forEach((_, index) => {
    setTimeout(() => {
      visibleIndices.value.push(index);
    }, index * 500); // Delay each card by 500ms
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.classList.remove('hiddenItem');
      }
    });
  }, {
    rootMargin: '-20% 0px -10% 0px'
  });

  const hiddenElements = document.querySelectorAll('.hiddenItem');
  hiddenElements.forEach(element => {
    observer.observe(element);
  });
});

const text = "Explore our initiatives dedicated to supporting women affected by violence. Join us in making a difference."
</script>

<style scoped>
.hiddenItem {
  opacity: 0;
  transition: opacity 1s ease-in-out, filter 1s ease-in-out, transform 1s ease-in-out;
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

.focus\:ring-primary-color:focus {
  box-shadow: 0 0 0 2px rgba(255, 76, 76, 0.5);
}
</style>
