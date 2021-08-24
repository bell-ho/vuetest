import { createRouter, createWebHistory } from 'vue-router'
import GuestbookList from '@/views/GuestbookList'
import GuestbookCreate from '@/views/GuestbookCreate'
import GuestbookRead from '@/views/GuestbookRead'

const routes = [
  {
    path: '/',
    name: 'GuestbookList',
    component: GuestbookList
  },
  {
    path: '/list',
    name: 'GuestList',
    component: GuestbookList
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
