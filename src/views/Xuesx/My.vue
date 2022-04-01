<template>
  <div id="My">
    <Top></Top>
    <Indent></Indent>
    <Third></Third>
    <Fourth></Fourth>
    <Botm></Botm>
  </div>
</template>

<script>
import Top from "./components/Top.vue";
import Indent from "./components/Indent.vue";
import Third from "./components/Third.vue";
import Fourth from "./components/Fourth.vue";
import Botm from "./components/Botm.vue";

export default {
  name: "My",
  components: {
    Top,
    Indent,
    Third,
    Fourth,
    Botm,
  },
};
</script>

<style scoped>
@import url("./assets/iconfont/iconfont.css");
#My {
  background-color: #f5f5f5;
  background-image: linear-gradient(
    to bottom,
    #228cfc 10%,
    #f5f5f5 20%,
    #f5f5f5 70%
  );
}
</style>