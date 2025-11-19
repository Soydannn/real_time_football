<template>
    <div>
      <ArticleCard 
        v-for="(article, index) in articles" 
        :key="index" 
        :article="article" 
      />
    </div>
  </template>
  
  <script setup>
  import ArticleCard from './ArticleCard.vue'
  
  // Données mock pour test
  const articles = [
    {
      title: "Match important ce soir",
      summary: "Résumé du match et infos clés.",
      published_at: "2025-11-19",
      url: "#"
    },
    {
      title: "Transfert surprise",
      summary: "Un joueur change de club.",
      published_at: "2025-11-18",
      url: "#"
    }
  ]
  </script>