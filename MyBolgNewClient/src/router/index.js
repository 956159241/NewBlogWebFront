import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import diary from '@/views/diary'
import messages from '@/views/messages'
import shows from '@/views/shows'
import reads from '@/views/reads'
import itBlogs from '@/views/itBlogs'
import essay from '@/views/essay'
import readDetail from '@/views/readDetail'
// import itCategory from '@/views/itCategory/category'
import testContent from '@/views/itCategory/testContent'
import testContentOne from '@/views/itCategory/testContentOne'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home1',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/diary',
      name: 'diary',
      component: diary
    },
    {
      path: '/messages',
      name: 'messages',
      component: messages
    },
    {
      path: '/shows',
      name: 'shows',
      component: shows
    },
    {
      path: '/reads',
      name: 'reads',
      component: reads
    },
    {
      path: '/itBlogs/',
      name: 'itBlogs',
      component: itBlogs,
      children: [
        // {
        //   path: '/',
        //   component: testContent
        // },
        {
          path: 'testContentOne',
          component: testContentOne
        },
        {
          path: 'testContent',
          component: testContent
        }
      ]
    },
    {
      path: '/essay',
      name: 'essay',
      component: essay
    },
    {
      path: '/readDetail',
      name: 'readDetail',
      component: readDetail,
      props: true
    }
  ]
})
