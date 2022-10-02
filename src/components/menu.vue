<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
    <li class="mr-3">
      <a class="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
    </li>
    <li class="mr-3">
      <RouterLink to="/" class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
        Início
      </RouterLink>
    </li>
    <li class="mr-3">
      <RouterLink to="/about" class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">
        Sobre
      </RouterLink>
      <a  href="#">link</a>
    </li>
  </ul>
</template>