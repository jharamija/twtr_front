<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, onBeforeUnmount } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Suggestions from './components/Suggestions.vue'
// import HelloWorld from './components/HelloWorld.vue'

const clearLocalStorage = () => {
    isRefreshing = false;
    localStorage.clear();
};

// onBeforeUnmount(() => {
//     clearLocalStorage();
// });

onMounted(() => {
    window.addEventListener('unload', clearLocalStorage);
});

onBeforeUnmount(() => {
    window.removeEventListener('unload', clearLocalStorage);
});

// window.addEventListener('beforeunload', () => {
//     isRefreshing = true;
// });
</script>

<template>
    <header>
        <link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.css">
        <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
            <HelloWorld msg="You did it!" />

            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/posts/create">Create post</RouterLink>
                <RouterLink to="/signup">New user?</RouterLink>
                <RouterLink to="/login">Login</RouterLink>
            </nav>
        </div> -->
    </header>

    <main>
            <!-- <Sidebar /> -->
        <div class="main-div">
            <RouterView />
            <Suggestions class="suggestions" />
        </div>
    </main>
</template>

<style scoped>
.main-div {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    /* align-items: stretch; */

    height: auto;
    width: auto;
    border-style: dotted;
    border-color: blue;

    padding: 10px;
}

/* .home-page{
    padding-right: calc(var(--section-gap) / 2);
    border-style: dotted;
    flex: 1;
} */

.suggestions{
    padding-right: calc(var(--section-gap) / 2);
    border-style: dotted;
    border-color: red;
    
    /* align-self: flex-start;
    position: sticky;
    top: 0; */
}
/* header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        // position: fixed;
        // bottom: 0;
        // width: 100%;
        display: flex;
        // justify-content: center;
        align-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
} */
</style>
