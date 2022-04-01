<template>
  <div class="search-box">
      <div class="denglu">
          <h3>未登录</h3>
          <p>便捷出行就在12306</p>
      </div>
      <div class="sousuo">
          <span class="iconfont icon-fangdajing"></span>
          <p class="shuru">爱心版</p>
      </div>
      <span class="iconfont icon-saoyisao"></span>
      <span class="iconfont icon-pinglun"></span>
  </div>
</template>

<script>
export default {
    name:"Search"
}
</script>

<style scoped>
@import url("../assets/iconfont/iconfont.css");
.search-box{
    width: 100%;
    height: .64rem;
    /* background-color: skyblue; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
}

.sousuo{
    display: flex;
    background-color: rgba(0, 0, 0, 0.452);
    border-radius: .15rem;
    width: 1.16rem;
    height: .3rem;
    align-items: center;
    font-size: .2rem;
}
.icon-fangdajing{
margin: 0 .1rem;
}
.search-box>span{
    width: .3rem;
    height: .3rem;
    background-color: rgba(0, 0, 0, 0.452);
    border-radius: 50%;
    font-size: .2rem;
    text-align: center;
    line-height: .3rem;
}
.denglu{
    line-height: .24rem;
}
h3{
    font-size: .18rem;
    font-weight: 600;
}
p{
    font-size: .15rem;
}
</style>