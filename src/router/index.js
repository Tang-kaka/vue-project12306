import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
import My from "../views/Xuesx/My.vue"
import Notice from "../views/Xuesx/Notice.vue"
import NoticeList from "../views/Xuesx/NoticeList.vue"

//use 函数是吧插件安装到vue框架里，插上插件
Vue.use(VueRouter);

const routes = [
  {
    path: "/My",
    name: "My",
    component: My,
  },
  {
    path: "/NoticeList",
    name: "NoticeList",
    component: NoticeList
  },
  {
    path: "/Notice",
    name: "Notice",
    component: Notice
  },
  // {
  //   path: '*',
  //   component: NoPage组件
  // }
];
//2.创建vue-routder对象
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
