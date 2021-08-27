import { createWebHistory, createRouter } from 'vue-router'

const history = createWebHistory()
export default createRouter({
  history,
  routes: [
    {
      path: '/dashboard',
      component: import('.././pages/Dashboard.vue'),
    },
  ],
})
