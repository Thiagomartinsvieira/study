<template>
  <div>
   
  </div>
  
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'

const pokemons = ref([])

const created = async() => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    
    pokemons.value = response.data.results
  } catch (error) {
    console.log('Error fetching data', error)
  }
}
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
