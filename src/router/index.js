import { createRouter, createWebHistory } from 'vue-router'
import sessionPlanner from '../views/sessionPlanner.vue'
import sessionHistory from '../views/sessionHistory.vue'
import ClientMessages from '../views/ClientMessages.vue'
import CoachMessages from '../views/CoachMessages.vue'

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
  {
    path: '/clientMessages',
    name: 'ClientMessages',
    component: ClientMessages
  },
  {
    path: '/coachMessages',
    name: 'CoachMessages',
    component: CoachMessages
  },
]

const router = createRouter({
  history: createWebHistory('/weekplanner-cli/'),
  routes
})

export default router
