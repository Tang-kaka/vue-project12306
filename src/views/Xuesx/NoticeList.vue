<template>
  <div>
    <Header></Header>
    <div id="NoticeList">
      <router-link to="Notice" tag="span">
        <div v-for="items in NoticeList">
          {{ items.text }}<span>{{ items.time }}</span>
        </div>
      </router-link>
      <!-- <router-link to="Notice" tag="span">
        <div>公告<span>2022-03-26</span></div>
      </router-link>
      <router-link to="Notice" tag="span">
        <div>候补购票说明<span>2022-03-26</span></div>
      </router-link>
      <router-link to="Notice" tag="span">
        <div class="last">公告<span>2022-03-26</span></div>
      </router-link>
      <router-link to="Notice" tag="span">
        <div class="last"><span>2022-03-26</span></div>
      </router-link> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/header.vue";
export default {
  name: "NoticeList",
  components: {
    Header,
  },
  data() {
    return {
      NoticeList: [
        {
          text: "公告",
          time: "2022-03-26",
          id: "001",
        },
        // {
        //   text: "公告",
        //   time: "2022-03-26",
        //   id: "002",
        // },
        // {
        //   text: "候补购票说明",
        //   time: "2022-03-26",
        //   id: "003",
        // },
        // {
        //   text: "公告",
        //   time: "2022-03-26",
        //   id: "004",
        // },
      ],
    };
  },
  created() {
    // let data = new URLSearchParams();
    // data.append("txet", this.text);
    // data.append("id", this.id);
    axios({
      url: "http://4a6469w524.51vip.biz/notice/findNotices",
      method: "get",
      //   headers: {
      //     "Content-Type": "application/x-www-form-urlencoded",
      //   },
    }).then((res) => {
      this.text = "";
    });
  },
};
</script>

<style scoped>
#NoticeList {
  width: 3.56rem;
  height: 3.2rem;
  background-color: white;
  margin: 0.1rem auto 0.2rem;

  border-radius: 0.06rem;
}
#NoticeList div {
  width: 3.36rem;
  height: 0.44rem;
  line-height: 0.4rem;
  margin: 0 auto;
  border-bottom: 1px solid #dfdfdf;
  font-weight: 700;
}
#NoticeList .last {
  border-bottom: none;
}
#NoticeList div span {
  float: right;
  color: #b3b3b3;
  font-size: 0.12rem;
  font-weight: 700;
}
</style>