<script>
export default {
  data() {
    return {
      speseLungoTermine: [], // Inizializza l'array per i dati
    };
  },
  mounted() {
    // Fetch spese lungo termine data from the backend
    fetch('http://localhost:8000/api/spese-lungo-termine') // Usa il percorso completo dell'API
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nella risposta dell\'API');
        }
        return response.json();
      })
      .then(data => {
        console.log('Dati spese lungo termine ricevuti:', data); // Debug
        this.speseLungoTermine = data;
      })
      .catch(error => console.error('Errore nel fetch:', error)); // Gestione errori
  },
};
</script>

<template>
  <div>
    <h2>Spese Lungo Termine</h2>
    <ul>
      <li v-for="spesa in speseLungoTermine" :key="spesa.id">
        {{ spesa.descrizione }} - {{ spesa.importo }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  color: #42b883;
}
</style>