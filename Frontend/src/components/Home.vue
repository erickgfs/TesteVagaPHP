<script setup>
const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="home-container"> 
    <span>Clique em procurar CEP para realizar uma pesquisa</span>

    <nav>
        <RouterLink to="/search">Procurar CEP</RouterLink>
    </nav>
  </div>

</template>

<style scoped>
  .home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
</style>
