<template>
  <div id="Top">
    <div class="first">
      <span class="iconfont icon-shezhi"> </span>
      <span class="iconfont icon-xiaoxi"> </span>
    </div>
    <div class="second">
      <div class="second1">
        <span class="iconfont icon-user-full"></span>
      </div>
      <div class="second2">
        <p>薛顺鑫</p>
        <span class="one">
          手机核验成功&nbsp;<span class="iconfont icon-duihao"></span>
        </span>
        <span class="two">
          手机核验成功&nbsp;<span class="iconfont icon-duihao"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
};
</script>

<style scoped>
#Top {
  width: 100%;
  height: 0.96rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.first .iconfont {
  color: white;
  margin-right: 0.15rem;
}
#Top .first {
  width: 3.56rem;
  height: 0.3rem;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  align-items: center;
}
#Top .second {
  width: 3.56rem;
  margin: 0 auto;
  height: 0.66rem;
  display: flex;
}
#Top .second .second1 {
  width: 0.58rem;
  height: 0.58rem;
  line-height: 0.58rem;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
}
.icon-user-full {
  font-size: 50px;
  color: white;
}
#Top .second .second2 {
  margin-left: 0.1rem;
}
#Top .second .second2 p {
  color: white;
}
#Top .second .second2 .one {
  display: inline-block;
  width: 1.06rem;
  height: 0.2rem;
  font-size: 0.12rem;
  background-color: white;
  line-height: 0.2rem;
  text-align: center;
  border-radius: 0.1rem;
  margin-right: 0.05rem;
}
#Top .second .second2 .two {
  display: inline-block;
  width: 1.06rem;
  font-size: 0.12rem;
  line-height: 0.2rem;
  text-align: center;
  background-color: white;
  border-radius: 0.1rem;
  height: 0.2rem;
}
#Top .second .second2 span {
  margin-top: 0.1rem;
  font-size: 0.12rem;
}
#Top .second .second2 span .iconfont {
  color: #26ab58;
}
</style>