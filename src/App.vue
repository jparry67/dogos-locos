<template>
  <div id="app">
    <div></div>
    <!-- <Navigation></Navigation> -->
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style lang="less">
@import 'variables.less';
html {
  box-sizing: border-box;
  font-family: 'Roboto Condensed', Helvetica, Arial, sans-serif;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  font-family: 'Roboto Condensed', Helvetica, Arial, sans-serif;
  margin: 0;
}

#app {
  font-family: 'Roboto Condensed', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
}
</style>
