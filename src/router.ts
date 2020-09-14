import { createRouter, createWebHistory } from 'vue-router'
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./demo/demo01.vue'),
        },
        {
            path: '/demo2',
            component: () => import('./demo/demo02.vue'),
        },
    ],
})
