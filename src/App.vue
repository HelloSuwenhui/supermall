<template>
  <div id="app">
    <router-view/>
    <mainTarbar/>
  </div>
</template>

<script>
  import mainTarbar from "components/content/mainTarbar/mainTarbar";
  export default {
    name: 'app',
    components: {
      mainTarbar
    }
  }

</script>

<style>
  @import "assets/css/base.css";
</style>
