<script>
export default {
  name: 'Navbar',
};
</script>


<template>
    <nav class="navbar">
      <div class="container">
        <router-link to="/" class="navbar-brand">Azienda Agricola</router-link>
        <ul class="navbar-nav">
          <li><router-link to="/prodotti" class="nav-item">Prodotti</router-link></li>
          <li><router-link to="/contatti" class="nav-item">Contatti</router-link></li>
          <li><router-link to="/about" class="nav-item">Chi Siamo</router-link></li>
          <li><router-link to="/trasparenza" class="nav-item">Trasparenza</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
 
  
<style scoped>
  .navbar {
    background-color: #333;
    padding: 1rem;
    position: fixed; /* Fissa la navbar in alto */
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000; /* Assicura che la navbar sia sopra gli altri elementi */
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .navbar-brand {
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
  }
  
  .navbar-nav {
    list-style-type: none;
    display: flex;
    gap: 1rem;
  }
  
  .nav-item {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
  }
  
  .nav-item:hover {
    color: #ddd;
  }
</style>