<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
// import VBtn from 'vuetify/lib/components/VBtn';

const props = ref({
    name: '',
    email: '',
    password: '',
})

function login(){
    alert("Login")
    // axios.post('http://127.0.0.1:8000/users', props.value, {
    // })
    // .then(response => {
    //     console.log('Response: ', response.data);
    //     alert('success');
    // })
    // .catch(error => {
    //     console.error('Error: ', error.response.data);
    // });
}
</script>

<template>
    <div class="greetings">
        <form @submit.prevent="login">
            <label for="name">username</label><br>
            <input type="text" id="name" v-model="props.name" />
            <br>
            <label for="pass">password</label><br>
            <input type="password" id="pass" v-model="props.password" />
            <br>
            <br><br>
            <input type="submit" value="Log in" />
            <nav><RouterLink to="/signup">New user?</RouterLink></nav>
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
