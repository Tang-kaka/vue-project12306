<template>
  <footer>
    <dl>
      <dt class="iconfont icon-a-ditiezhangaotiezhanhuochezhan"></dt>
      <dd>首页</dd>
    </dl>
    <dl>
      <dt class="iconfont icon-a-huochegaotie-01"></dt>
      <dd>出行服务</dd>
    </dl>
    <dl>
      <dt class="iconfont icon-a-huochegaotie-01"></dt>
      <dd>订单</dd>
    </dl>
    <dl>
      <dt class="iconfont icon-huiyuan"></dt>
      <dd>铁路会员</dd>
    </dl>
    <dl>
      <dt class="iconfont icon-wodewo"></dt>
      <dd>我的</dd>
    </dl>
  </footer>
</template>
<script>
export default {
  name: "Bottom",
};
</script>

<style lang="" scoped>
footer {
  color: #0c0c0c;
  height: 0.56rem;
  display: flex;
  justify-content: space-around;
  background-color: #f9f9f9;
}
dl {
  height: 0.56rem;
}
dl dd {
  font-size: 0.14rem;
  margin-top: 0.1rem;
}
.iconfont {
  font-size: 0.25rem;
  text-align: center;
}
</style>
