<template>
    <section class="bg-white py-12 px-12">
    <h2 class="text-4xl font-semibold text-center text-gray-800 mb-12">Our Mission</h2>
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <!-- Mission Block -->
          <div class="flex flex-col items-center">
            <img src="assets/img/goal.png" alt="Mission Icon" class="h-24 w-24 mb-4"/>
            <h3 class="text-2xl font-bold text-gray-800 mb-2"><span class="text-bleck">Why?</span></h3>
            <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
          </div>
          <!-- Vision Block -->
          <div class="flex flex-col items-center">
            <img src="assets/img/helpline.png" alt="Vision Icon" class="h-24 w-24 mb-4"/>
            <h3 class="text-2xl font-bold text-gray-800 mb-2"><span class="text-black">How?</span></h3>
            <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
          </div>
          <!-- Values Block -->
          <div class="flex flex-col items-center">
            <img src="/assets/img/ancestors.png" alt="Values Icon" class="h-24 w-24 mb-4"/>
            <h3 class="text-2xl font-bold text-gray-800 mb-2"><span class="text-black">Who?</span></h3>
            <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'MissionVisionValuesSection',
  };
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  