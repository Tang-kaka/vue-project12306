<template>
  <div id="My">
    <Top></Top>
    <Indent></Indent>
    <Third></Third>
    <Fourth></Fourth>
    <Fourth></Fourth>
    <Fourth></Fourth>
  </div>
</template>

<script>
import Top from "./components/Top.vue";
import Indent from "./components/Indent.vue";
import Third from "./components/Third.vue";
import Fourth from "./components/Fourth.vue";
export default {
  name: "My",
  components: {
    Top,
    Indent,
    Third,
    Fourth,
  },
};
</script>

<style scoped>
@import url("./assets/iconfont/iconfont.css");
#My {
  background-color: #f5f5f5;
  background-image: linear-gradient(to bottom, #228cfc, #fff);
}
</style>