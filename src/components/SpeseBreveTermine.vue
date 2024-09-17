<script>
export default {
  data() {
    return {
      speseBreveTermine: [], // Inizializza l'array per i dati
    };
  },
  mounted() {
    // Fetch spese breve termine data from the backend
    fetch('http://localhost:8000/api/spese-breve-termine') // Usa il percorso completo dell'API
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nella risposta dell\'API');
        }
        return response.json();
      })
      .then(data => {
        console.log('Dati spese breve termine ricevuti:', data); // Debug
        this.speseBreveTermine = data;
      })
      .catch(error => console.error('Errore nel fetch:', error)); // Gestione errori
  },
};
</script>

<template>
  <div>
    <h2>Spese Breve Termine</h2>
    <ul>
      <li v-for="spesa in speseBreveTermine" :key="spesa.id">
        {{ spesa.nome }} - {{ spesa.importo }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  color: #42b883;
}
</style>