<template>
  <div id="app">
    <NavBar/>
    <router-view />
  </div>
</template>

<script>
    import NavBar from "@/components/NavBar.vue"
    export default {
        components: {
          NavBar
        }
    }
</script>


<style>
  body {
    background-color: #ff9900;
    color: white;
  }

  #app {
    width: 80%;
    margin: 20px auto;
    font-family: "Verdana";
  }

</style>
