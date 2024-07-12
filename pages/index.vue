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

