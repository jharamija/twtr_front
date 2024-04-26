<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faUser } from '@awesome.me/kit-regular/icons/classic/solid'

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
        <Post v-for="(post, index) in posts" :key="index" :post="post">
            <div class="post">
                <div class="top">
                    <!-- <img src="" alt="pfp"></img> -->
                    <!-- <font-awesome-icon icon="user" /> -->
                    <RouterLink to="{ name: 'user', params: { id: user_id } }">{{ post.user.name }}</RouterLink>
                </div>

                <div>{{ post.body }}</div>

                <div class="bottom">
                    <!-- <font-awesome-icon icon="like" /> -->
                    <div>{{ post.likes }}</div>

                    <!-- <font-awesome-icon icon="comment" /> -->
                    <div>{{ post.comments }}</div>

                    <!-- <font-awesome-icon icon="share" /> -->
                    <div>{{ post.retweets }}</div>
                </div>
            </div><br>
        </Post>
    </ul>
</template>

<style scoped>
.post {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    /* border-style: solid; */
}

.top {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    /* border-style: solid; */
}

.bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    /* border-style: solid; */
}
</style>