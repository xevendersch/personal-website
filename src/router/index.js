import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EducationView from '../views/EducationView.vue'
import BlogView from '../views/BlogView.vue'
import ResumeView from '../views/ResumeView.vue'
import ConnectView from '../views/ConnectView.vue'

const routes = [
  { path: '/', name: 'homePage', component: HomeView },
  { path: '/education', name: 'eduPage', component: EducationView },
  { path: '/blog', name: 'blogPage', component: BlogView },
  { path: '/resume', name: 'resumePage', component: ResumeView },
  { path: '/connect', name: 'connectPage', component: ConnectView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
