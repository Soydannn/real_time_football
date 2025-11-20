<template>
    <ul>
      <li v-for="article in articles" :key="article.id" class="mb-4 p-4 border rounded shadow-sm hover:shadow-md transition">
        <h2 class="text-lg font-bold">{{ article.title }}</h2>
        <p class="text-gray-600">{{ article.summary }}</p>
        <p class="text-sm text-gray-400">{{ article.source }} — {{ new Date(article.published_at).toLocaleDateString() }}</p>
        <a :href="article.url" target="_blank" class="text-blue-500 hover:underline mt-2 inline-block">Voir l’article</a>
      </li>
    </ul>
  </template>
  
  <script setup>
  defineProps({
    articles: Array
  })
  </script>
  