<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faUser } from '@fortawesome/free-regular/icons/classic/solid'

// import { library } from "@fortawesome/fontawesome-svg-core"
// import { faUser } from "@fortawesome/free-regular-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import './Post.vue'

// library.add(faUser);

const posts = ref([]);
const route = useRoute();
console.log(route.params.posts);
onMounted(async () => {
    posts.value = route.params.posts || [];
});
</script>

<template>
    <!-- <router-view></router-view> -->
    <ul class="home-page">
        <Post v-for="(post, index) in posts" :key="index" :post="post">
            <div class="post">
                <div class="top">
                    <!-- <img src="" alt="pfp"></img> -->
                    <!-- <font-awesome-icon icon="fas fa-user" /> -->
                    <!-- <font-awesome-icon icon="User" /> -->
                    <i class="far fa-user"></i>
                    <router-link :to="{ name: 'user', params: { id: post.user_id } }">{{ post.user.name }}</router-link>
                </div>

                <div>{{ post.body }}</div>

                <div class="bottom">
                    <i class="far fa-heart"></i>
                    <div>{{ post.likes }}</div>

                    <i class="far fa-comment"></i>
                    <div>{{ post.comments }}</div>

                    <i class="far fa-share-from-square"></i>
                    <div>{{ post.retweets }}</div>
                </div>
            </div><br>
        </Post>
    </ul>
</template>

<style scoped>
.home-page{
    padding-right: calc(var(--section-gap) / 2);
    border: dotted green;
    flex: 1;
    padding-right: 10px;
}

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
    justify-content: space-between;
    /* border-style: solid; */
}

.far {
    padding: 5px 2px 6px 5px;
}
</style>