import { createRouter, createWebHashHistory } from 'vue-router'

import InicioPage from '@/pages/InicioPage.vue'
import InsertarVehiculoPage from '@/pages/InsertarVehiculoPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import ListaPage from '@/pages/ListaPage.vue'

const routes = [
  {
    path: '/',
    component: InicioPage
  },
  {
    path: '/insertar',
    component: InsertarVehiculoPage
  },
  {
    path: '/lista',
    component: ListaPage
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
