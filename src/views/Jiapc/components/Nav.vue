<template>
  <ul class="navbox">
          <li v-for="item in navlist" :key=item.img>
              <img :src="item.img">
              {{item.str}}
          </li>
  </ul>
</template>

<script>
export default {
    name:"Nav",
    data(){
        return{
            navlist:[
                {
                    img:require("../assets/navimg/nav01.jpg"),
                    str:"车站大屏"
                },
                {
                    img:require("../assets/navimg/nav02.jpg"),
                    str:"计次.定期票"
                },
                {
                    img:require("../assets/navimg/nav03.jpg"),
                    str:"铁路e卡通"
                },
                {
                    img:require("../assets/navimg/nav04.jpg"),
                    str:"温馨服务"
                },
                {
                    img:require("../assets/navimg/nav05.jpg"),
                    str:"空铁联运"
                },
                {
                    img:require("../assets/navimg/nav06.jpg"),
                    str:"铁水联运"
                },
                {
                    img:require("../assets/navimg/nav07.jpg"),
                    str:"铁路游"
                },
                {
                    img:require("../assets/navimg/nav08.jpg"),
                    str:"酒店住宿"
                },
                {
                    img:require("../assets/navimg/nav09.jpg"),
                    str:"餐饮.特产"
                },
                {
                    img:require("../assets/navimg/nav10.jpg"),
                    str:"约车"
                },
                {
                    img:require("../assets/navimg/nav11.jpg"),
                    str:"铁路商城"
                },
                {
                    img:require("../assets/navimg/nav12.jpg"),
                    str:"更多"
                },
            ]
        }
    }
}
</script>

<style scoped>
    .navbox{
        height: 2.63rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
    }
    li{
        width: 24%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img{
        width: .57rem;
    }
</style>