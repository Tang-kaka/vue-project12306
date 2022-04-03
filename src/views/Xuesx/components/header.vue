<template>
  <div class="res">
    <router-link to="/My" tag="span">
      <span> < </span>
    </router-link>
    <span>{{ title }}</span>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: ["title"],
  // data() {
  //   return {
  //     title: "中国铁路12306",
  //   };
  // },
};
</script>
<style  scoped>
.res {
  height: 0.42rem;
  padding-top: 0.49rem;
  background-color: #3b99fb;
  display: flex;
  justify-content: flex-start;
  color: #e3f1f2;
  font-size: 0.22rem;
}
.res > span:nth-child(1) {
  margin-left: 0.2rem;
}
.res > span:nth-child(2) {
  margin: 0 auto;
}
</style>
