<script setup lang="ts">
import { RouterView } from 'vue-router'
import navbar from './components/layout/navbar.vue'
import footerr from './components/layout/footer.vue'
</script>

<template>
  <header>
    <navbar></navbar>
  </header>
 <div style="min-height: 100vh;">
   <RouterView />
 </div>

  <footerr></footerr>
  
</template>

<style scoped>

</style>
