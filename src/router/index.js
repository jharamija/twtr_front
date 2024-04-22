import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/UserStore';
import axios from 'axios'

import HomeView from '../views/HomeView.vue'
import CreatePostView from '../views/CreatePostView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import HomepageView from '../views/HomepageView.vue'

async function getPosts(to) {
    try {
        const response = await axios.get('http://127.0.0.1:8000/posts');
        to.params.posts = response.data;

        // console.log(response.data);
    } catch(error) {
        console.error('Error: ', error);
        alert(error.response.data.error);
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            // path: '/',
            // name: 'home',
            // component: HomeView
            path: '/',
            redirect: { path: '/home' }
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/posts/create',
            name: 'createPost',
            component: CreatePostView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignupView
        },
        {
            path: '/home',
            name: 'homepage',
            component: HomepageView,
            beforeEnter: [ getPosts ],
        },
    ]
});

// checks if user is authenticated
router.beforeEach(( to, from ) => {
    const isAuth = useUserStore().checkIfAuth();
    if(!isAuth && to.name !== 'login' && to.name !== 'signup'){
        return {
            name: 'login',
        };
    }
});

export default router
