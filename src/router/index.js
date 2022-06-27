import { createRouter, createWebHashHistory} from "vue-router"
import Home from '../view/userCenter/login.vue' 
import Details from '../view/activity/ActivityDetail.vue'

const routes=[
    {
        path:'/',
        redirect:'/home'
    },{
        path:'/home',
        component:Home
    },{
        path:'/food',
        component:()=> import( /* webpackChunkName:'food' */  '../view/home/Foodsss.vue')
    },{
        path:'/deta',
        component:Details
    }
]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history:createWebHashHistory(),
    routes, // `routes: routes`  的缩写
  })

  export default router