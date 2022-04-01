<template>
  <div>
    <Search></Search>
    <Banner></Banner>
    <Chapiao></Chapiao>
    <Nav></Nav>
    <Zixun></Zixun>
    <Store></Store>
    <Hotel :storelist="storelist"></Hotel>
  </div>
</template>

<script>
import Search from "./components/Search.vue"
import Banner from "./components/Banner.vue"
import Chapiao from "./components/Chapiao.vue"
import Nav from "./components/Nav.vue"
import Zixun from "./components/Zixun.vue"
import Store from "./components/Store.vue"
import Hotel from "./components/Hotel.vue"
export default {
  data(){
    return{
       storelist:[
                {
                    img:require("./assets/lunbo/hotel01.jpg"),
                    str:"喆啡酒店",
                    pingfen:'4.6',
                    nowprice:"181",
                    lastprice:'200'
                },
                {
                    img:require("./assets/lunbo/hotel02.jpg"),
                    str:"唯庭酒店",
                    pingfen:'5.0',
                    nowprice:"305",
                    lastprice:'373'
                },
                {
                    img:require("./assets/lunbo/hotel03.jpg"),
                    str:"希岸酒店",
                    pingfen:'4.7',
                    nowprice:"201",
                    lastprice:'209'
                },
                {
                    img:require("./assets/lunbo/hotel04.jpg"),
                    str:"如家商旅酒店",
                    pingfen:'4.6',
                    nowprice:"223",
                    lastprice:'265'
                },
                {
                    img:require("./assets/lunbo/hotel05.jpg"),
                    str:"速适轻奢酒店",
                    pingfen:'4.5',
                    nowprice:"128",
                    lastprice:'191'
                }
             
            ]
    }
  },
    components:{
        Search,Banner,Chapiao,
        Nav,Zixun,Store,Hotel
    }
}
</script>

<style scoped>

</style>