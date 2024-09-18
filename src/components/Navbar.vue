<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isLoggedIn: false,
      userName: '', // Questo sarà popolato con il nome utente dopo il login
    };
  },
  methods: {
    checkAuth() {
      const token = localStorage.getItem('auth_token');
      if (token) {
        this.isLoggedIn = true;
        // Esegui una chiamata API per ottenere il nome dell'utente
        this.userName = 'NomeUtente';  // Usa una chiamata API reale qui
      }
    },
    logout() {
      localStorage.removeItem('auth_token');
      this.isLoggedIn = false;
      this.$router.push('/'); // Reindirizza alla home
    }
  },
  mounted() {
    this.checkAuth();
  }
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
        <li v-if="!isLoggedIn"><router-link to="/login" class="nav-item">Login</router-link></li>
        <li v-if="isLoggedIn">
          <span class="nav-item">Ciao, {{ userName }}</span>
          <a href="#" class="nav-item" @click="logout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
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