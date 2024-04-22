<script setup>
import Homepage from '../components/Homepage.vue'
import Sidebar from '../components/Sidebar.vue'
import Suggestions from '../components/Suggestions.vue'
</script>

<template>
    <main>
        <div class="flex-container">
            <Sidebar />
            <Homepage class="home-page" />
            <Suggestions class="suggestions" />
        </div>
    </main>
</template>

<style scoped>
.flex-container {
    display: flex;
    /* height: 300px; */
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
}

.home-page{
    padding-right: calc(var(--section-gap) / 2);
}
.suggestions{
    padding-right: calc(var(--section-gap) / 2);
}
</style>