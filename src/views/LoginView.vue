<script setup>
import Login from '../components/Login.vue'
// import Signup from '../components/Signup.vue'

// import ref from 'vue'

// const props = ref({
//     showLoginForm: true,
// })

// function toggleSignup(){
//     props.value.showLoginForm = !props.value.showLoginForm;
// }
</script>

<template>
    <main>
        <Login />
    </main>
</template>

<!-- <template>
    <main>
        <template v-if="props.value.showLoginForm">
            <Login @swithchToSignup="toggleSignup" />
        </template>
        <template v-else>
            <Signup @swithchToLogin="toggleSignup" />
        </template>
    </main>
</template> -->
