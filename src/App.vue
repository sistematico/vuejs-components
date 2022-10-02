<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from './components/menu.vue'
</script>
<template>
  <nav class="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
    <div class="container mx-auto flex flex-wrap items-center">
      <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
        <a class="transition-all duration-500 ease-in-out text-gray-500 no-underline hover:text-white hover:no-underline" href="#">
          <span class="text-2xl pl-2">
            Vue Components
          </span>
        </a>
      </div>
      <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
        <Menu />
      </div>
    </div>
  </nav>
  <div class="container mx-auto mt-24 md:mt-16 h-screen">
    <RouterView />
  </div>
</template>