<script>
export default {
  data() {
    return {
      moliture: [], // Inizializza l'array per i dati delle moliture
    };
  },
  mounted() {
    // Fetch moliture data from the backend API
    fetch('http://localhost:8000/api/moliture')  // Usa il percorso completo dell'API
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nella risposta dell\'API');
        }
        return response.json();
      })
      .then(data => {
        console.log('Dati moliture ricevuti:', data); // Debug
        this.moliture = data;
      })
      .catch(error => console.error('Errore nel fetch:', error)); // Stampa eventuali errori
  },
};
</script>

<template>
  <div>
    <h2>Moliture</h2>
    <ul>
      <li v-for="molitura in moliture" :key="molitura.id">
        {{ molitura.nome }} - {{ molitura.data }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  color: #42b883;
}
</style>