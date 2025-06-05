<template>
  <div class="app">
    <SideNav />
    <router-view class="view" />
  </div>
</template>

<script setup lang="ts">
import SideNav from './components/SideNav.vue';
</script>

<style>
.app {
  display: flex;
  height: 100vh;
  background-color: #f4f6f9;
}
.view {
  flex: 1;
  padding: 40px;
  overflow-y: auto;
}
</style>