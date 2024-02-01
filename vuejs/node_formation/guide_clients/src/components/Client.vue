<template>
  <div :class="{ 'client': !isPremium, 'client-premium': isPremium }">
    <h4>Name: {{ client.name }}</h4>
    <hr>
    <p>Email: {{ processEmail(client.email) }}</p>
    <p v-if="!showAge">Age: {{ client.age }}</p>
    <p v-else>The user has hidden their age.</p>
    <button @click="changeColor">Change color!</button><br>
    <button @click="issueEventDelete">Delete</button><br>
    <h3>Especial id: {{especialId}}</h3>
  </div>
</template>

<script setup>
import { defineProps, getCurrentInstance, ref, computed } from 'vue';

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

const processEmail = (email) => {
  return email.toUpperCase();
}


const computedProperties = {
  especialId: computed(() => {
    return (props.client.email + props.client.name + props.client.id).toUpperCase()
  })
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
