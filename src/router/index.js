import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ComingSoon from '../views/ComingSoon.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: ComingSoon
  },
  {
    path: '/producciones',
    name: 'Producciones',
    component: ComingSoon
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: ComingSoon
  },
  {
    path: '/galeria',
    name: 'Galeria',
    component: ComingSoon
  },
  {
    path: '/chat',
    name: 'Chat',
    component: ComingSoon
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router