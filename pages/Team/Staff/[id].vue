<template>
  <div>
    <Breadcrumb :is-customized="true" :label="currPerson.name + ' ' + currPerson.surname"/>
  <main class="bg-gray-50 min-h-screen py-8">
    <div class="container mx-auto px-4 max-w-6xl">

      <ProfileSection
          :imageSrc="'team/staff' + currPerson.image"
          :name="currPerson.name"
          :surname="currPerson.surname"
          :role="currPerson.role"
          :email="currPerson.email"
          :description="currPerson.description"
        />

        <RelatedActivities
          :services="filteredServices"
          :projects="filteredProjects"
        />

        <!-- Navigation Arrows -->
       <div class="flex justify-between mt-12">
        <Button
        v-if="currPerson.previousPerson > 0" 
        :link="getPersonLink(currPerson.previousPerson)" 
        text="&larr; Previous Person"
        />
        <div class="flex-1"></div>
        <Button 
        v-if="currPerson.nextPerson > 0" 
        :link="getPersonLink(currPerson.nextPerson)"
        text="Next Person &rarr;"
        />
      </div>
    </div>
  </main>
  </div>

</template>

<script setup>
const route = useRoute()
const { data: currPerson} = await useFetch('/api/staff/' + route.params.id);
const { data: services, error, loading } = await useFetch('/api/services');
const { data: projects, error1, loading1 } = await useFetch('/api/projects');

const personName = computed(() => {
  return currPerson.value ? currPerson.value.name : "";
});
const personSurname = computed(() => {
  return currPerson.value ? currPerson.value.surname : "";
});
const personRole = computed(() => {
  return currPerson.value ? currPerson.value.role : "";
});

useHead({
  title: personName + " " + personSurname,
  meta: [
    {
      name: "description",
      content:
        "Meet" + personName + ' ' + personSurname + ","+ personRole + " at No Woman Alone. They are dedicated to supporting women affected by violence with compassion and professionalism.",
    },
  ],
});



function isServiceRelated(id) {
  if (Array.isArray(services.value) && Array.isArray(currPerson.value.relatedServices)) {
    return currPerson.value.relatedServices.includes(id);
  }
  return false;
}

function isProjectRelated(id) {
  if (Array.isArray(projects.value) && Array.isArray(currPerson.value.relatedProjects)) {
    return currPerson.value.relatedProjects.includes(id);
  }
  return false;
}

const filteredServices = computed(() => {
  if (Array.isArray(services.value)) {
    return services.value.filter((p) => isServiceRelated(p.id));
  }
  return [];
});

const filteredProjects = computed(() => {
  if (Array.isArray(projects.value)) {
    return projects.value.filter((p) => isProjectRelated(p.id));
  }
  return [];
});

function getPersonLink(id) {
  return `/team/staff/` + `${id}`
}
</script>

<style scoped>
.rounded-3xl {
  border-radius: 1.5rem;
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
