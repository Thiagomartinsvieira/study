<template>
  <div>
    <h1>Admin Panel</h1>

    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Position</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role | processRole }}</td>
          <td>
            <router-link :to="{name: 'UserEdit', params: {id: user.id} }"><button class="button is-success">Edit</button></router-link>
            <button class="button is-danger" @click="showModalUser(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

  <div :class="{modal: true, 'is-active': showModal}">
    <div class="modal-background"></div>
    <div class="modal-content">
    <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Do you really want do delete this user
    </p>
  </header>
  <div class="card-content">
    <div class="content">
    <p>Modal</p>
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item" @click="hideModal()">Canecel</a>
    <a href="#" class="card-footer-item" @click="deleUser()">Yes, i want to delete</a>
  </footer>
</div>
  </div>
  <button class="modal-close is-large" aria-label="close" @click="hideModal()"></button>
</div>


  </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };

    axios.get('http://localhost:8686/user', config)
      .then(res => {
        console.log(res);
        this.users = res.data;
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  },

  data() {
    return {
      users: [],
      showModal: false,
      deleteUserID: -1
    };
  },

  methods: {
    hideModal(){
      this.showModal = false
    },
    showModalUser(id){ 
      this.deleteUserID = id
      this.showModal = true
    },
    deleUser(){

    var req = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }

      
      axios.delete('http://localhost:8686/user/'+this.deleteUserID, req).then(res => {
        console.log(res)
        this.showModal = false
        this.users = this.users.filter(u => u.id != this.delete)
      }).catch(error => {
        console.log(error)
        this.showModal = false
      })
    }
  },

  filters: {
    processRole(value) {
      if (value === 0) {
        return 'Common User';
      } else if (value === 1) {
        return 'Admin User';
      } else {
        return 'Unknown';
      }
    },
  },
};
</script>

<style>

</style>
