<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/ref">Ref</router-link> |
    <router-link to="/reactive">Reactive</router-link> |
    <router-link to="/computed">Computed</router-link> |
    <router-link to="/state">State management</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
