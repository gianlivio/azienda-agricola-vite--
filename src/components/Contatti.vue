<script>
import axios from 'axios'; // Aggiungi questa riga

export default {
  name: 'Contatti',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Invio dei dati tramite axios al backend
      axios.post('http://localhost:8000/api/contact', this.formData)
        .then(response => {
          console.log('Dati inviati con successo:', response.data);
          alert('Messaggio inviato con successo!');
        })
        .catch(error => {
          console.error('Errore nell\'invio:', error);
          alert('Errore nell\'invio del messaggio.');
        });

      // Resetta il form dopo l'invio
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
    },
  },
};
</script>


<template>
  <div class="contatti-page">
    <!-- Video di sfondo -->
    <video autoplay muted loop playsinline class="background-video">
      <source src="/videos/sfondo2.mp4" type="video/mp4" />
      Il tuo browser non supporta i video.
    </video>

    <!-- Contenuto sopra il video -->
    <div class="content-section">
      <h2>Contatti</h2>
      <p>Inserisci qui le informazioni di contatto.</p>
    </div>

    <!-- Form di contatto -->
    <div class="contact-form">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Nome</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <label for="message">Messaggio</label>
          <textarea id="message" v-model="formData.message" rows="4" required></textarea>
        </div>
        <button type="submit" class="cta-button">Invia</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Video di sfondo */
.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}

.contatti-page {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  overflow: hidden;
}

.content-section {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 12px;
  z-index: 1;
}

.contact-form {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  margin-top: 2rem;
  border-radius: 12px;
  z-index: 1;
  width: 100%;
  max-width: 500px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  border: none;
  font-size: 1rem;
}

.cta-button {
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  background-color: #6b8e23;
  color: #fff;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #556b2f;
}
</style>
