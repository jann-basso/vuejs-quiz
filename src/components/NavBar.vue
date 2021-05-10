<template>
    <div>
      <router-link class='link' :to="{name:'home'}">Le Quiz</router-link> |
      <router-link class='link' :to="{name:'about'}">About</router-link>
    </div>
</template>

<script>
   
</script>

<style scoped>
  div {
    text-align: center;
    color: white;
    
  }

  .link {
    text-decoration: none;
    color: white;
    padding: 15px;
    font-size: 20px;
    font-family: "Copperplate";
  }

  .link:hover {
    text-shadow: 2px 3px 5px #cc7a00;
    font-size: 21px;
  }

</style>