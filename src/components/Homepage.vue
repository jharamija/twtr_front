<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import './Post.vue'

const posts = ref([]);
const route = useRoute();
console.log(route.params.posts);
onMounted(async () => {
    posts.value = route.params.posts || [];
});
</script>

<template>
    <!-- <div>
        hello
    </div> -->
    <ul>
        <!-- <Post v-for="(post, index) in posts" :key="index" :post="post" /> -->
        <Post v-for="(post, index) in posts" :key="index" :post="post">
            <div>{{ post.user_id }}</div>
            <div>{{ post.body }}</div>
        </Post>
    </ul>
</template>

<!-- <style scoped>

</style> -->