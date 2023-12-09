<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './layouts/Header.vue'
import Footer from './layouts/Footer.vue'
</script>

<template>
  <div>
    <Header></Header>
      <div class="main_content">
          <RouterView />
      </div>
    <Footer></Footer>
    
  
  </div>
 
</template>

<style scoped>

</style>
