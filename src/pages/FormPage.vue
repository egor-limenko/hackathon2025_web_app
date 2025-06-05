<template>
  <form @submit.prevent="handleSubmit">
    <label>
      Name:
      <input type="text" v-model="name" required />
    </label>
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
  gap: 16px;
  max-width: 400px;
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

label {
  display: flex;
  flex-direction: column;
  font-weight: 600;
  color: #444;
}

input {
  margin-top: 6px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

button {
  margin-top: 10px;
  padding: 12px;
  font-size: 1rem;
  background-color: #2563eb;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #1d4ed8;
}
</style>