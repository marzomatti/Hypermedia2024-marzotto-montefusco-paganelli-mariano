<template>
  <main>
    <TitleColor
      title="Our Activities"
      description = "We support women affected by domestic violence 
                     with psychological counseling, group chats, legal 
                     aid, medical assistance, safe housing, educational 
                     programs, community outreach, and wellness retreats."
    />
    <!-- Services Section -->
    <section class="bg-white py-12 px-12">
      <div class="container mx-auto">
        <ServicesPreview class="hiddenItem"/>
      </div>
    </section>

    <!-- Most Relevant Projects Section -->
    <section class="bg-gray-100">
      <ProjectsPreview class="hiddenItem"/>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
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

.bg-gray-100 {
  background-color: #f7fafc;
}

.text-gray-800 {
  color: #2d3748;
}

.text-gray-600 {
  color: #718096;
}

.text-red-400 {
  color: #fc8181;
}

.hover\:underline:hover {
  text-decoration: underline;
}

.hover\:bg-red-400:hover {
  background-color: #fc8181;
}

.hover\:text-white:hover {
  color: #ffffff;
}

.transition {
  transition: all 0.3s ease-in-out;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.rounded-3xl {
  border-radius: 1.5rem;
}
</style>
