<script>
export default {
  data() {
    return {
      vendite: [], // Inizializza l'array per i dati delle vendite
    };
  },
  mounted() {
    // Fetch vendite data from the backend API
    fetch('http://localhost:8000/api/vendite')  // Usa il percorso completo dell'API
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nella risposta dell\'API'); // Gestione errori
        }
        return response.json();
      })
      .then(data => {
        console.log('Dati vendite ricevuti:', data); // Debug per vedere i dati
        this.vendite = data;
      })
      .catch(error => console.error('Errore nel fetch:', error)); // Stampa eventuali errori
  },
};
</script>

<template>
  <div>
    <h2>Vendite</h2>
    <ul>
      <li v-for="vendita in vendite" :key="vendita.id">
        {{ vendita.nome_cliente }} - {{ vendita.quantita_ordinata }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  color: #42b883;
}
</style>