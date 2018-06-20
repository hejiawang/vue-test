import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import MainTest from '@/components/MainTest'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        { path: 'test1', component: Test1 }
        ,{ path: 'test2', component: Test2 }
        ,{ path: 'helloWord', component: HelloWorld }
        ,{ path: 'mainTest', component: MainTest }
      ]
    }
  ]
})
