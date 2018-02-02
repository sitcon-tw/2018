import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main'
import Agenda from '../pages/Agenda'
import AgendaTemp from '../pages/AgendaTemp'
import Sponsor from '../pages/Sponsor'
import Staff from '../pages/Staff'
import Location from '../pages/Location'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: { index: 0 }
    },
    {
      path: '/agenda',
      name: 'Agenda',
      component: AgendaTemp,
      meta: { index: 1 }
    },
    {
      path: '/sponsor',
      name: 'Sponsor',
      component: Sponsor,
      meta: { index: 2 }
    },
    {
      path: '/staff',
      name: 'Staff',
      component: Staff,
      meta: { index: 3 }
    },
    {
      path: '/location',
      name: 'Location',
      component: Location,
      meta: { index: 4 }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
