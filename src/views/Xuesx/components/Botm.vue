<template>
  <div id="Botm">
    <div>
      信息服务
      <span>></span>
    </div>
    <router-link to="/NoticeList" tag="span">
      <div>公告<span>></span></div>
    </router-link>
    <div>常见问题<span>></span></div>
    <div>使用须知<span>></span></div>
    <div>服务规范<span>></span></div>
    <router-link to="Reg" tag="span">
      <div>注册<span>></span></div>
    </router-link>
    <div class="last">关于<span>版本号5.5.1.4 ></span></div>
  </div>
</template>

<script>
export default {
  name: "Botm",
};
</script>

<style scoped>
#Botm {
  width: 3.56rem;
  height: 3.2rem;
  background-color: white;
  margin: 0.1rem auto 0.2rem;

  border-radius: 0.06rem;
}
#Botm div {
  width: 3.36rem;
  height: 0.44rem;
  line-height: 0.4rem;
  margin: 0 auto;
  border-bottom: 1px solid #dfdfdf;
}
#Botm .last {
  border-bottom: none;
}
#Botm div span {
  float: right;
  color: #b3b3b3;
}
</style>