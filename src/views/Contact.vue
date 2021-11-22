<template>
  <div class="tere">
    <h1><u>Contact us</u></h1>
    <h1>Phone number</h1>
    <h2>+372 900 3300</h2>
    <h1>Email</h1>
    <h2>kolmajurakku@hot.ee</h2>
      
  
    <div class="hub">
      <span contenteditable="true">Horn</span>
      <span contenteditable="true">Pub</span>
    </div>
  </div>
</template>

<style scoped>
html {
  height: 100%;
}

body {
  background: #000000;
  color: #ffffff;
  margin: 0;
  min-height: 100%;
  height: 100%;
  position: relative;
}

.hub {
  display: block;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 9vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hub span:nth-child(2) {
  background: #ff9900;
  color: #000000;
  border-radius: 1vw;
  padding: 0 1vw 1vw 1vw;
  display: inline-block;
}
</style>