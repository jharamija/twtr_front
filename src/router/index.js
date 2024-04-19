import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreatePostView from '../views/CreatePostView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import HomepageView from '../views/HomepageView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            // path: '/',
            // name: 'home',
            // component: HomeView
            path: '/',
            redirect: { path: '/login' }
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
            component: HomepageView
        },
    ]
})

// Route guard
// router.beforeEach(( to, from, next ) => {
//     const isAuthenticated
// })

export default router
