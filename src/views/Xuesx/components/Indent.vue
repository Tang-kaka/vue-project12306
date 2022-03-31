<template>
  <div id="Indent">
    <div class="first">
      <div class="box">
        <div>
          <span class="iconfont icon-shenfenzheng"></span>
          <span>乘车人</span>
        </div>
        <i>|</i>
        <div>
          <span class="iconfont icon-dingdan"></span>
          <span>我的订单</span>
        </div>
        <i>|</i>
        <div>
          <span class="iconfont icon-quan"></span>
          <span>优惠券</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Indent",
};
</script>

<style scoped>
#Indent {
  width: 100%;
  height: 0.87rem;
  display: flex;
  margin-top: 0.05rem;
}
#Indent .first {
  width: 3.56rem;
  height: 0.87rem;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  background-color: white;
  border-radius: 0.06rem;
}
#Indent .first .box {
  width: 2.8rem;
  height: 50px;
  display: flex;
  justify-content: space-between;
}
#Indent .first .box i {
  margin-top: 0.12rem;
  color: #dfdfdf;
}
#Indent .first .box div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
#Indent .first .box div span {
  font-size: 0.14rem;
}
#Indent .first .box div .iconfont {
  font-size: 0.3rem;
  color: #2d92fc;
}
</style>