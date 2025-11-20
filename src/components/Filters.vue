<template>
    <div class="flex gap-4 mb-4">
      <!-- Filtre Équipe -->
      <select v-model="selectedTeam" @change="emitFilters" class="border p-1 rounded">
        <option value="">Toutes les équipes</option>
        <option v-for="team in teams" :key="team" :value="team">{{ team }}</option>
      </select>
  
      <!-- Filtre Source -->
      <select v-model="selectedSource" @change="emitFilters" class="border p-1 rounded">
        <option value="">Toutes les sources</option>
        <option v-for="source in sources" :key="source" :value="source">{{ source }}</option>
      </select>
  
      <!-- Filtre Date -->
      <input type="date" v-model="selectedDate" @change="emitFilters" class="border p-1 rounded" />
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted } from 'vue'
  
  const props = defineProps({
    teams: Array,
    sources: Array
  })
  const emit = defineEmits(['filterChanged'])
  
  const selectedTeam = ref('')
  const selectedSource = ref('')
  const selectedDate = ref('')
  
  function emitFilters() {
    emit('filterChanged', { team: selectedTeam.value, source: selectedSource.value, date: selectedDate.value })
  }
  </script>
  