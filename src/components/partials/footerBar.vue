<template>
    <div id="footer-container">
        <span>
            <p>Kuperjanov 21-4, Tartu</p>
            <p>Ülemiste 16-2, Tallinn</p>
        </span>
        <router-link to="/contactus">Contact us</router-link>
    </div>
</template>

<style scoped>
#footer-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;   
    box-sizing: border-box;        
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 20px 40px 80px 40px;
    text-align: start;
}
</style>