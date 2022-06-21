import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import selectcar from '../views/selectcar.vue'
import detailcar from '../views/detailcar.vue'
import cartedit from '../views/cartedit.vue'
import cartdialog from '../views/cartdialog.vue'
import cartchackout from '../views/cartchackout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/selectcar',
    name: 'selectcar',
    component: selectcar
  },
  {
    path: '/detailcar',
    name: 'detailcar',
    component: detailcar
  },
  {
    path: '/cartedit',
    name: 'cartedit',
    component: cartedit
  },
  {
    path: '/cartdialog',
    name: 'cartdialog',
    component: cartdialog
  },
  {
    path: '/cartchackout',
    name: 'cartchackout',
    component: cartchackout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
