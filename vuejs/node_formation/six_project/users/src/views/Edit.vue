<template>
  <div>
    <h2>User Edit</h2>
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
        <button class="button is-success" @click="update">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  created(){


    var req = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }

    axios.get('http://localhost:8686/user/' + this.$route.params.id, req)
    .then(res => {
      console.log(res)

      this.name = res.data.name
      this.email = res.data.email
      this.id = res.data.id

    }).catch(error => {
      console.log(error.response)
      this.$router.push({name: 'Users'})
    })

  },
  data() {
    return {
      name: '',
      email: '',
      id: -1,
      error: undefined, 
    };
  },
  methods: {
    update() {

      var req = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }
      
      this.error = null;

      if (!this.name || !this.email || !this.password) {
        this.error = 'Please fill out all fields.';
        return;
      }

      axios.put('http://localhost:8686/user', {
        name: this.name,
        email: this.email,
        id: this.id
      }, req)
      .then(res => {
        console.log(res);
       
        this.$router.push({ name: 'Users' });
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
