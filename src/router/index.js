import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Contato from '@/components/Contato'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
