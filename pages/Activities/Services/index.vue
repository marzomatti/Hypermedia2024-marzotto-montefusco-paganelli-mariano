<template>
  <div>
    <Breadcrumb />
    <TitleColor
      title="Our Services"
      description="We provide a wide range of services to support women affected by violence. Explore our services to learn how we can help you."
    />
    
    <main class="py-12 px-4 lg:px-24 bg-white">
      <!-- Services List -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 justify-center text-blue">
        <ServiceCard
          v-for="(service, index) in services"
          :key="service.id"
          :link="getServiceLink(service.id)"
          :logo="'/services' + service.logo"
          :name="service.name"
          :description="service.description_s"
          :class="{ hiddenItem: !isVisible(index) }"
        />
      </div>

      <!-- How Section -->
      <section class="text-center mb-12">
        <h2 class="text-4xl font-bold text-blue mb-4">How?</h2>
        <p class="text-lg text-left text-blue">
          Our services are meticulously designed to provide comprehensive and holistic support to women affected by violence. We understand that each individual's experience is unique, which is why we offer a wide array of services to meet diverse needs. From supportive <b style="color: #d62828; font-weight: 900;">group chats</b> where you can connect with others who have similar experiences, to one-on-one <b style="color: #d62828; font-weight: 900;">psychological counseling sessions</b> aimed at helping you process trauma and rebuild your emotional strength, our psychological services are here to nurture your mental health.<br><br>

          Legal challenges often accompany instances of domestic violence, and our <b style="color: #d62828; font-weight: 900;">legal aid services</b> are dedicated to helping you navigate through these complexities with confidence. Our team of experienced lawyers will provide you with expert advice and representation, ensuring that your rights are protected and that you can move forward with legal matters in a safe and informed manner.<br><br>

          Medical assistance is another critical aspect of our support system. We offer access to comprehensive <b style="color: #d62828; font-weight: 900;">healthcare services</b>, including <b style="color: #d62828; font-weight: 900;">emergency medical care</b>, regular <b style="color: #d62828; font-weight: 900;">health check-ups</b>, and specialized treatments for injuries and other health issues resulting from abuse. Our compassionate healthcare professionals are here to attend to your physical well-being with the utmost care and respect.<br><br>

          Additionally, our <b style="color: #d62828; font-weight: 900;">Safe Haven Housing Program</b> is designed to offer secure and supportive housing options for those who need to escape abusive environments. We collaborate with local shelters and housing agencies to provide both temporary and long-term housing solutions, ensuring that you have a safe place to stay while you rebuild your life.<br><br>

          Each of our services is tailored to address specific needs, ensuring that you receive the right kind of support when you need it most. We believe in a personalized approach to care, recognizing that the path to healing and empowerment is different for everyone. Explore the sections above to learn more about how each service can assist you in your journey towards healing and empowerment. We are committed to walking alongside you every step of the way, providing the expertise, care, and compassion you need to overcome these challenging times and emerge stronger.
        </p>
      </section>

      <!-- Image Section -->
      <div class="flex justify-center">
        <img src="/services/serviceindex_img.jpg" alt="Supporting Image" class="rounded-3xl shadow-lg w-full max-w-4xl">
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

useHead({
  title: 'Services',
})

const { data: services, error, loading } = await useFetch('/api/services');

const visibleIndices = ref([]);

const isVisible = (index) => visibleIndices.value.includes(index);

onMounted(() => {
  services.value.forEach((_, index) => {
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

function getServiceLink(id) {
  return `/activities/services/` + `${id}`
}
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

.bg-white {
  background-color: #ffffff;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:shadow-xl:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>

