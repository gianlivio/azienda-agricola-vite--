import { createRouter, createWebHistory } from 'vue-router';
import Trasparenza from '../components/Trasparenza.vue';
import Moliture from '../components/Moliture.vue';
import SpeseBreveTermine from '../components/SpeseBreveTermine.vue';
import SpeseLungoTermine from '../components/SpeseLungoTermine.vue';
import Vendite from '../components/Vendite.vue';
import Prodotti from '../components/Prodotti.vue';
import Contatti from '../components/Contatti.vue'; 
import Homepage from '../components/Homepage.vue';
import ChiSiamo from '../components/ChiSiamo.vue';


const routes = [
  { path: '/', component: Homepage }, // Redirige all'homepage 
  {
    path: '/trasparenza',
    component: () => import('../components/Trasparenza.vue'), 
    children: [
      { path: 'moliture', component: Moliture },
      { path: 'spese-breve-termine', component: SpeseBreveTermine },
      { path: 'spese-lungo-termine', component: SpeseLungoTermine },
      { path: 'vendite', component: Vendite }
    ]
  },
  { path: '/prodotti', component: Prodotti },
  { path: '/contatti', component: Contatti }, 
  { path: '/about', component: ChiSiamo } 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;