<template>
  <div id="app">
    <router-view></router-view>
    <site-footer />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body {
    font-family: 'Futura', sans-serif;
    margin: 0px;
    min-width: 700px;
  }
  h2 {
    font-size: 17px;
    color: #151f40;
    letter-spacing: 1.2px;
    font-weight: 600;
    margin-top: 40px;
  }
  hr {
    border: 0;
    height: 1px;
    background: #999999;
  }
</style>
