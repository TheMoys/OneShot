<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <section class="hero-section">
      <img src="../assets/Banner 1.svg" alt="Background" class="hero-background">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          dictum magna est, porttitor tincidunt sapien sodales sit amet.
          Vestibulum consequat nisl
        </p>
        <button class="hero-btn">VER</button>
      </div>
    </section>

    <!-- Marquee Separator -->
    <section class="marquee-section">
      <div class="marquee-content">
        <span class="marquee-text">ONESHOT PRODUCTIONS • ONESHOT PRODUCTIONS • ONESHOT PRODUCTIONS • ONESHOT PRODUCTIONS
          • ONESHOT PRODUCTIONS • ONESHOT PRODUCTIONS • </span>
        <span class="marquee-text">ONESHOT PRODUCTIONS • ONESHOT PRODUCTIONS • ONESHOT PRODUCTIONS • ONESHOT PRODUCTIONS
          • ONESHOT PRODUCTIONS • ONESHOT PRODUCTIONS • </span>
      </div>
    </section>

    <!-- Productions Section -->
    <section class="productions-section">
      <div class="productions-content">
        <h2 class="productions-title">PRODUCTIONS</h2>
        <router-link to="/producciones" class="productions-banner">
          <img src="../assets/Banner_productions.svg" alt="Productions">
        </router-link>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="services-content">
        <div class="services-header">
          <h2 class="services-title">SERVICIOS</h2>
        </div>
        <router-link to="/servicios" class="services-banner">
          <img src="../assets/Servicios_banner.svg" alt="Servicios">
        </router-link>
      </div>
    </section>

    <!-- Videos Section -->
    <section class="max-w-6xl mx-auto py-20 px-8">
      <h2 class="text-4xl font-bold mb-8">Últimos vídeos</h2>
      <VideoList :videoIds="['dQw4w9WgXcQ', '3JZ_D3ELwOQ']" />
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import VideoList from '../components/VideoList.vue'
import '../assets/styles/home.css'

export default {
  name: 'Home',
  components: {
    Navbar,
    VideoList
  }
}
</script>