<script setup>
import Header from './components/HeaderView.vue';
import Footer from './components/FooterView.vue';
</script>

<template>

  <header>
    <Header />
  </header>
  <main>
    <RouterView />  
  </main>
  <footer>
    <Footer />
  </footer>

</template>