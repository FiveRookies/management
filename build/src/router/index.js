import Vue from 'vue'
import Router from 'vue-router'
import homePageForDepartAdmin from '@/components/homePageForDepartAdmin'
import homePageForNormal from '@/components/homePageForNormal'
import register from '@/components/register'
import homePageForTopAdmin from '@/components/homePageForTopAdmin'
import pieSimple from '@/components/pie-simple'
import searchPage from '@/components/searchPage'
import myArticle from '@/components/myArticle'
import module from '@/components/module'
import login from '@/components/Login'
import newDocument from '@/components/newDocument'
import usrInfo from '@/components/usrInfo'
import statistic from '@/components/statistic'
import readContent from '@/components/readContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/module'
    },
    {
      path: '/homePageForDepartAdmin',
      name: 'homePageForDepartAdmin',
      component: homePageForDepartAdmin
    },
    {
      path: '/homePageForNormal',
      name: 'homePageForNormal',
      component: homePageForNormal,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path:'/homePageForTopAdmin',
      name:'homePageForTopAdmin',
      component:homePageForTopAdmin
    },
    {
      path:'/pie-simple',
      name:'pie-simple',
      component:pieSimple
    },
    {
      path:'/searchPage',
      name:'searchPage',
      component:searchPage
    },
    {
      path:'/myArticle',
      name:'myArticle',
      component:myArticle
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
       path:'/newDocument',
       name:'newDocument',
       component:newDocument
    },
    {
      path:'/usrInfo',
      name:'usrInfo',
      component:usrInfo
    },
    {
      path:'/statistic',
      name:'statistic',
      component:statistic
    },
    {
      path:'/readContent',
      name:'readContent',
      component:readContent
    },
    {
      path:'/module',
      name:'module',
      component:module,
      children:[
        {
          path:'/module/homePageForTopAdmin',
          component:homePageForTopAdmin
        },
        {
          path:'/module/myArticle',
          component:myArticle
        },
        {
          path:'/module/searchPage',
          name:'.module.searchPage',
          component:searchPage
        },
        {
          path:'/module/homePageForNormal',
          component:homePageForNormal
        },
        {
          path:'/module/newDocument',
          component:newDocument
        },
        {
          path:'/module/statistic',
          component:statistic
        },
        {
          path:'/module/usrInfo',
          component:usrInfo
        },
        {
          path:'/module/homePageForDepartAdmin',
          component:homePageForDepartAdmin
        },
        {
          path:'/module/readContent',
          component:readContent
        },

      ]
    }
  ]
})
