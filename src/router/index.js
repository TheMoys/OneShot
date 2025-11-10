import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Chat from '../views/Chat.vue'
import Contacto from '../views/Contacto.vue'
import Galeria from '../views/Galeria.vue'
import Producciones from '../views/Producciones.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/chat', name: 'Chat', component: Chat },
  { path: '/contacto', name: 'Contacto', component: Contacto },
  { path: '/galeria', name: 'Galeria', component: Galeria },
  { path: '/producciones', name: 'Producciones', component: Producciones },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
