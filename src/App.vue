<script>

import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Navbar, 
    Footer  
  }
};
</script>

<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <header>
        <h1>Azienda Agricola</h1>

      </header>

      <!-- Mostra la vista del componente in base alla rotta -->
      <router-view />
    </div>
    <Footer />
  </div>
</template>




<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Assicura che l'app occupi l'intera altezza della finestra */
}

.content {
  flex: 1; /* Fa sì che la parte centrale del contenuto cresca per occupare lo spazio disponibile */
  padding-bottom: 2rem; /* Aggiungi spazio per evitare che il contenuto venga coperto dal footer */
}

h1 {
  color: #000000;
}

nav {
  margin-bottom: 20px;
}

nav router-link {
  padding-left: 20px;
}

nav a {
  margin-right: 10px;
  text-decoration: none;
  color: #42b883;
}

nav a:hover {
  text-decoration: underline;
}
</style>