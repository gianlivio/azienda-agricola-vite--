import { createRouter, createWebHistory } from 'vue-router'
import Moliture from '../components/Moliture.vue'
import SpeseBreveTermine from '../components/SpeseBreveTermine.vue'
import SpeseLungoTermine from '../components/SpeseLungoTermine.vue'
import Vendite from '../components/Vendite.vue'

const routes = [
  { path: '/moliture', component: Moliture },
  { path: '/spese-breve-termine', component: SpeseBreveTermine },
  { path: '/spese-lungo-termine', component: SpeseLungoTermine },
  { path: '/vendite', component: Vendite },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router