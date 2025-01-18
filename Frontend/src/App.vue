<template>
  <div class="container-page">
    <div class="page-form">
      <header>
        <img alt="Vue logo" class="logo" src="@/assets/cep-logo.png"  />
      </header>
      
      <RouterView />
    </div>
    <div class="result-search" v-if="$store.state.address.cep != ''">
      <span><b>bairro:</b> {{ $store.state.address.bairro }} </span>
      <span><b>cep:</b> {{ $store.state.address.cep }} </span>
      <span><b>complemento:</b> {{ $store.state.address.complemento }} </span>
      <span><b>ddd:</b> {{ $store.state.address.ddd }} </span>
      <span><b>estado:</b> {{ $store.state.address.estado }} </span>
      <span><b>gia:</b> {{ $store.state.address.gia }} </span>
      <span><b>ibge:</b> {{ $store.state.address.ibge }} </span>
      <span><b>localidade:</b> {{ $store.state.address.localidade }} </span>
      <span><b>logradouro:</b> {{ $store.state.address.logradouro }} </span>
      <span><b>regiao:</b> {{ $store.state.address.regiao }} </span>
      <span><b>siafi:</b> {{ $store.state.address.siafi }} </span>
      <span><b>uf:</b> {{ $store.state.address.uf }} </span>
      <span><b>unidade:</b> {{ $store.state.address.unidade }} </span>
    </div>
  </div>
</template>

<script>
import Search from './components/Search.vue';

  export default {
    name: 'App',
    components: {
      Search
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style scoped>
.page-form {
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 20px;
}

.container-page {
  display: flex;
  flex-direction: row;
}

.result-search {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.result-search b {
  font-weight: 900;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
