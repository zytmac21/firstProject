import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/test/test.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
