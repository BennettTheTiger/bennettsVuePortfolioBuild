
<template>
  <div id="app">
    <custom-nav></custom-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Navbar.vue'
export default {
  name: 'app',
  components: {
    'custom-nav': Nav,
  }
}
</script>


<style>

@import url('https://fonts.googleapis.com/css?family=Merriweather|Open+Sans:700');

/*
font-family: 'Merriweather', serif;
font-family: 'Open Sans', sans-serif; Titles
*/
</style>


