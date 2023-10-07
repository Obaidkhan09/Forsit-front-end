

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <HelloWorld msg="Forsit" />
      <nav>
        <RouterLink class="nav-item green" to="/">Store</RouterLink>
        <RouterLink class="nav-item green" to="/reports">Report</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<style scoped>
.wrapper {
  background-color: #263238;
  display: flex;
  align-items: center;
}
nav {
  align-items: center;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
nav >.nav-item{
  font-size: 1.3rem;
  margin-right: 1rem;
}
.nav-item:hover{
  border-bottom: 1px solid white;
  background-color: transparent;
}
nav a:last-child {
  margin-right: 0;
}
nav .router-link-active {
  color: white;
  border-bottom: 1px solid white;
}
body {
  background-color: #263238 !important;
}
</style>
