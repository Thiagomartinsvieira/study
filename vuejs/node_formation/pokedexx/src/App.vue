<template>
  <div>
    <div v-for="(poke, index) in pokemons" :key="index">
      <Pokemon :name="poke.name" :url="poke.url" :num="index + 1" />
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import Pokemon from './components/Pokemon.vue';
import { ref } from 'vue';

const pokemons = ref([]);

const created = async () => {
  try {
    console.log('Requesting data from API...');
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    console.log('Data received:', response.data.results);

    pokemons.value = response.data.results;
  } catch (error) {
    console.log('Error fetching data', error);
  }
};

const upper = (value) => {
  if (!value) return '';
  return value.charAt(0).toUpperCase() + value.slice(1);
};
</script>

<style scoped>

</style>
