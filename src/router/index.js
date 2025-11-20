import { createRouter, createWebHistory } from "vue-router"

import HomeView from "@/views/HomeView.vue"
import StatsView from '../views/StatsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatsView
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

export default router