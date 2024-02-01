<template>
  <div>
    <h2>Register: </h2>
    <small id="nameError" v-show="thereIsAnError">The name is invalid, try again</small><br>
    <input type="text" placeholder="name" v-model="nameField"> <br>
    <input type="email" placeholder="email" v-model="emailField"><br>
    <input type="number" placeholder="age" v-model="ageField"><br>
    <button @click="registerUser">Register</button>
    <hr>
    <Client v-for="(client, index) in clients" :key="client.id" :client="client" @onMeDelete="deleteUser(client.id)" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Client from './components/Client.vue';

const nameField = ref('');
const emailField = ref('');
const ageField = ref(0);
const thereIsAnError = ref(false);

const clients = ref([
  {
    id: 1,
    name: 'Lucas Vieira',
    email: 'lucas@email.com',
    age: 20
  },
  {
    id: 2,
    name: 'Sisleide Costa',
    email: 'sisleide@email.com',
    age: 60
  }
]);

const registerUser = () => {
  if (nameField.value === '' || nameField.value.length < 3) {
    thereIsAnError.value = true;
  } else {
    clients.value.push({
      id: Date.now(),
      name: nameField.value,
      email: emailField.value,
      age: ageField.value
    });
    thereIsAnError.value = false;
  }

  nameField.value = '';
  emailField.value = '';
  ageField.value = 0;
};

const deleteUser = (clientId) => {
  console.log('Received event from child component with ID:', clientId);
};
</script>

<style scoped>
#nameError {
  color: red;
}
</style>
