import Vue from 'vue'
import Router from 'vue-router'
import CirCles from '@/components/circle'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'CirCles',
            component: CirCles
        }
    ]
})
