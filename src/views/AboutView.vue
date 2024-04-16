<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/UserStore';

const getUID = ref(null);
const delUID = ref(null);
const token = useUserStore().token;

axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

// const headers = {
//     'Authorization': 'Bearer ' + token,
//     // 'Content-Type' = 'application/json',
// };

function getUser() {
    axios.get('http://127.0.0.1:8000/users/' + getUID.value)
    .then(response => {
        console.log(response.data);
        alert('success');
    }).catch(error => {
        console.error('Error: ', error);
        alert(error.response.data.error);
    });
}

function deleteUser() {
    axios.delete('http://127.0.0.1:8000/auth/users/' + delUID.value)
    .then(response => {
        console.log(response.data);
        alert('success');
    }).catch(error => {
        console.error('Error: ', error);
        alert(error.response.data.error);
    });
}

function testMe() {
    // console.log('aboutToken: ', token)
    axios.post('http://127.0.0.1:8000/auth/me')
    .then(response => {
        console.log(response.data);
    }).catch(error => {
        console.error('Error: ', error);
        console.log(error.response.data);
    });
}

function logout() {
    axios.post('http://127.0.0.1:8000/auth/logout')
    .then(response => {
        useUserStore().clearToken();
        console.log(response.data);
    }).catch(error => {
        console.error('Error: ', error);
        console.log(error.response.data);
    });
}
</script>

<template>
  <form>
    <label for="getUID">test get single user by ID</label><br>
    <input type="getUID" id="getUID" v-model="getUID" />
    <br>
    <input type="submit" @click.prevent="getUser" value="search" />
    <br><br>
    <label for="delUID">test delete user by ID</label><br>
    <input type="delUID" id="delUID" v-model="delUID" />
    <br>
    <input type="submit" @click.prevent="deleteUser" value="delete" />
    <br><br>
    <label for="testMe">test '/me' route</label><br>
    <input type="submit" @click.prevent="testMe()" value="testMe" />
    <br><br>
    <label for="logout">test logout</label><br>
    <input type="submit" @click.prevent="logout()" value="logout" />
  </form>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
