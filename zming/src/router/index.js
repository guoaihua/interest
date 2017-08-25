import Vue from 'vue'
import Router from 'vue-router'
const home = resolve => require(['../components/home'], resolve)
const project = resolve => require(['../components/project'], resolve)
const article = resolve => require(['../components/article'], resolve)
const person = resolve => require(['../components/person'], resolve)
const contact = resolve => require(['../components/contact'], resolve)


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
        {
      path: '/article',
      name: 'article',
      component: article
    },
        {
      path: '/project',
      name: 'project',
      component: project
    },
        {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
    	path:'/*',
    	redirect:'/home'
    }
  ]
})
