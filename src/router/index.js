import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import Gallery from '../components/Gallery'
import News from '../components/News'
import Contacts from '../components/Contacts'
import CreateNews from '../components/CreateNews'
import NewsProfile from '../components/NewsProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    }, {
      path: '/create',
      name: 'CreateNews',
      component: CreateNews
    }, {
      path: '/news/:id',
      name: 'NewsProfile',
      component: NewsProfile
    }
  ],
  mode: 'history'
})
