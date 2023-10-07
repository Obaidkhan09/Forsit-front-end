
<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="grid-header mt-3">
      <h3 class="text-white">List of Available Products</h3>
      <router-link to="/newItem">
        <button @click="navigateToAddItem()" class="button btn btn-primary border-0">Add New Product</button>
      </router-link>
    </div>
    <GridView />
  </main>
</template>

<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import GridView from './GridView.vue';
</script>

<style scoped>
.grid-header {
  margin: 0 auto;
  width: 85%;
  display: flex;
  justify-content: space-between;
}
.button {
  background-color:#263238 !important;
  color: white;
  padding: 0.6rem !important;
}
.button:hover {
  background-color:#263238 !important;
  color: hsla(160, 100%, 37%, 1);
  box-shadow: none !important;
}
</style>