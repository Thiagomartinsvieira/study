<template>
  <div>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="currentImgUrl" alt="Pokemon Image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ formattedName }}</p>
            <p class="subtitle is-6">{{ pokemon.type }}</p>
          </div>
        </div>
        <div class="content">
            <button class="button is-medium is-responsive" @click="changeSprite">
                  Change Sprite
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  name: String,
  url: String,
  num: Number
});

const formattedName = props.name ? props.name.charAt(0).toUpperCase() + props.name.slice(1) : '';
const frontImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + props.num + '.svg';
const backImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/' + props.num + '.png';

const pokemon = ref({ type: 'Loading...' });
const isFront = ref(true);
const currentImgUrl = ref(frontImageUrl);

const fetchData = async () => {
  try {
    console.log('Requesting data from API...');
    const response = await axios.get(props.url);
    pokemon.value.type = response.data.types[0].type.name; 
  } catch (error) {
    console.log('Error fetching data', error);
    pokemon.value.type = 'Unknown'; 
  }
};

const changeSprite = () => {
    if (isFront.value) {
        currentImgUrl.value = backImageUrl;
    } else {
        currentImgUrl.value = frontImageUrl;
    }
    isFront.value = !isFront.value;
}

onMounted(() => {
  if (pokemon.value.type === 'Loading...') { 
    fetchData();
  }
});
</script>

<style scoped>

</style>
