<template>
  <div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokémon logo" width="300px">
    <hr>
    <h4 class="is-size-4">Pokedex</h4>
    <br>
    <input class="input is-rounded" type="text" placeholder="Find pokemon by name" v-model="searchTerm">
    <br>
    <br>
    <button class="button is-fullwidth is-success" @click="search">Search</button>
    <div class="is-offset-one-quarter">
      <div v-for="(poke, index) in filteredPokemons" :key="index">
        <Pokemon :name="poke.name" :url="poke.url" :num="index + 1" />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import Pokemon from './components/Pokemon.vue';
import { ref, onMounted, computed } from 'vue';

const pokemons = ref([]);
const searchTerm = ref('');

const fetchData = async () => {
  try {
    console.log('Requesting data from API...');
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    pokemons.value = response.data.results;
  } catch (error) {
    console.log('Error fetching data', error);
  }
};

const search = () => {
  console.log('Searching for:', searchTerm.value);
}

onMounted(() => {
  if (pokemons.value.length === 0) {
    fetchData();
  }
});

const filteredPokemons = computed(() => {
  if (!searchTerm.value) {
    return pokemons.value;
  } else {
    return pokemons.value.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
  }
});
</script>

<style scoped>
#searchBtn {
  margin-top: 2%;
}
</style>
