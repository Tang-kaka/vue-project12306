<template>
  <div id="MyAccount">
    <Header :title="title"></Header>
    <div class="bigbox">
      <div class="box">
        <div>
          <p>个人资料</p>
          <p>完善个人资料</p>
        </div>
        <div>></div>
      </div>
      <div class="box2">
        <div class="box21">
          <div>
            <p>修改密码</p>
            <p>为您的账户增加安全保障</p>
          </div>
          <div>></div>
        </div>
        <div class="box21">
          <div>
            <p>修改邮箱</p>
            <p>为您的账户增加安全保障</p>
          </div>
          <div>></div>
        </div>
        <div class="box21">
          <div>
            <p>修改手机号</p>
            <p>为您的账户增加安全保障</p>
          </div>
          <div>></div>
        </div>
      </div>
      <button>退出登录</button>
    </div>
  </div>
</template>

<script>
import Header from "./components/header.vue";
export default {
  name: "MyAccount",
  components: {
    Header,
  },
  data() {
    return {
      title: "我的账户",
    };
  },
};
</script>

<style scoped>
.bigbox {
  background-color: #f5f5f5;
  height: 5.5rem;
}
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.18rem;
  height: 0.7rem;
  background-color: white;
  font-size: 0.14rem;
  margin-bottom: 0.05rem;
}
.box div p:nth-child(2) {
  color: #b2b2b2;
  font-size: 0.12rem;
}
.box div:nth-child(2) {
  color: #b2b2b2;
}
.box2 {
  display: flex;
  flex-direction: column;
  background-color: white;
}
.box2 .box21 {
  height: 0.7rem;
  border-bottom: 1px solid #b2b2b2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.18rem;
  height: 0.7rem;
  font-size: 0.14rem;
}
.box2 .box21 p:nth-child(2) {
  color: #b2b2b2;
  font-size: 0.12rem;
}
.box2 .box21 div:nth-child(2) {
  color: #b2b2b2;
}
button {
  width: 3.44rem;
  height: 0.45rem;
  background-color: #3b99fb;
  line-height: 0.45rem;
  text-align: center;
  border-radius: 00.05rem;
  color: white;
  border: none;
  margin: 0 0.16rem;
  position: absolute;
  bottom: 0.4rem;
}
</style>