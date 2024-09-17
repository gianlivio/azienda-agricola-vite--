<script>
export default {
  data() {
    return {
      moliture: [],
    };
  },
  mounted() {
    // Fetch moliture data from the backend
    fetch('/api/moliture')
      .then(response => response.json())
      .then(data => {
        this.moliture = data;
      });
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