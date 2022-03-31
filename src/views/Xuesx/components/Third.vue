<template>
  <div id="Third">
    <div class="first">
      <div class="box1">
        <span class="iconfont icon-zuanshi"></span>
        <div>
          <p class="one">开通会员，立享积分优惠</p>
          <p class="two">惠享出行 尊享体验</p>
        </div>
      </div>
      <div class="box2">查看 ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Third",
};
</script>

<style scoped>
#Third {
  width: 100%;
  height: 0.64rem;
  display: flex;
  margin-top: 0.1rem;
}
#Third .first {
  width: 3.56rem;
  height: 0.64rem;
  display: flex;
  margin: 0 auto;
  border-radius: 0.06rem;
  background-color: white;
  align-items: center;
  justify-content: space-between;
}
#Third .first .box1 {
  width: 2.04rem;
  height: 0.38rem;
  display: flex;
  flex-wrap: wrap;
  margin-left: 0.1rem;
}
#Third .first .box1 span {
  display: inline-block;
  width: 0.38rem;
  height: 0.38rem;
  text-align: center;
  line-height: 0.38rem;
  border-radius: 50%;
  background-color: #f1ad58;
  color: #fff;
}
#Third .first .box1 div {
  height: 0.38rem;
  display: flex;
  flex-direction: column;
  margin-left: 0.05rem;
}
#Third .first .box1 .one {
  font-size: 0.14rem;
  height: 100%;
}
#Third .first .box1 .two {
  font-size: 0.12rem;
  color: #dfdfdf;
}
#Third .first .box2 {
  width: 0.53rem;
  height: 0.25rem;
  text-align: center;
  line-height: 0.25rem;
  border: 1px solid #f1ad58;
  color: #f1ad58;
  border-radius: 0.25rem;
  margin-right: 0.1rem;
  font-size: 0.12rem;
}
</style>