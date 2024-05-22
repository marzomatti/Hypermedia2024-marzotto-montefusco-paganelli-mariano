<template>
    <div class="bg-white min-h-screen">
      <!-- <header class="bg-white shadow">
        <div class="container mx-auto py-4">
          <h1 class="text-2xl font-semibold text-gray-800">
            
          </h1>
        </div>
      </header> -->
      <main class="container mx-auto py-8">
        <div class="flex space-x-4">
          <ul v-for="section in sections" :key="section.title">
            <li>
                <SectionCard
                :title="section.title"
                :description="section.description"
                :imageUrl="section.imageUrl"
                />
            </li>
          </ul>
        </div>
        
      </main>
    </div>
  </template>

  <script setup>    
    const sections = ref([
      {
          title: "People",
          description: "people description people description people description people description people description people description",
            imageUrl: "/group_pic.jpeg",
      },
      {
          title: "Services",
          description: "services description services description services description services description services description services description",
            imageUrl: "/group_pic.jpeg",
      },
      {
          title: "Projects",
          description: "projects description projects description projects description projects description projects description projects description",
            imageUrl: "/group_pic.jpeg",
      },
    ]

  )
  </script>
  
  <style scoped>
  </style>
  