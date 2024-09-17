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
          Nome Cliente: {{ vendita.nome_cliente }} <br>
          Numero: {{ vendita.numero }} <br>
          Email: {{ vendita.email }} <br>
          Quantità Ordinata: {{ vendita.quantita_ordinata }} <br>
          Costo Imbottigliamento: {{ vendita.costo_imbottigliamento }} <br>
          Costo Spedizione: {{ vendita.costo_spedizione }} <br>
          Incasso: {{ vendita.incasso }} <br>
          Indirizzo Spedizione: {{ vendita.indirizzo_spedizione }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  color: #42b883;
}
</style>