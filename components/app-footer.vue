<template>
  <footer class="bg-header-bg-color py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:space-y-0 space-y-6">
        <div>
          <Logo />
          <p class="mr-3.5 px-3.5 mt-4 text-blue">
            We are dedicated to supporting women affected by violence. Our mission is to provide a safe haven and comprehensive support services to help women rebuild their lives free from fear and abuse.
          </p>
        </div>
        <div class="flex justify-between md:flex-row flex-col md:space-y-0 space-y-6">
          <div class="flex md:flex-col flex-row md:items-center md:space-x-0 space-x-6 space-y-0 md:space-y-8 md:w-1/3">
            <h1 class="text-blue font-bold md:basis-0 w-1/3 md:w-auto">Pages</h1>
            <ul class="w-full space-y-2">
              <li>
                <div class="flex flex-row md:justify-center">
                  <NuxtLink to="/activities"
                    class="text-blue hover:text-secondary-color active:font-bold hover:transform hover:scale-105 hover:font-bold transition duration-200">
                    Activities
                  </NuxtLink>
                </div>
              </li>
              <li>
                <div class="flex flex-row md:justify-center">
                  <NuxtLink to="/team"
                    class="text-blue hover:text-secondary-color active:font-bold hover:transform hover:scale-105 hover:font-bold transition duration-200">
                    Our Team
                  </NuxtLink>
                </div>
              </li>
              <li>
                <div class="flex flex-row md:justify-center">
                  <NuxtLink to="/virtual-assistant"
                    class="text-blue hover:text-secondary-color active:font-bold hover:transform hover:scale-105 hover:font-bold transition duration-200">
                    Virtual Assistant
                  </NuxtLink>
                </div>
              </li>
              <li>
                <div class="flex flex-row md:justify-center">
                  <NuxtLink to="/about-us"
                    class="text-blue hover:text-secondary-color active:font-bold hover:transform hover:scale-105 hover:font-bold transition duration-200">
                    About Us
                  </NuxtLink>
                </div>
              </li>
            </ul>
          </div>
          <div class="flex md:flex-col flex-row md:items-center md:space-x-0 space-x-6 space-y-0 md:space-y-8 md:w-1/3">
            <h1 class="text-blue font-bold md:basis-0 w-1/3 md:w-auto">Contacts</h1>
            <ul class="w-full space-y-2">
              <li class="text-blue">
                <div class="flex flex-row md:justify-center">
                  Email: no@alone.com
                </div>
              </li>
              <li class="text-blue">
                <div class="flex flex-row md:justify-center">
                  Tel: +39 123 4567890
                </div>
              </li>
              <li class="text-blue">
                <div class="flex flex-row md:justify-center">
                  Via G. Celoria 3, Milan Italy
                </div>
              </li>
              <li class="py-2">
                <div class="flex flex-row md:justify-center">
                  <NuxtLink to="/contact-us"
                    class="inline-block border-2 border-secondary-color text-secondary-color px-6 py-3 rounded-full font-semibold hover:text-white hover:bg-secondary-color transition duration-300">
                    Stay in Touch
                  </NuxtLink>
                </div>
              </li>
            </ul>
          </div>
          <div class="flex md:flex-col flex-row md:items-center md:space-x-0 space-x-6 space-y-0 md:space-y-8 md:w-1/3">
            <h1 class="text-blue font-bold md:basis-0 w-1/3 md:w-auto">Follow Us</h1>
            <ul class="w-full space-y-2">
              <li>
                <div class="flex flex-row md:justify-center">
                  <NuxtLink to="https://it-it.facebook.com/"
                    class="text-blue hover:text-secondary-color active:font-bold hover:transform hover:scale-105 hover:font-bold transition duration-200">
                    Facebook
                  </NuxtLink>
                </div>
              </li>
              <li>
                <div class="flex flex-row md:justify-center">
                  <NuxtLink to="https://www.instagram.com"
                    class="text-blue hover:text-secondary-color active:font-bold hover:transform hover:scale-105 hover:font-bold transition duration-200">
                    Instagram
                  </NuxtLink>
                </div>
              </li>
              <li>
                <div class="flex flex-row md:justify-center">
                  <NuxtLink to="https://www.twitter.com"
                    class="text-blue hover:text-secondary-color active:font-bold hover:transform hover:scale-105 hover:font-bold transition duration-200">
                    𝕏
                  </NuxtLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="w-full border-gray-300 my-1 mt-4">
      <div class="flex justify-center md:flex-row flex-col md:space-x-4 space-x-0 items-center text-blue mt-4">
        <p>
          Copyright &copy; 2024 No Woman Alone
        </p>
        <p class="hidden md:block mx-2">|</p>
        <p>
          All Rights Reserved
        </p>
        <p class="hidden md:block mx-2">|</p>
        <NuxtLink to="/" class="hover:text-blue underline">
          Terms and Conditions
        </NuxtLink>
        <p class="hidden md:block mx-2">|</p>
        <NuxtLink to="/" class="hover:text-blue underline">
          Privacy Policy
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>

</style>
