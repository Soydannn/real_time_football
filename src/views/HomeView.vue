<template>
  <div class="h-screen p-4">
    <h1 class="text-2xl font-bold mb-4">Actualités Football</h1>

    <Filters
      :teams="teams"
      :sources="sources"
      @filterChanged="applyFilters"
    />

    <div v-if="store.loading" class="text-gray-500">Chargement...</div>
    <ArticleList v-else :articles="filteredArticles" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useArticlesStore } from '../stores/articles'
import ArticleList from '../components/ArticleList.vue'
import Filters from '../components/Filters.vue'

const store = useArticlesStore()

const filteredArticles = ref([])
const teams = ref([])
const sources = ref([])

onMounted(async () => {
  await store.fetchArticles()
  filteredArticles.value = store.articles

  // Générer les listes uniques pour les filtres
  teams.value = [...new Set(store.articles.flatMap(a => a.teams))]
  sources.value = [...new Set(store.articles.map(a => a.source))]
})

function applyFilters({ team, source, date }) {
  filteredArticles.value = store.articles.filter(a => {
    const matchTeam = team ? a.teams.includes(team) : true
    const matchSource = source ? a.source === source : true
    const matchDate = date ? new Date(a.published_at).toISOString().slice(0,10) === date : true
    return matchTeam && matchSource && matchDate
  })
}
</script>
