import {createRouter,createWebHashHistory} from 'vue-router';
const routes = [
    {
        path:'/',
        component:()=>import('@/views/Home.vue')
    },
    {
        path:'/aboute',
        component:()=>import('@/views/About.vue')
    }
]

export default  createRouter({
    history:createWebHashHistory(),
    routes,
})