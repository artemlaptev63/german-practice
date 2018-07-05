<template>
  <div id="footer">
      <p>For questions and information contact us at</p>
      <a href="mailto:hello@manninglabs.com">hello@manninglabs.com</a>
      <p class="copyright">Copyright 2017 Manning Labs LLC</p>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #footer {
        text-align: center;
        background-color: #56b949;
        margin-top: 70px;
        padding-top: 60px;
        color: #ffffff;
    }
    p, a {
        font-size: 20px;
        line-height: 2.3;
        letter-spacing: 1.8px;
        font-weight: 100;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    a {
        color: #ffffff;
    }
    p.copyright {
        margin-top: 70px;
        margin-bottom: 0px;
        padding-bottom: 20px;
        font-size: 15px;
    }
</style>
