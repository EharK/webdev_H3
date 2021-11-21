<template>
    <div id="nav">
      <span class="navbar-text">
        <router-link to="/login">LOGIN</router-link>
      </span>
      <span class="nav-container">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </span>
      <span class="navbar-text">
        <p>user name</p>
        <p>0.69$</p>
      </span>
    </div>
</template>


<style scoped>
#nav {
  display: flex;
  flex-direction: row;
  place-content: space-between;
}

.nav-container {
  display: flex;
  place-content: space-between;
  align-items: center;
  padding: 0;
  width: 6%;
}

.navbar-text p {
  margin: 0;
  text-align: end;
  color: antiquewhite;
}

.navbar-text {
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: start;
  width: 10%;
}
</style>