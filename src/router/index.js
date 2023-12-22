import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    // component: HomeView
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/skills',
    name: 'SkillIndex',
    component: () => import('../views/skills/SkillIndex.vue')
  },
  {
    path: '/skills/create',
    name: 'SkillCreate',
    component: () => import('../views/skills/SkillCreate.vue')
  },
  {
    path: '/skills/:id',
    name: 'SkillEdit',
    component: () => import('../views/skills/SkillEdit.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
