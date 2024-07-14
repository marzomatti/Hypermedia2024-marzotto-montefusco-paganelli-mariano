<template>
  <main>
    <div>
      <HeroSection />
      <div>
        <Mission class="hiddenItem" />
        <ActivitiesPreview class="hiddenItem" />
        <PeoplePreview class="hiddenItem" />
      </div>
    </div>
  </main>
</template>


<script setup>
const description = ref('Welcome to No Woman Alone - Empowering Women, Transforming Lives. We are dedicated to supporting women affected by violence through comprehensive services, including legal assistance, counseling, and recovery programs. Our mission is to create a safe and nurturing environment where women can rebuild their lives and regain their independence. Explore our initiatives in advocacy, education, and community engagement. Join us in making a difference and advocating for a world where no woman has to face violence alone. Together, we can drive change and inspire hope.');

useHead({
    title: "Home",
    meta: [{
        name: 'description',
        content: description
    }]
})
</script>

<style scoped>
.hiddenItem {
  opacity: 0;
  transition: opacity 0.5s ease-in-out, filter 0.5s ease-in-out, transform 0.5s ease-in-out;
  filter: blur(5px);
  transform: translateY(20px);
}

.show {
  opacity: 1;
  filter: blur(0px);
  transform: translateY(0);
}

.lazy {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.lazy-loaded {
  opacity: 1;
}
</style>

