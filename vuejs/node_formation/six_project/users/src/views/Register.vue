<template>
  <div>
    <h2>User Register</h2>
    <hr>

    <div class="columns is-centered">
      <div class="column is-half">
        <div v-if="error">
          <div class="notification is-danger">
            {{error}}
          </div>
        </div>
        
        <p>Name:</p>
        <input type="text" placeholder="User name" class="input" v-model="name">
        <p>Email:</p>
        <input type="email" placeholder="email@example.com" class="input" v-model="email">
        <p>Password:</p>
        <input type="password" placeholder="*********" class="input" v-model="password">
        <hr>
        <button class="button is-success" @click="register">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      password: '',
      email: '',
      error: null, 
    };
  },
  methods: {
    register() {
      
      this.error = null;

      if (!this.name || !this.email || !this.password) {
        this.error = 'Please fill out all fields.';
        return;
      }

      axios.post('http://localhost:8686/user', {
        name: this.name,
        password: this.password,
        email: this.email,
      })
      .then(res => {
        console.log(res);
       
        this.$router.push({ name: 'home' });
      })
      .catch(error => {
        if (error.response && error.response.data && error.response.data.error) {
      
          this.error = error.response.data.error;
        } else {
        
          this.error = 'An error occurred while registering.';
        }
        console.error(error);
      });
    },
  },
};
</script>

<style>

</style>
