<template>
  <nav>
    <div class="nav-container">
      <!-- Logo -->
      <router-link to="/" class="nav-logo">
        <img src="../assets/One Shot logo_Negro.png" alt="OneShot Productions Logo" class="nav-logo">
      </router-link>

      <!-- Desktop Navigation Links -->
      <div class="nav-links">
        <router-link to="/contacto">Contacto</router-link>
        <router-link to="/producciones">Programas</router-link>
        <router-link to="/galeria">Galería</router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="mobile-menu-btn">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div :class="['mobile-menu', { active: isMenuOpen }]">
      <router-link to="/contacto" @click="toggleMenu">Contacto</router-link>
      <router-link to="/producciones" @click="toggleMenu">Programas</router-link>
      <router-link to="/galeria" @click="toggleMenu">Galería</router-link>
    </div>
  </nav>
</template>

<script>
import '../assets/styles/navbar.css'

export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>