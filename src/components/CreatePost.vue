<script setup>
import axios from 'axios';
import { ref } from 'vue'

const props = ref({
    UID: '',
    body: '',
    likes: null,
    comments: null,
})

function submitPost(){
    console.log(props.value);
    axios.post('http://127.0.0.1:8000/posts', props.value, {
    })
    .then(response => {
        console.log('Response: ', response.data);
        alert('success');
    })
    .catch(error => {
        console.error('Error: ', error.response.data);
    });
}
</script>

<template>
    <div class="greetings">
        <form>
            <label for="UID">UID</label><br>
            <input type="text" id="UID" v-model="props.UID" />
            <br>
            <label for="body">body</label><br>
            <input type="text" id="body" v-model="props.body" />
            <br>
            <label for="likes">likes</label><br>
            <input type="number" id="likes" v-model.number="props.likes" />
            <br>
            <label for="comments">comments</label><br>
            <input type="number" id="comments" v-model.number="props.comments" />
            <br><br>
            <input type="submit" @click.prevent="submitPost" value="Submit post" />
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
