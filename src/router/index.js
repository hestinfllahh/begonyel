import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LandingPage from '../views/LandingPage'
import ListProduct from '../views/ListProduct'
import ProductDetail from '../views/ProductDetail'
import Keranjang from '../views/Keranjang'
import Success from '../views/Success'

Vue.use(VueRouter)

const routes = [
  {
    path: 'LandingPage',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },

  {
    path: '/listproduct',
    name: 'ListProduct',
    component: ListProduct
  },

  {
    path: '/productdetail',
    name: 'ProductDetail',
    component: ProductDetail
  },

  {
    path: '/keranjang',
    name: 'Keranjang',
    component: Keranjang
  },

  {
    path: '/success',
    name: 'Success',
    component: Success
  },

]

const router = new VueRouter({
  routes
})

export default router
