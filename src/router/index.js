import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import { auth } from '../firebase'

const routes = 
[
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },{
    path: '/contact',
    name: 'Contact',
    component: () => import( '../views/Contact.vue')
  },{
    path: '/products',
    name: 'Products',
    component: () => import( '../views/Products.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

//   if (requiresAuth && !auth.currentUser) {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router
