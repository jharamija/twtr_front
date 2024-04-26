<script setup>
import Homepage from '../components/Homepage.vue'
import Sidebar from '../components/Sidebar.vue'
import Suggestions from '../components/Suggestions.vue'
</script>

<template>
    <main>
        <!-- <Sidebar /> -->
        <Homepage class="home-page" />
        <Suggestions class="suggestions" />
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    /* align-items: stretch; */

    height: auto;
    width: auto;
    border-style: dotted;
    border-color: blue;
}

.home-page{
    padding-right: calc(var(--section-gap) / 2);
    border-style: dotted;
    flex: 1;
}
.suggestions{
    padding-right: calc(var(--section-gap) / 2);
    border-style: dotted;
    border-color: red;
    
    /* align-self: flex-start;
    position: sticky;
    top: 0; */
}
</style>