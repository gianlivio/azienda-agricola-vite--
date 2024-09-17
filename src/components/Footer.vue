<script>
export default {
  name: 'Footer',
};
</script>

<template>
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 Azienda Agricola Vite. All rights reserved.</p>
        <ul class="footer-nav">
          <li><a href="/privacy" class="footer-link">Privacy Policy</a></li>
          <li><a href="/terms" class="footer-link">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
</template>
  

<style scoped>
.footer {
  background-color: #222;
  padding: 2rem;
  color: #fff;
  text-align: center;
  width: 100%;
}

.footer-nav {
  list-style-type: none;
  margin-top: 1rem;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.footer-link {
  color: #bbb;
  text-decoration: none;
}

.footer-link:hover {
  color: #fff;
}
</style>