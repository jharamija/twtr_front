<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

import SuggestedProfiles from './SuggestedProfiles.vue';

// const users = ref([]);
// const route = useRoute();
// console.log(route.params.users);
// onMounted(async () => {
//     users.value = route.params.users || [];
// });

// async function getUsers() {
//     try {
//         const response = await axios.get('http://127.0.0.1:8000/users');
//         console.log(response.data);
//     } catch(error) {
//         console.error('Error: ', error);
//         alert(error.response.data.error);
//     }
// }
</script>

<template>
    <div class="suggestions">hello</div>
    <!-- <SuggestedProfiles v-for="(user, index) in users" :key="index" :user="user">
        <-- <font-awesome-icon icon="like" /> ->
        <div>{{ user.id }}</div>
    </SuggestedProfiles> -->
</template>

<style scoped>
.suggestions {
    align-self: flex-start;
    position: sticky;
    top: 0;
}
</style>