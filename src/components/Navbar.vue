<template>
    <div class="navContainer">
        <div class="navItem"><router-link class="path" to="/">Home</router-link></div>
        <div class="navItem"><router-link class="path" to="/work">Work</router-link></div>
        <div class="navItem"><router-link class="path" to="/about">About</router-link></div>
        <div class="navItem"><router-link class="path" to="/connect">Connect</router-link></div>
    </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
    .navContainer{
        width: 100%;
        text-align: right;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .navItem{
        display: inline;
        padding: 10px;
        font-family: 'Open Sans', sans-serif; 
        text-decoration: none;
    }

    .path{
        color: #333;
        text-decoration: none;
        transition: ease-in-out .2s;
    }

    .path:hover{
        color: orangered;
        text-decoration: underline;
    }
</style>
