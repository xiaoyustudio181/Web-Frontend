import Vue from 'vue'
import Router from 'vue-router'

import project1 from '@/components/project1/project1'
import detail1_1 from '@/components/project1/detail1_1'
import list from '@/components/project1/list'
import edit from '@/components/project1/edit'
import detail1_2 from '@/components/project1/detail1_2'

import project2 from '@/components/project2/project2'
import detail2_1 from '@/components/project2/detail2_1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: '项目1',
      path: '/project1',
      component: project1,
      redirect: {name:'详细1-1'},
      children: [
        {
          name:'详细1-1',
          path: 'detail1-1',
          component: detail1_1,
          redirect: {name:'列表'},
          children: [
            {
              name:'列表',
              path: 'list',
              component: list
            },
            {
              name:'编辑',
              path: 'edit',
              component: edit
            }
          ]
        },
        {
          name:'详细1-2',
          path: 'detail1-2',
          component: detail1_2
        }
      ]
    },
    {
      name: '项目2',
      path: '/project2',
      component: project2,
      children: [
        {
          name:'详细2-1',
          path: 'detail2-1/:id/:parent',
          component: detail2_1
        },
        {
          name:'详细2-2',
          path: 'detail2-2',
          component: null
        }
      ]
    }
  ]
})
