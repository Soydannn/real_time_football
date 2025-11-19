<template>
    <div class="border p-4 rounded shadow mb-4">
      <h2 class="text-lg font-bold">{{ article.title }}</h2>
      <p class="text-sm text-gray-600">{{ article.summary }}</p>
      <p class="text-xs text-gray-400">{{ article.published_at }}</p>
      <a :href="article.url" target="_blank" class="text-blue-500 mt-2 inline-block">Voir article</a>
    </div>
  </template>
  
  <script setup>
  defineProps({
    article: Object
  })
  </script>