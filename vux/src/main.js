// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import HelloWorld from './components/HelloWorld'
import HelloFromVux from './components/HelloFromVux'

import Icons from './components/Icons'
import XIcons from './components/XIcons'
import XButtons from './components/XButtons'
import FlexBoxes from './components/FlexBoxes'
import Grids from './components/Grids'
import Stickies from './components/Stickies'

//import router from './router' //使用index.js作为router，同时注释掉后面的const router=...


Vue.use(VueRouter)

//cnpm install vuex-i18n --save //demo中会用到
// import vuexI18n from 'vuex-i18n';
// const store = new Vuex.Store({
//   modules: {
//     i18n: vuexI18n.store
//   }
// });
// Vue.use(vuexI18n.plugin, store);

const routes = [{
  path: '/',
  name:'HelloFromVux',
  component: HelloFromVux
},{
  path:'/hello',
  name:'hello',
  component:HelloWorld
},{
  path:'/icons',
  component:Icons
},{
  path:'/xicons',
  component:XIcons
},{
  path:'/xbuttons',
  component:XButtons
},{
  path:'/flexboxes',
  component:FlexBoxes
},{
  path:'/grids',
  component:Grids
},{
  path:'/stickies',
  component:Stickies
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
