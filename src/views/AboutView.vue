<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const getUID = ref(null);
const delUID = ref(null);

function getUser() {
    axios.get('http://127.0.0.1:8000/users/' + getUID.value)
    .then(response => {
        // console.log(response.data.email);
        alert('success');
    }).catch(error => {
        console.error('Error: ', error);
        alert(error.response.data.error);
    });
}

function deleteUser() {
    axios.delete('http://127.0.0.1:8000/users/' + delUID.value)
    .then(response => {
        console.log(response.data);
        alert('success');
    }).catch(error => {
        console.error('Error: ', error);
        alert(error.response.data.error);
    });
}
</script>

<template>
  <form>
    <label for="getUID">test get single user by ID</label><br>
    <input type="getUID" id="getUID" v-model="getUID" />
    <br>
    <input type="submit" @click.prevent="getUser" value="Search" />
    <br><br>
    <label for="delUID">test delete user by ID</label><br>
    <input type="delUID" id="delUID" v-model="delUID" />
    <br>
    <input type="submit" @click.prevent="deleteUser" value="delete" />
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
