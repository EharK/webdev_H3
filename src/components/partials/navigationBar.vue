<template>
    <div id="nav">
      <span class="navbar-text">
        <router-link to="/login">LOGIN</router-link>
      </span>
      <span class="nav-container">
        <router-link to="/">Home</router-link>
        <router-link to="/contactus">Contact</router-link>
      </span>
      <span class="navbar-text">
        <p>user name</p>
        <p>0.69$</p>
      </span>
    </div>
</template>


<style scoped>
#nav {
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.nav-container {
  display: flex;
  place-content: space-around;
  align-items: center;
  padding: 0;
  width: 10%;
}

.navbar-text p {
  margin: 0;
  text-align: end;
  color:dimgray;
}

.navbar-text {
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: start;
  width: 10%;
}
</style>