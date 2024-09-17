<script>
export default {
  name: 'Prodotti',
};
</script>

<template>
  <div class="prodotti-page">
    <!-- Video di sfondo -->
    <video autoplay muted loop playsinline class="background-video">
      <source src="/videos/sfondo1.mp4" type="video/mp4" />
      Il tuo browser non supporta i video.
    </video>

    <!-- Contenuto sopra il video -->
    <div class="content-section">
      <h2>Prodotti</h2>
      <p>OLIO EVO di altissima qualità, prodotto con passione e tradizione.</p>
    </div>
  </div>
</template>


<style scoped>
/* Posizionamento del video come sfondo */
.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}

.prodotti-page {
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

h2 {
  font-size: 3rem;
  font-family: 'Playfair Display', serif;
  color: #d4af37; /* Colore oro */
}

p {
  font-size: 1.5rem;
  font-family: 'Inter', sans-serif;
  color: #f0f0f0;
}
</style>