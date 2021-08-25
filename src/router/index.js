import { createRouter, createWebHistory } from 'vue-router'
import GuestbookList from '@/views/GuestbookList'
import GuestbookCreate from '@/views/GuestbookCreate'
import GuestbookRead from '@/views/GuestbookRead'
import GuestbookUpdate from '@/views/GuestbookUpdate'

const routes = [
  {
    path: '/',
    name: 'GuestbookList',
    component: GuestbookList,
    props: (route) => ({
      page:route.params.page
    })
  },
  {
    path: '/create',
    name: 'GuestbookCreate',
    component: GuestbookCreate
  },
  {
    path: '/detail/:guestNum/:page',
    name: 'GuestbookRead',
    props: (route) => ({
      guestNum: route.params.guestNum,
      page:route.params.page
    }),
    component: GuestbookRead
  },
  {
    path: '/update',
    name: 'GuestbookUpdate',
    component: GuestbookUpdate,
    props: (route) => ({
      guestNum: route.params.guestNum,
      page:route.params.page
    })
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
