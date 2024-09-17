<template>
  <div id="app">
    <header>
      <h1>Azienda Agricola</h1>
      <nav>
        <router-link to="/moliture">Moliture</router-link>
        <router-link to="/spese-breve-termine">Spese Breve Termine</router-link>
        <router-link to="/spese-lungo-termine">Spese Lungo Termine</router-link>
        <router-link to="/vendite">Vendite</router-link>
      </nav>
    </header>

    <!-- Qui mostrerà la vista del componente in base alla rotta -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
h1 {
  color: #42b883;
}

nav {
  margin-bottom: 20px;
}

nav router-link{
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