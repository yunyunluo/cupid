import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewHello from '@/components/NewHello.vue'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/NewHello',
      name: 'NewHello',
      component: NewHello
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    }
  ]
})
