<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
// import VBtn from 'vuetify/lib/components/VBtn';

const props = ref({
    name: '',
    email: '',
    password: '',
    password2: '',
    followers: 0,
    following: 0,
})

const buttonClicked = ref(false);

function validatePass(){
    return props.value.password === props.value.password2;
}

function signin(event){
    if(!validatePass()){
        event.preventDefault();
    }

    alert('hello');
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
        <form @submit.prevent="signin">
            <label for="name">username</label><br>
            <input type="text" id="name" v-model="props.name" />
            <br>
            <label for="email">email</label><br>
            <input type="text" id="email" v-model="props.email" />
            <br>
            <label for="pass">password</label><br>
            <input type="password" id="pass" v-model="props.password" />
            <br>
            <label for="pass2">confirm password</label><br>
            <input type="password" id="pass2" :class="{ 'error': buttonClicked.valueOf() && !validatePass() }"
                @input="validatePass" v-model="props.password2" />
            <br>
            <span v-if="buttonClicked.valueOf() && !validatePass()" class="error-message">Passwords do not match</span>
            <br>
            <input type="submit" @click="buttonClicked = true" value="Sign in" />
            <nav><RouterLink to="/login">Back to login</RouterLink></nav>
        </form>
    </div>
</template>

<style scoped>
.error-message {
    color: red;
}

.error {
    border: 1px solid red
}

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
