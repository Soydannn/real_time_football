<template>
    <header class="bg-gray-900 text-white py-4 shadow-md">
      <nav class="container mx-auto flex items-center justify-between px-4">
        <router-link to="/" class="hover:text-blue-400 text-xl font-bold">Football News
        </router-link>
        <ul class="flex space-x-6">
            <li>
                <router-link to="/" class="hover:text-blue-400 font-bold" :class="isActive('/')">Accueil
                </router-link>
            </li>
            <li>
                <router-link to="/stats" class="hover:text-blue-400 font-bold" :class="isActive('/stats')">Statistiques
                </router-link>
            </li>
        </ul>
  
      </nav>
    </header>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  
  // Ajoute une classe spéciale au lien actif
  const isActive = (path) => {
    return route.path === path ? 'text-blue-400 font-bold' : ''
  }
  </script>
  