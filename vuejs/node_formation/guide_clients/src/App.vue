<template>
  <div>
    <input type="text" v-model="thiagoClient.name">
    <input type="text" v-model="thiagoClient.email">
    <Client :name="thiagoClient.name" :email="thiagoClient.email" :age="thiagoClient.age" />
    <Client :name="thiagoClient.name" :email="thiagoClient.email" :age="thiagoClient.age" />
    <Client :name="thiagoClient.name" :email="thiagoClient.email" :age="thiagoClient.age" />
    <Client :name="thiagoClient.name" :email="thiagoClient.email" :age="thiagoClient.age" />
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
</script>

<style>

</style>
