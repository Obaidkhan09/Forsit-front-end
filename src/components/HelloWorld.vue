<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="logo-heading">{{ msg }}</h1>
  </div>
</template>

<style scoped>
.greetings {
  padding: 1rem;
}
.logo-heading {
  color: white;
  font-size: 2.2rem;
}
</style>
