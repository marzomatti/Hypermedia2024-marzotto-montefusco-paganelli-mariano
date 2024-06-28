<template>
  <footer class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between">
        <!-- About Us Section -->
        <div class="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 class="text-xl font-bold mb-4">About us</h2>
          <p class="text-gray-400">
            Sed ut perspiciatis unde omnis iste natus error accusantium doloremque laudantium, totam rem
            ipsa quae ab illo inventore veritatis et quasi architecto vitae dicta sunt explicabo
          </p>
          <button class="mt-4 bg-gray-800 text-white px-4 py-2">Read more</button>
        </div>
        <!-- Subscribe Section -->
        <div class="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 class="text-xl font-bold mb-4">Subscribe To Our Newsletter</h2>
          <p class="text-gray-400">
            Subscribe to our newsletter and get exclusive deals you won't find anywhere else straight to your inbox!
          </p>
          <div class="mt-4">
            <input type="email" placeholder="Email address" class="bg-gray-800 text-white px-4 py-2 w-full" />
            <button class="mt-2 bg-gray-800 text-white px-4 py-2 w-full">Subscribe</button>
          </div>
        </div>
        <!-- Links Section -->
        <div class="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 class="text-xl font-bold mb-4">Links</h2>
          <ul class="text-gray-400">
            <li><a href="#" class="block mb-2">How to Buy Firearms Online?</a></li>
            <li><a href="#" class="block mb-2">How to Buy Ammunition?</a></li>
            <li><a href="#" class="block mb-2">Terms and Conditions</a></li>
            <li><a href="#" class="block mb-2">Shipping & Returns</a></li>
            <li><a href="#" class="block mb-2">About Us</a></li>
            <li><a href="#" class="block mb-2">Contact Us</a></li>
            <li><a href="#" class="block">Sitemap</a></li>
          </ul>
        </div>
        <!-- Contact Section -->
        <div class="w-full md:w-1/4">
          <h2 class="text-xl font-bold mb-4">Contact us</h2>
          <ul class="text-gray-400">
            <li class="mb-2"><i class="fas fa-map-marker-alt"></i> 912 Fremont St Apt 2, Manhattan, KS 66502, United States of America</li>
            <li class="mb-2"><i class="fas fa-phone-alt"></i> (123) 454-789</li>
            <li class="mb-2"><i class="fas fa-envelope"></i> info@companyname.com</li>
          </ul>
          <div class="mt-4">
            <img src="/public/legal_team.jpg" alt="Map" class="w-full h-32 object-cover"/>
          </div>
        </div>
      </div>
      <!-- Footer Bottom -->
      <div class="mt-8 flex flex-wrap justify-between items-center border-t border-gray-800 pt-4">
        <p class="text-gray-400 text-sm">&copy; Copyright 2024</p>
        <div class="flex space-x-4 text-gray-400">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
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
footer a:hover {
  text-decoration: underline;
}
</style>
