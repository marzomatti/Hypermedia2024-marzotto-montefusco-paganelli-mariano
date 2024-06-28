<template>
  <footer class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:space-y-0 space-y-6 mb-8">
        <div>
          <Logo />
          <p class="mr-3.5 px-3.5 mt-4 text-gray-700">
            We are dedicated to supporting women affected by violence. Our mission is to provide a safe haven and comprehensive support services to help women rebuild their lives free from fear and abuse.
          </p>
        </div>
        <div class="flex justify-between md:flex-row flex-col md:space-y-0 space-y-6">
          <div class="flex md:flex-col flex-row md:items-center md:space-x-0 space-x-6 space-y-0 md:space-y-8 md:w-1/3">
            <h1 class="text-gray-800 font-bold md:basis-0 w-1/3 md:w-auto">Pages</h1>
            <ul class="w-full space-y-2">
              <li>
                <div class="flex flex-row md:justify-center">
                  <NuxtLink to="/portfolio"
                    class="text-gray-700 hover:text-gray-900 active:font-bold hover:transform hover:scale-105 hover:font-bold transition duration-200">
                    Portfolio
                  </NuxtLink>
                </div>
              </li>
              <li>
                <div class="flex flex-row md:justify-center">
                  <NuxtLink to="/areas"
                    class="text-gray-700 hover:text-gray-900 active:font-bold hover:transform hover:scale-105 hover:font-bold transition duration-200">
                    Areas
                  </NuxtLink>
                </div>
              </li>
              <li>
                <div class="flex flex-row md:justify-center">
                  <NuxtLink to="/team"
                    class="text-gray-700 hover:text-gray-900 active:font-bold hover:transform hover:scale-105 hover:font-bold transition duration-200">
                    Our Team
                  </NuxtLink>
                </div>
              </li>
              <li>
                <div class="flex flex-row md:justify-center">
                  <NuxtLink to="/about"
                    class="text-gray-700 hover:text-gray-900 active:font-bold hover:transform hover:scale-105 hover:font-bold transition duration-200">
                    About Us
                  </NuxtLink>
                </div>
              </li>
            </ul>
          </div>
          <div class="flex md:flex-col flex-row md:items-center md:space-x-0 space-x-6 space-y-0 md:space-y-8 md:w-1/3">
            <h1 class="text-gray-800 font-bold md:basis-0 w-1/3 md:w-auto">Contacts</h1>
            <ul class="w-full space-y-2">
              <li class="text-gray-700">
                <div class="flex flex-row md:justify-center">
                  Email: nowoman@alone.com
                </div>
              </li>
              <li class="text-gray-700">
                <div class="flex flex-row md:justify-center">
                  Tel: +12 123 456 789
                </div>
              </li>
              <li class="text-gray-700">
                <div class="flex flex-row md:justify-center">
                  Via Larga 12, Milan Italy
                </div>
              </li>
              <li class="py-2">
                <div class="flex flex-row md:justify-center">
                  <NuxtLink to="/contact"
                    class="py-2 px-4 my-auto bg-primary-color text-white hover:text-primary-color hover:bg-white text-sm border-2 border-primary-color rounded-full transition ease-in-out duration-200">
                    Stay in Touch
                  </NuxtLink>
                </div>
              </li>
            </ul>
          </div>
          <div class="flex md:flex-col flex-row md:items-center md:space-x-0 space-x-6 space-y-0 md:space-y-8 md:w-1/3">
            <h1 class="text-gray-800 font-bold md:basis-0 w-1/3 md:w-auto">Follow Us</h1>
            <ul class="w-full space-y-2">
              <li>
                <div class="flex flex-row md:justify-center">
                  <NuxtLink to="/"
                    class="text-gray-700 hover:text-gray-900 active:font-bold hover:transform hover:scale-105 hover:font-bold transition duration-200">
                    Facebook
                  </NuxtLink>
                </div>
              </li>
              <li>
                <div class="flex flex-row md:justify-center">
                  <NuxtLink to="/"
                    class="text-gray-700 hover:text-gray-900 active:font-bold hover:transform hover:scale-105 hover:font-bold transition duration-200">
                    Twitter
                  </NuxtLink>
                </div>
              </li>
              <li>
                <div class="flex flex-row md:justify-center">
                  <NuxtLink to="/"
                    class="text-gray-700 hover:text-gray-900 active:font-bold hover:transform hover:scale-105 hover:font-bold transition duration-200">
                    Instagram
                  </NuxtLink>
                </div>
              </li>
              <li>
                <div class="flex flex-row md:justify-center">
                  <NuxtLink to="/"
                    class="text-gray-700 hover:text-gray-900 active:font-bold hover:transform hover:scale-105 hover:font-bold transition duration-200">
                    LinkedIn
                  </NuxtLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="w-full border-gray-300 my-1 mt-12">
      <div class="flex justify-center md:flex-row flex-col md:space-x-4 space-x-0 items-center text-gray-600">
        <p>
          Copyright &copy; 2024 No Woman Alone
        </p>
        <p class="hidden md:block mx-2">|</p>
        <p>
          All Rights Reserved
        </p>
        <p class="hidden md:block mx-2">|</p>
        <NuxtLink to="/" class="hover:text-gray-900 underline">
          Terms and Conditions
        </NuxtLink>
        <p class="hidden md:block mx-2">|</p>
        <NuxtLink to="/" class="hover:text-gray-900 underline">
          Privacy Policy
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.bg-primary-color {
  background-color: #ff4c4c;
}

.text-primary-color {
  color: #ff4c4c;
}

a:hover {
  color: #d32f2f;
}

hr {
  border-color: #e2e8f0;
}
</style>
