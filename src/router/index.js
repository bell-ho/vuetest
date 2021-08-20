import { createRouter, createWebHistory } from 'vue-router'
import GuestList from '@/views/GuestList'

const routes = [
  {
    path: '/',
    name: 'GuestList',
    component: GuestList
  },
  {
    path: '/list',
    name: 'GuestList',
    component: GuestList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
