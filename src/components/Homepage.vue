<script>
export default {
  name: 'Homepage',
};
</script>

<template>
  <div class="homepage">
    <!-- Video di sfondo -->
    <video autoplay muted loop playsinline class="background-video">
      <source src="/videos/sfondo.mp4" type="video/mp4" />
      Il tuo browser non supporta i video.
    </video>

    <!-- Contenuto sopra il video -->
    <div class="hero-section">
      <h1>Olio EVO Pregiato</h1>
      <p>Scopri il nostro olio extra vergine di oliva, prodotto con cura e passione.</p>
      <router-link to="/prodotti" class="cta-button">Scopri di più</router-link>
    </div>
  </div>
</template>
  
  
<style scoped>
/* Stili come in precedenza */
.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}

.homepage {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  overflow: hidden;
}

.hero-section {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 12px;
  z-index: 1;
}

h1 {
  font-size: 4rem;
  font-family: 'Playfair Display', serif;
  color: #d4af37;
}

p {
  font-size: 1.5rem;
  font-family: 'Inter', sans-serif;
  color: #f0f0f0;
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
  text-decoration: none;
}

.cta-button:hover {
  background-color: #556b2f;
}
</style>