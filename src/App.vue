<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="light" sticky=true>
    <b-navbar-brand href="#" to="/">
      <img src="./assets/cesta-de-compras-32.png" alt="Comércio e compras ícones criados por Anggara - Flaticon" >
      Home
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav right>
      <b-navbar-nav right>
        <b-nav-item href="#" to="/contato" right>Contato</b-nav-item>
        <b-nav-item href="#" to="/about" right>Sobre Nós</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: lightgray;
  height: 100vh;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin-bottom: 0;
}
</style>
