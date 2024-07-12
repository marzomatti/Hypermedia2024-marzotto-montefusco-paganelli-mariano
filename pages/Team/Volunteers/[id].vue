<template>
  <div>
    <Breadcrumb :is-customized="true" :label="currPerson.name + ' ' + currPerson.surname"/>
  <main class="bg-gray-50 min-h-screen py-8">
    <div class="container mx-auto px-4 max-w-6xl">

      <ProfileSection
          :imageSrc="'/team/volunteers' + currPerson.image"
          :name="currPerson.name"
          :surname="currPerson.surname"
          :role="currPerson.role"
          :email="currPerson.email"
          :description="currPerson.description"
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
useHead({
  title: 'Personal Info',
})

const { data: volunteers, error1, loading1 } = await useFetch('/api/volunteers');


const route = useRoute()

const currPerson = computed(() => {
  if (Array.isArray(volunteers.value)) {
    const filteredVolunteers = volunteers.value.filter((p) => p.id == route.params.id);
    return filteredVolunteers.length > 0 ? filteredVolunteers[0] : null;
  }
  return null;
});


function getPersonLink(id) {
  return `/team/volunteers/` + `${id}`
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
