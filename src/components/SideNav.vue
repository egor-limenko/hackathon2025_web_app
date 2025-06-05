<template>
  <nav class="sidenav">
    <div class="logo-container">
      <img src="/vonage_logo.jpg" alt="Logo" class="logo" />
      <h2>Vonage Hackathon App</h2>
    </div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/form">Form</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.sidenav {
  width: 220px;
  background-color: #1f2937;
  color: #fff;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background-color: white;
}

.sidenav h2 {
  font-size: 22px;
  margin: 0;
}

.sidenav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sidenav a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.sidenav a:hover {
  color: #60a5fa;
}
</style>