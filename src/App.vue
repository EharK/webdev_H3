<template>
<body>
  <div id="app">
    <navigationBar></navigationBar>
    <router-view />
    <footer-bar></footer-bar>
  </div>
</body>
</template>

<script>
import navigationBar from './components/partials/navigationBar.vue'
import footerBar from './components/partials/footerBar.vue'


export default {
  name: "app",
  components: {
    navigationBar,
    footerBar,
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
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
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

#footer-container {
  background-color: #141414;

  a {
    font-weight: bold;
    color: #517394;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

p {
  color: #517394;
  margin: 0;
}
</style>
