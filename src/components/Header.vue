<template>
  <div id="header">
    <p>Practice Grammar</p>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #header {
        padding-left: 100px;
        background-image: url('../../src/assets/header-image-exercise.png');
        background-size: cover;
        margin-bottom: 40px;
    }
    #header p {
        margin-top: 0px;
        font-size: 30px;
        color: #4cb2d4;
        letter-spacing: 1.2px;
        padding-top: 35px;
        padding-bottom: 35px;
    }
</style>
