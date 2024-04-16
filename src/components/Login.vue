<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import router from '../router'
import { useUserStore } from '@/stores/UserStore'
// import VBtn from 'vuetify/lib/components/VBtn';

const props = ref({
    email: '',
    password: '',
    // rememberMeToken: false,
})

function login(){
    axios.post('http://127.0.0.1:8000/login', props.value, {
    })
    .then(response => {
        console.log('Response: ', response);

        useUserStore().setToken(response.data.access_token);
        useUserStore().setUser(response.data.user);

        router.push('/about');
    })
    .catch(error => {
        console.error('Error: ', error);
        console.log('Response: ', error.response.data);

        alert(error.response.data.errors.email);
    });
}
</script>

<template>
    <div class="greetings">
        <form @submit.prevent="login">
            <label for="name">email</label><br>
            <input type="text" id="name" v-model="props.email" />
            <br>
            <label for="pass">password</label><br>
            <input type="password" id="pass" v-model="props.password" />
            <br><br>
            <!-- <input type="checkbox" id="rememberMe" v-model="props.rememberMeToken" />&nbsp
            <label for="rememberMe">Remember me </label>
            <br> -->
            <input type="submit" value="Log in" />
            <br>
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
