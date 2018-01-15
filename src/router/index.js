import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Ｍain'
import Agenda from '../pages/Agenda'
import Sponsor from '../pages/Sponsor'
import Staff from '../pages/Staff'
import Location from '../pages/Location'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/agenda',
      name: 'Agenda',
      component: Agenda
    },
    {
      path: '/sponsor',
      name: 'Sponsor',
      component: Sponsor
    },
    {
      path: '/staff',
      name: 'Staff',
      component: Staff
    },
    {
      path: '/location',
      name: 'Location',
      component: Location
    }
  ]
})
