import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
     component: AboutView
    },
    {
      path: '/thiago/',
      name: 'Thiago',
      component: Register,
      children: [
        {
          path: 'martins',
          name: 'Martins',
          component: AboutView
        }
      ]
    }
  ]
})

export default router
