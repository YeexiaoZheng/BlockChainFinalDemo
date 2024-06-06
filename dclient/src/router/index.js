import { createRouter, createWebHashHistory } from 'vue-router'
// import IndexVue from '@/views/Index.vue'
import ArtComissionVue from '@/views/ArtComission.vue'
// import AuctionVue from '@/views/Auction.vue'

// 路由规则
const routes = [
    {
        path: '/',
        name: 'defalut',
        component: ArtComissionVue
    },
    {
        path: '/artcomission',
        name: 'artcomission',
        component: ArtComissionVue
    },
]

// 路由实例
export default createRouter({
    history: createWebHashHistory(),
    routes,
})