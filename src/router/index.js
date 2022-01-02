import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home/nested'
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        children: [
            {
                path: 'nested',
                name: 'NestedHome',
                component: () => import('../views/NestedHome.vue'),
            },
        ],
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        children: [
            {
                path: 'nested',
                name: 'NestedAbout',
                component: () => import('../views/NestedAbout.vue'),
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
