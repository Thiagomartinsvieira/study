<template>
  <div>
    <input type="text" v-model="thiagoClient.name">
    <input type="text" v-model="thiagoClient.email">
    <Client :client="thiagoClient" :showAge="true" />
    <Client :client="thiagoClient" :showAge="true"/>
    <Client :client="thiagoClient" :showAge="false"/>
    <Client :client="thiagoClient" :showAge="false"/>
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
