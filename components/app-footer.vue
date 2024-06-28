<template>
  <footer class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
        <!-- Logo and Description -->
        <div>
          <Logo/>
          
          <div class="flex mt-4 space-x-4">
            <a href="#" aria-label="Facebook">
              <i class="fab fa-facebook fa-lg text-gray-600 hover:text-gray-800"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i class="fab fa-instagram fa-lg text-gray-600 hover:text-gray-800"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i class="fab fa-twitter fa-lg text-gray-600 hover:text-gray-800"></i>
            </a>
            <a href="#" aria-label="GitHub">
              <i class="fab fa-github fa-lg text-gray-600 hover:text-gray-800"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i class="fab fa-youtube fa-lg text-gray-600 hover:text-gray-800"></i>
            </a>
          </div>
        </div>
        <div class="flex gap-24 ml-80"> 
        <!-- Solutions -->
        <div>
          <h3 class="text-lg font-bold text-gray-800 mb-4 " >Solutions</h3>
          <ul class="text-gray-600 space-y-2">
            <li><a href="#" class="hover:underline">Marketing</a></li>
            <li><a href="#" class="hover:underline">Analytics</a></li>
            <li><a href="#" class="hover:underline">Commerce</a></li>
            <li><a href="#" class="hover:underline">Insights</a></li>
          </ul>
        </div>

        <!-- Support -->
          <div>
          <h3 class="text-lg font-bold text-gray-800 mb-4">Support</h3>
          <ul class="text-gray-600 space-y-2">
            <li><a href="#" class="hover:underline">Pricing</a></li>
            <li><a href="#" class="hover:underline">Documentation</a></li>
            <li><a href="#" class="hover:underline">Guides</a></li>
            <li><a href="#" class="hover:underline">API Status</a></li>
          </ul>
        </div>

                <!-- Company -->
                <div>
          <h3 class="text-lg font-bold text-gray-800 mb-4">Company</h3>
          <ul class="text-gray-600 space-y-2">
            <li><a href="#" class="hover:underline">About</a></li>
            <li><a href="#" class="hover:underline">Blog</a></li>
            <li><a href="#" class="hover:underline">Jobs</a></li>
            <li><a href="#" class="hover:underline">Press</a></li>
            <li><a href="#" class="hover:underline">Partners</a></li>
          </ul>
        </div>

               <!-- Legal -->
               <div>
          <h3 class="text-lg font-bold text-gray-800 mb-4">Legal</h3>
          <ul class="text-gray-600 space-y-2">
            <li><a href="#" class="hover:underline">Claim</a></li>
            <li><a href="#" class="hover:underline">Privacy</a></li>
            <li><a href="#" class="hover:underline">Terms</a></li>
          </ul>
        </div>
        </div>

 

 
      </div>
      <div class="mt-8 border-t pt-4">
        <p class="text-gray-600 text-center">Copyright &copy; 2024 No Woman Alone  |
            All Rights Reserved | Terms and Conditions  | Privacy Policy</p>
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
/* Additional styles if needed */
</style>
