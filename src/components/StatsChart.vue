<template>
    <div>
      <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
      <BarChart :chart-data="chartData" :chart-options="chartOptions" />
    </div>
  </template>
  
  <script setup>
  import { reactive, watch } from 'vue'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import { Bar } from 'vue-chartjs'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  const props = defineProps({
    title: String,
    data: Array,
    labels: Array
  })
  
  const chartData = reactive({
    labels: props.labels,
    datasets: [
      {
        label: props.title,
        backgroundColor: '#3B82F6',
        data: props.data
      }
    ]
  })
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  }
  
  watch(
    () => props.data,
    (newData) => {
      chartData.datasets[0].data = newData
    }
  )
  </script>
  
  <style scoped>
  div {
    height: 300px;
  }
  </style>
  