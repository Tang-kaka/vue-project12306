<template>
  <div id="Reg">
    <div class="box" v-for="item in arr1">
      <div :class="item.smallbox">
        <span>{{ item.tit }}</span>
      </div>
      <div :class="item.smallbox">
        <span>{{ item.user }}</span>
        <input type="text" :placeholder="item.plh1" :value="item.userName" />
      </div>
      <div :class="item.smallbox">
        <span>{{ item.pass }}</span>
        <input type="text" :placeholder="item.plh2" :value="item.password" />
      </div>
      <div :class="item.smallbox">
        <span>{{ item.qurenpass }}</span>
        <input type="text" :placeholder="item.plh3" />
      </div>
    </div>
    <div class="box2">
      <input type="checkbox" />
      同意 服务条款、隐私权政策
    </div>
    <button>下一步</button>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      arr1: [
        {
          smallbox: "smallbox",
          tit: "基本信息",
          user: "用户名：",
          userName: "",
          plh1: "字母、数字或'_',6-30位",
          pass: "密码：",
          password: "",
          plh2: "请输入密码",
          qurenpass: "确认密码",
          plh3: "请在此输入密码",
        },
        {
          smallbox: "smallbox",
          tit: "详细信息(用于身份核验，请务必正确填写)",
          user: "证件类型：",
          userName: "中国居民身份证>",
          pass: "姓名",
          password: "",
          plh2: "请输入真实姓名，以便购票",
          qurenpass: "证件号码：",
          plh3: "请输入证件号码",
        },
        {
          smallbox: "smallbox",
          tit: "联系方式",
          user: "手机号码：",
          userName: "",
          plh1: "请准确填写你的手机号",
          pass: "电子邮箱",
          password: "",
          plh2: "请准确填写你的邮箱地址",
          qurenpass: "旅客类型：",
          plh3: "成人",
        },
      ],
    };
  },
};
</script>
<style scoped>
#Reg {
  background-color: #f0eff4;
}
#Reg .box .smallbox {
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0 0.18rem;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: 1px solid gray;
}
#Reg .box .smallbox input {
  text-align: right;
}
#Reg .smallbox:nth-child(1) {
  background-color: #f0eff4;
  height: 0.5rem;
}
#Reg .box2 {
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0 0.18rem;
}

#Reg button {
  width: 3.44rem;
  height: 0.45rem;
  background-color: #3b99fb;
  line-height: 0.45rem;
  text-align: center;
  border-radius: 00.05rem;
  color: white;
  border: none;
  margin: 0 0.16rem;
}
</style>