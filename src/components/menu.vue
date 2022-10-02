<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
    <li class="mr-3">
      <RouterLink 
        to="/" 
        class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4
          transition-all duration-700 ease-in-out"
      >
        Início
      </RouterLink>
    </li>
    <li class="mr-3">
      <RouterLink 
        to="/about" 
        class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
      >
        Sobre
      </RouterLink>
    </li>
  </ul>
</template>
<style scoped>

.router-link-active,
.router-link-exact-active {
   color: #fff;
 }

</style>