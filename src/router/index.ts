import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/ref',
    name: 'Ref',
    component: () => import('../views/RefView.vue')
  },
  {
    path: '/reactive',
    name: 'Reactive',
    component: () => import('../views/ReactiveView.vue')
  },
  {
    path: '/computed',
    name: 'Computed',
    component: () => import('../views/ComputedView.vue')
  },
  {
    path: '/state',
    name: 'State management',
    component: () => import('../views/StateManagementView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
