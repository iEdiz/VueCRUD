import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SongView from '../views/Songs/Songs.vue'
import SongCreate from '../views/Songs/CreateSong.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/songs',
      name: 'songs',
      component: SongView
    },
    {
      path: '/songs/create',
      name: 'songCreate',
      component: SongCreate
    }
  ]
})

export default router
