<template>
  <div class="middle-container">
    <h1>Welcome to homework 3!</h1>
    <router-link to="/login">Create an Account</router-link><br />
    <span>Or</span>
    <h2>Please Log In!</h2>
    <form action="index.html" class="login-form">
      <input type="text" name="Email" placeholder="Email" /><br />
      <input type="password" name="password" placeholder="Password" /><br />
      <router-link to="/"
        ><input id="login-button" type="submit" value="Log in"
      /></router-link>
    </form>
    <router-link to="/login">Forgot password?</router-link>
  </div>
</template>

<style scoped>
.middle-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(119, 167, 255);
  padding: 50px;
  margin: 100px auto 100px auto;
  width: 400px;
  border-radius: 20px;
  z-index: 50;
}

#background {
  z-index: -50;
}

form input {
  width: 300px;
  height: 40px;
}

form > input {
  padding-left: 20px;
}

#login-button {
  width: 100px;
  background-color: rgb(79, 126, 255);
  color: white;
  border-width: 0px;
  border-radius: 5px;
}

#login-button:hover {
  background-color: rgb(19, 82, 253);
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
</style>