<template>
<body>
  <div id="app">
    <navigationBar></navigationBar>
    <router-view />
  </div>
</body>
</template>

<script>
import navigationBar from './components/partials/navigationBar.vue'

export default {
  name: "app",
  components: {
    navigationBar,
  },
};
</script>

<style lang="scss">

html {
  height: 100%;
}

body {
  background-color: #1f1f1f;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #517394;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  background-color: #141414;
}
</style>
