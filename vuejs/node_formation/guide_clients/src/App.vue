<template>
  <div>
    <div v-for="(client, index) in clients" :key="client.id">
      <h1>{{index + 1}}</h1>
      <Client :client="client" />
      <hr>
      <h2>Edit: </h2>
      <input type="text" v-model="client.name">
      <input type="text" v-model="client.email">
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import Client from './components/Client.vue';

const thiagoClient = ref({
  name: "Thiago Vieira",
  email: 'thiago@email.com',
  age: 24
});
const clients = [
  {
    id:1,
    name: 'Lucas Vieira',
    email: 'lucas@email.com',
    age: 20
  },
   {
    id:2,
    name: 'Sisleide Costa',
    email: 'sisleide@email.com',
    age: 60
  },
   {
    id:3,
    name: 'Camilo Durval',
    email: 'camilo@email.com',
    age: 26
  },
   {
    id:4,
    name: 'Roberta Souza',
    email: 'roberta@email.com',
    age: 21
  },
   {
    id:5,
    name: 'Michael Scott',
    email: 'michael@email.com',
    age: 47
  },
  
]
</script>

<style>

</style>
