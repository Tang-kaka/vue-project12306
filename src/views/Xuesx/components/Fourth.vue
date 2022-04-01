<template>
  <div id="Fourth" >
    <div class="first" v-for="items in obj" >
      <div class="box1">{{items.str1}}</div>
      <div class="box2">
        <div class="one">
          <div v-for="(item, index) in items.list1" :key="index">
            <span :class="item.icon"></span>
            <p>{{item.str}}</p>
          </div>
        </div>
        <div class="one">
          <div v-for="(item, index) in items.list2" :key="index">
            <span :class="item.icon"></span>
            <p>{{item.str}}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fourth",
  data() {
    return {
      obj: {
        obj1: {
          str1: "出行导航",
          list1: [
            {
              icon: "iconfont icon-shikebiao",
              str: "车站大屏",
            },
            {
              icon: "iconfont icon-shikebiao",
              str: "时刻表",
            },
            {
              icon: "iconfont icon-shikebiao",
              str: "起售时间",
            },
            {
              icon: "iconfont icon-31shijian",
              str: "正晚点查询",
            },
          ],
          list2: [
            {
              icon: "iconfont icon-chaxun",
              str: "票价查询",
            },
            {
              icon: "iconfont icon-huoche",
              str: "换乘时间",
            },
            {
              icon: "iconfont icon-zhaofangzi",
              str: "代售点查询",
            },
            {
              icon: "iconfont icon-diandiandian-copy",
              str: "更多",
            },
          ],
        },
        obj2: {
          str1: "出行导航",
          list1: [
            {
              icon: "iconfont icon-shikebiao",
              str: "车站大屏",
            },
            {
              icon: "iconfont icon-shikebiao",
              str: "更多",
            },
            {
              icon: "iconfont icon-diandiandian-copy",
              str: "更多",
            },
            {
              icon: "iconfont icon-diandiandian-copy",
              str: "更多",
            },
          ],
          list2: [
            {
              icon: "iconfont icon-shikebiao",
              str: "车站大屏",
            },
            {
              icon: "iconfont icon-shikebiao",
              str: "更多",
            },
            {
              icon: "iconfont icon-diandiandian-copy",
              str: "更多",
            },
            {
              icon: "iconfont icon-diandiandian-copy",
              str: "更多",
            },
          ],
        },
        obj3: {
          str1: "出行导航",
          list1: [
            {
              icon: "iconfont icon-shikebiao",
              str: "车站大屏",
            },
            {
              icon: "iconfont icon-shikebiao",
              str: "更多",
            },
            {
              icon: "iconfont icon-diandiandian-copy",
              str: "更多",
            },
            {
              icon: "iconfont icon-diandiandian-copy",
              str: "更多",
            },
          ],
          list2: [
            {
              icon: "iconfont icon-shikebiao",
              str: "车站大屏",
            },
            {
              icon: "iconfont icon-shikebiao",
              str: "更多",
            },
            {
              icon: "iconfont icon-diandiandian-copy",
              str: "更多",
            },
            {
              icon: "iconfont icon-diandiandian-copy",
              str: "更多",
            },
          ],
        },
      },
    };
  },
};
</script>

<style scoped>
#Fourth {
  width: 100%;
  /* height: 2.02rem; */
  display: flex;
  margin-top: 0.1rem;
  display: flex;
  flex-direction: column;
}
#Fourth .first {
  width: 3.56rem;
  /* height: 2.02rem; */
  margin: 0.05rem auto;
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