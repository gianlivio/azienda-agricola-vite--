import { createRouter, createWebHistory } from 'vue-router';
import Moliture from '../components/Moliture.vue'; // Importa il componente Moliture (o un altro componente)

const routes = [
  { path: '/', redirect: '/moliture' }, // Redirige l'homepage a /moliture
  { path: '/moliture', component: Moliture },
  { path: '/spese-breve-termine', component: () => import('../components/SpeseBreveTermine.vue') },
  { path: '/spese-lungo-termine', component: () => import('../components/SpeseLungoTermine.vue') },
  { path: '/vendite', component: () => import('../components/Vendite.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;