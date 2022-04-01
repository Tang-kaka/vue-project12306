<template>
  <div class="chaxun">
    <ul>
      <li class="Address">
        <h2>北京</h2>
        <span class="iconfont icon-zhuangtaizhuanhuan">
            <span class="iconfont icon-tielu"></span>
        </span>
        <h2>上海</h2>
      </li>
      <li class="Date">
        <h3>3月29日</h3>
        <span class="week">周二</span>
      </li>
      <li class="Sel">
          只看高铁/动车<input type="checkbox">
          学生票<input type="checkbox">
      </li>
    </ul>
    <input class="chapiao" type="button" value="查询车票">
  </div>
</template>

<script>
    export default {
        name:"Chapiao"
    };
</script>

<style scoped>
@import url("../assets/iconfont/iconfont.css");
    .chaxun {
        width: 3.57rem;
        height: 2.41rem;
        margin: 0 auto;
        border-radius: .1rem;
        box-shadow: 0 0 .05rem -0.01rem;
        padding: 0 .2rem;
        box-sizing: border-box;
    }
    li{
        display: flex;
        align-items: center;
        border-bottom: .01rem solid rgba(151, 151, 151, 0.308);
    }
    /* ==========地址 */
    .Address{
        height: .63rem;
        justify-content: space-between;
    }
    h2{
        font-size: .3rem;
        font-weight: 600;
    }
   
    .icon-zhuangtaizhuanhuan{
        font-size: .44rem;
        color: #3b99fb;
        position: relative;
    }
    .icon-tielu{
        font-size: .15rem;
        color: #3b99fb;
        position: absolute;
        left: .15rem;
        top: .15rem;
    }
    /* ============日期 */
    .Date{
        height: .63rem;
        font-weight: 600;
    }
    h3{
        font-size: .22rem;
        margin-right: .14rem;
        font-weight: 600;

    }
     .week{
       margin-top: .04rem;
    }
    /* ============选项 */
    .Sel{
        height: .48rem;
        font-weight: 600;
    }
    .Sel>input{
        margin-right: .6rem;
        margin-left: .05rem;
    }
    .chapiao{
        width: 100%;
        height: .5rem;
        background-color: #3b99fb;
        border-radius: .05rem;
        font-size: .2rem;
        color: #fff;
    }
</style>