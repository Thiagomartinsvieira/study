<template>
  <div :class="{ 'client': !isPremium, 'client-premium': isPremium }">
    <h4>Name: {{ client.name }}</h4>
    <hr>
    <p>Email: {{ client.email }}</p>
    <p v-if="!showAge">Age: {{ client.age }}</p>
    <p v-else>The user has hidden their age.</p>
    <button @click="changeColor">Change color!</button>
    <button @click="issueEventDelete">Delete</button>
  </div>
</template>

<script setup>
import { defineProps, getCurrentInstance, ref } from 'vue';

const { props } = defineProps(['client', 'showAge']);
const instance = getCurrentInstance();

const isPremium = ref(false);

const changeColor = () => {
  isPremium.value = !isPremium.value;
}

const issueEventDelete = () => {
  console.log('Issue by children');
  if (instance) {
    instance.emit('onMeDelete', { clientId: props.client.id, course: 'Formation Node.js', onSale: true });
  }
}

const test = () => {
  console.log('testing for real')
  alert('This is an alert')
}
</script>

<style scoped>
.client, .client-premium {
  max-width: 700px;
  height: 200px;
  padding: 1%;
  margin-top: 4%;
}

.client {
  background-color: #ece5e3;
}

.client-premium {
  background-color: black;
  color: yellow;
}
</style>
