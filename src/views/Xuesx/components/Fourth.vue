<template>
  <div id="Fourth">
    <div class="first">
      <div class="box1">出行向导</div>
      <div class="box2">
        <div class="one">
          <div>
            <span class="iconfont icon-pingmu"></span>
            <p>车站大屏</p>
          </div>
          <div>
            <span class="iconfont icon-shikebiao"></span>
            <p>时刻表</p>
          </div>
          <div>
            <span class="iconfont icon-shikebiao"></span>
            <p>起售时间</p>
          </div>
          <div>
            <span class="iconfont icon-31shijian"></span>
            <p>正晚点查询</p>
          </div>
        </div>
        <div class="one">
          <div>
            <span class="iconfont icon-chaxun"></span>
            <p>票价查询</p>
          </div>
          <div>
            <span class="iconfont icon-huoche"></span>
            <p>换乘时间</p>
          </div>
          <div>
            <span class="iconfont icon-zhaofangzi"></span>
            <p>代售点查询</p>
          </div>
          <div>
            <span class="iconfont icon-diandiandian-copy"></span>
            <p>更多</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fourth",
};
</script>

<style scoped>
#Fourth {
  width: 100%;
  height: 2.02rem;
  display: flex;
  margin-top: 0.1rem;
}
#Fourth .first {
  width: 3.56rem;
  height: 2.02rem;
  margin: 0 auto;
  border-radius: 0.06rem;
  background-color: white;
}
#Fourth .first .box1 {
  width: 100%;
  height: 0.46rem;
  border-bottom: 0.01rem solid #dfdfdf;
  line-height: 0.46rem;
  padding-left: 0.1rem;
}

#Fourth .first .box2 .one {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  margin: 0.25rem 0;
}
#Fourth .first .box2 .one div {
  text-align: center;
  width: 0.7rem;
  height: 0.44rem;
}
#Fourth .first .box2 .one div .iconfont {
  font-size: 0.26rem;
}
#Fourth .first .box2 .one div p {
  font-size: 0.14rem;
}
</style>