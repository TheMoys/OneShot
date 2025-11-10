<template>
  <nav>
    <div class="nav-container">
      <!-- Logo -->
      <router-link to="/" class="nav-logo">
        <span class="logo-one">ONE</span>
        <span class="logo-shot">SHOT</span>
      </router-link>

      <!-- Desktop Navigation Links -->
      <div class="nav-links">
        <router-link to="/contacto">contacto</router-link>
        <router-link to="/producciones">programas</router-link>
        <router-link to="/chat" class="chat-link">chat</router-link>
        <router-link to="/galeria">galería</router-link>
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
      <router-link to="/contacto" @click="toggleMenu">contacto</router-link>
      <router-link to="/producciones" @click="toggleMenu">programas</router-link>
      <router-link to="/chat" @click="toggleMenu">chat</router-link>
      <router-link to="/galeria" @click="toggleMenu">galería</router-link>
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