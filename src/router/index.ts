import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/player', name: 'player', component: () => import('../views/player.vue') },
    { path: '/about', name: 'about', component: () => import('../views/about.vue') },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/notfound.vue') }
  ]
})

export default router