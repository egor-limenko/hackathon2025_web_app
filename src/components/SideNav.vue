<template>
  <nav class="sidenav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/form">Form</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.sidenav {
  width: 200px;
  background-color: #333;
  color: white;
  padding: 20px;
}
.sidenav ul {
  list-style: none;
  padding: 0;
}
.sidenav li {
  margin-bottom: 10px;
}
.sidenav a {
  color: white;
  text-decoration: none;
}
</style>