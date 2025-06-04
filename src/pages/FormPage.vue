<template>
  <form @submit.prevent="handleSubmit">
    <label>
      Name:
      <input type="text" v-model="name" required />
    </label>
    <br /><br />
    <label>
      Email:
      <input type="email" v-model="email" required />
    </label>
    <br /><br />
    <button type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');

function handleSubmit() {
  alert(`Submitted: ${name.value}, ${email.value}`);
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
}
</style>