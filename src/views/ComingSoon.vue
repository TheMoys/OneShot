<template>
  <div>
    <Navbar />
    
    <section class="coming-soon-section">
      <div class="coming-soon-overlay"></div>
      <div class="coming-soon-content">
        <h1 class="coming-soon-title">
          <span class="text-lime">LO </span> 
          <span class="text-white">SENTIMOS</span>
        </h1>
        <p class="coming-soon-description">
          Aún no está disponible esta sección...
        </p>
        <p class="coming-soon-subtitle">
          Mantente alerta porque pronto habrán cositas nuevas 👀
        </p>
        <router-link to="/" class="coming-soon-btn">
          VOLVER AL INICIO
        </router-link>
      </div>
      <img v-if="backgroundImage" :src="backgroundImage" alt="Coming Soon" class="coming-soon-background">
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import '../assets/styles/coming-soon.css'

export default {
  name: 'ComingSoon',
  components: {
    Navbar
  },
  props: {
    backgroundImage: {
      type: String,
      default: null
    }
  }
}
</script>