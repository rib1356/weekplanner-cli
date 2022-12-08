import { createRouter, createWebHistory } from 'vue-router'
import sessionHistory from '../views/sessionHistory.vue'
const routes = [
  {
    path: '/sessionHistory',
    name: 'sessionHistory',
    component: sessionHistory
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router

// import { createWebHistory, createRouter } from "vue-router";
// import Router from 'vue-router'

// import sessionHistory from '../views/sessionHistory'

// Vue.use(Router)

// const router = new Router({
//   routes: [
//     {
//         path: '/sessionHistory',
//         name: 'sessionHistory',
//         component: sessionHistory,
//     },

//   ]
// })

// // const routes =  [
// //   {
// //     path: "/history",
// //     alias: "/history",
// //     name: "history",
// //     component: () => import("../view/sessionHistory.vue")
// //   },

// // ];

// // const router = createRouter({
// //   history: createWebHistory(),
// //   routes,
// // });

// export default router;