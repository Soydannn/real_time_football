<template>
    <footer class="bg-gray-900 text-gray-300 py-10 mt-10">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-50">
  
        <!-- Logo -->
        <div>
          <h2 class="text-2xl font-bold text-white">Football News</h2>
          <p class="mt-2 text-sm text-gray-400">
            Le meilleur agrégateur d’actualités football en temps réel.
          </p>
        </div>
  
        <!-- Menu rapide -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-3">Menu rapide</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <router-link to="/" class="hover:text-blue-400" :class="isActive('/')">Accueil</router-link>
            </li>
            <li>
              <router-link to="/stats" class="hover:text-blue-400" :class="isActive('/stats')">Statistiques</router-link>
            </li>
          </ul>
        </div>
  
        <!-- Mentions légales -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-3">Mentions légales</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <router-link to="/mentions" class="hover:text-blue-400">Mentions légales</router-link>
            </li>
            <li>
              <router-link to="/confidentialite" class="hover:text-blue-400">Politique de confidentialité</router-link>
            </li>
            <li>
              <router-link to="/cookies" class="hover:text-blue-400">Gestion des cookies</router-link>
            </li>
          </ul>
        </div>
  
      </div>
  
      <!-- Bas de page -->
      <div class="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © 2025 Football News — Tous droits réservés.
      </div>
    </footer>
  </template>
  
  <script setup>
    import { useRoute } from 'vue-router'
    const route = useRoute()

    const isActive = (path) => {
        return route.path === path ? 'text-blue-400 font-bold' : ''
    }
  </script>
