<template>
 <div class="res">
      <span> < </span>
      <span>中国铁路12306</span>
    </div>
</template>
<script>

export default {
  name: "Header",
}
</script>
<style  scoped>
.res {
  height: 0.42rem;
  padding-top: 0.49rem;
  background-color: #3b99fb;
  display: flex;
  justify-content: flex-start;
  color: #e3f1f2;
  font-size: .22rem;
}
.res>span:nth-child(1){
  margin-left:.2rem;
}
.res>span:nth-child(2){
  margin-left:.77rem;
}
</style>
