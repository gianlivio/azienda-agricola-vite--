<script>
export default {
  name: 'Trasparenza',
};
</script>

<template>
    <div>
      <h2>Trasparenza</h2>
      <nav>
        <router-link to="/trasparenza/moliture">Moliture</router-link>
        <router-link to="/trasparenza/spese-breve-termine">Spese Breve Termine</router-link>
        <router-link to="/trasparenza/spese-lungo-termine">Spese Lungo Termine</router-link>
        <router-link to="/trasparenza/vendite">Vendite</router-link>
      </nav>
  
      <!-- Qui mostrerà le sottosezioni di Trasparenza -->
      <router-view />
    </div>
</template>
  

  
<style scoped>
  nav {
    margin-bottom: 20px;
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
  