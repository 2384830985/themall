<template>
  <div id="app">
    <div id="nav">
      <router-view/>
    </div>
  </div>
</template>
<script>
  export default {
      data(){
          return {
              active: 0
          }
      }
  }
</script>
<style lang="scss">
  @import "assets/main.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
