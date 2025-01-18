<script setup>
const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
import { RouterLink } from 'vue-router'
import axios from "axios"

</script>

<template>
  <div class="search"> 
    <label> Digite o CEP </label>
    <input type="text" v-model="cep" v-mask="'#####-###'">
    <button class="search-button" @click="search(cep)">
      Pesquisar
    </button>

    <nav>
        <RouterLink to="/" @click="clean()"><- Voltar</RouterLink>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    data() {
      return {
        cep: ''
      }
    },
    methods: {
      search(cep) {
        var data = new FormData();

        data.append('cep', cep); 

        axios({
          method: "POST",
          url:"http://localhost:3000/viacep.php",
          data: data
        }).then((response) => {

          let newAddress = JSON.parse(response.data);
          this.$store.commit('storeAddress', newAddress);
        })
      },
      clean() {
        let cleanAddress = {
          bairro: "",
          cep: "",
          complemento: "",
          ddd: "",
          estado: "",
          gia: "",
          ibge: "",
          localidade: "",
          logradouro: "",
          regiao: "",
          siafi: "",
          uf: "",
          unidade: ""
      
        }
        this.$store.commit('storeAddress', cleanAddress);
      }
    }
  }
</script>

<style scoped>
  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  .search input[type=number]::-webkit-inner-spin-button {
    appearance: none;
  }

  .search-button {
    background-color: #29c929;
    padding: 8px;
    border-radius: 8px;
    font-weight: 700;
    transition: background-color 0.8s;
    cursor: pointer;
  }

  .search-button:hover {
    background-color: #87ff87;
    
  }
</style>
