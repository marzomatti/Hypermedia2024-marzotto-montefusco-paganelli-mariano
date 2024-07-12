<template>
  <section class="bg-white py-12 px-12">
    <TitleOne 
        title="Our Team" 
        description="Meet the dedicated individuals who are at the 
                     heart of our mission to support and empower women. 
                     Our team, composed of passionate staff and volunteers, 
                     works tirelessly to provide essential services and 
                     create a safe environment for those in need."
      />

    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <!-- Staff Block -->
        <TeamCard 
          title="Staff" 
          description="Meet our dedicated staff members who work tirelessly to provide support and services to women in need."
          imageSrc="/team/people_staff.jpg"
          altText="Staff"
          buttonText="Discover more ->"
          buttonLink="/team/staff"
        />
        <!-- Volunteers Block -->
        <TeamCard 
          title="Volunteers" 
          description="Discover the passionate volunteers who help us make a difference in the lives of women facing violence."
          imageSrc="/team/people_volounteers.jpg"
          altText="Volunteers"
          buttonText="Discover more ->"
          buttonLink="/team/volunteers"
          imageClass="object-top"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.rounded-3xl {
  border-radius: 1.5rem;
}

.h-128 {
  height: 32rem;
}

.object-top {
  object-position: top;
}
</style>
