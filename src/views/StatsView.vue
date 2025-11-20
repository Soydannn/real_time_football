<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Statistiques Football</h1>

    <StatsChart
      title="Top équipes les plus mentionnées"
      :labels="teamLabels"
      :data="teamData"
    />

    <StatsChart
      title="Nombre d'articles par source"
      :labels="sourceLabels"
      :data="sourceData"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useArticlesStore } from '../stores/articles'
import StatsChart from '../components/StatsChart.vue'

const store = useArticlesStore()

// Calculer les stats
const teamCounts = computed(() => {
  const counts = {}
  store.articles.forEach(a => {
    a.teams.forEach(t => {
      counts[t] = (counts[t] || 0) + 1
    })
  })
  return counts
})

const teamLabels = computed(() => Object.keys(teamCounts.value))
const teamData = computed(() => Object.values(teamCounts.value))

const sourceCounts = computed(() => {
  const counts = {}
  store.articles.forEach(a => {
    counts[a.source] = (counts[a.source] || 0) + 1
  })
  return counts
})

const sourceLabels = computed(() => Object.keys(sourceCounts.value))
const sourceData = computed(() => Object.values(sourceCounts.value))
</script>
