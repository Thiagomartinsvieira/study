<template>
  <div>
    <h2>Login</h2>
    <hr>

    <div class="columns is-centered">
      <div class="column is-half">
        <div v-if="error">
          <div class="notification is-danger">
            {{error}}
          </div>
        </div>
        
        <p>Email:</p>
        <input type="email" placeholder="email@example.com" class="input" v-model="email">
        <p>Password:</p>
        <input type="password" placeholder="*********" class="input" v-model="password">
        <hr>
        <button class="button is-success" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      password: '',
      email: '',
      error: null, 
    };
  },
  methods: {
    login() {

       axios.post('http://localhost:8686/login', {
        password: this.password,
        email: this.email,
      })
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token)
       
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
