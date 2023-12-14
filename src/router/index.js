import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CityList from '../views/CityList.vue'
import Table from '../views/Table.vue'
import Export from '../views/Export.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/city-list',
      name: 'CityList',
      component: CityList
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/export',
      name: 'Export',
      component: Export
    },
    
  ]
})

export default router
