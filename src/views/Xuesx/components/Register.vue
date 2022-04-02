<template>
  <div id="Reg">
    <div class="box">
      <div class="title active" v-for="item in Title">
        <span>{{ item.str }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
};
</script>
<style scoped>
#Reg .box div {
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0 0.18rem;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: 1px solid gray;
}
#Reg .box div:nth-child(1) {
  background-color: #f0eff4;
  height: 0.5rem;
}
</style>