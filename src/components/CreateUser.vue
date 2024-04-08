<script setup>
import axios from 'axios';
import { ref } from 'vue'

const props = ref({
    name: '',
    email: '',
    password: '',
    followers: null,
    following: null,
})

function submitUser(){
    axios.post('http://127.0.0.1:8000/users', props.value, {
    })
    .then(response => {
        console.log('Response: ', response.data);
        alert('success');
    })
    .catch(error => {
        console.error('Error: ', error.response.data);
    });
}
</script>

<template>
    <div class="greetings">
        <form>
            <label for="name">name</label><br>
            <input type="text" id="name" v-model="props.name" />
            <br>
            <label for="email">email</label><br>
            <input type="text" id="email" v-model="props.email" />
            <br>
            <label for="pass">password</label><br>
            <input type="text" id="pass" v-model="props.password" />
            <br>
            <label for="followers">followers</label><br>
            <input type="number" id="followers" v-model.number="props.followers" />
            <br>
            <label for="following">following</label><br>
            <input type="number" id="following" v-model.number="props.following" />
            <br><br>
            <input type="submit" @click.prevent="submitUser" value="Submit user" />
        </form>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
