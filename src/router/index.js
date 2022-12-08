import { createRouter, createWebHistory } from 'vue-router'
import sessionPlanner from '../views/sessionPlanner.vue'
import sessionHistory from '../views/sessionHistory.vue'

const routes = [
  {
    path: '/',
    name: 'sessionPlanner',
    component: sessionPlanner
  },
  {
    path: '/sessionHistory',
    name: 'sessionHistory',
    component: sessionHistory
  },
  
]

const router = createRouter({
  history: createWebHistory('/weekplanner-cli/'),
  routes
})

export default router
