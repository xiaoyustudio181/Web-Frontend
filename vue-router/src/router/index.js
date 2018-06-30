import Vue from 'vue'
import Router from 'vue-router'
import Project1 from '@/components/project1/Project1'
import Detail1_1 from '@/components/project1/Detail1_1'
import Detail1_2 from '@/components/project1/Detail1_2'
import TestComp from '@/components/frame/test/TestComp'
import List from '@/components/project1/List'
import Edit from '@/components/project1/Edit'

import Project2 from '@/components/project2/Project2'
import Detail2_1 from '@/components/project2/Detail2_1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: '项目1',
      path: '/project1',//每个组件对应一个路径
      component:Project1,
      redirect:{name:'细节1-1'},
      children:[
        {
          name:'细节1-1',
          path:'1-1',
          component:Detail1_1,
          redirect:{name:'列表'},
          children:[
            {
              name:'列表',
              path:'list',
              component:List
            },
            {
              name:'编辑',
              path:'edit',
              component:Edit
            }
          ]
        },
        {
          name:'细节1-2',
          path:'1-2',
          component:Detail1_2
        }
      ]
    },
    {
      name: '项目2',
      //path: '/project2',
      path: '/project2',
      component: Project2,
      children:[
        {
          name:'细节2-1',
          path:'2-1/:id/:parent',
          component:Detail2_1
        },
        {
          name:'细节2-2',
          path:'2-2',
          component:null
        }
      ]
    }
  ]
})
