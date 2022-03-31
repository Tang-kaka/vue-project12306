<template>
  <div id="app">
    <My></My>
    <!-- <Notice></Notice> -->
  </div>
  
</template>
<script>
import My from "./views/Xuesx/My.vue"
import Notice from "./views/Xuesx/Notice.vue"
export default {
    components:{
      My,Notice
    }
}
</script>

<style lang="less">
@import url("./assets/css/reset.css");
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

</style>
