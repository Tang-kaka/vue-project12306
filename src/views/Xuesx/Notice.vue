<template>
    <div class="body">
      <Header></Header>
      <h4>公告</h4>
      <p>
       &nbsp;铁路部门计划于4月上旬对旅客列车运行图进行优化调整，已更好的满足广大旅客出行要求。为切实做好相关准备工作，将暂停发售4月8日及以后始发的各次旅客列车车票，预计恢复发售时间为4月2日。感谢广大旅客对铁路工作的关心与支持。
      </p>
    </div>
</template>

<script>
import Header from "./components/header.vue"
export default {
    name:"Notice",
    components:{
      Header
    }
}
</script>

<style scoped>
h4{
  margin-top: .26rem;
  width: 100%;
  text-align: center;
  /* font-weight: 700; */
}
p{
  margin: .18rem auto;
  width:3.56rem;
  text-indent: .2rem;
  font-size: .14rem;
  
}
</style>