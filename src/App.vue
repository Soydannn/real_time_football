<script setup>
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';
</script>

<template>

  <header>
    <HeaderView />
  </header>
  <main>
    <RouterView />  
  </main>
  <footer>
    <FooterView />
  </footer>

</template>