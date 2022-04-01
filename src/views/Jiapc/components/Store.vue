<template>
    <div class="storebox">
        <div class="wordbox">
            <h3>铁路商城</h3>
            <span>更多 ></span>
        </div>
        <ul>
            <li v-for="item in storelist" :key=item.str1>
                <img :src="item.img">
                {{item.str}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Store",
    data(){
        return{
            storelist:[
                {
                    img:require("../assets/lunbo/store01.jpg"),
                    str:"徐文小菠萝",
                    str1:''
                },
                {
                    img:require("../assets/lunbo/store02.jpg"),
                    str:"艾草青团礼盒"
                },
                {
                    img:require("../assets/lunbo/store01.jpg"),
                    str:"徐文小菠萝"
                },
                {
                    img:require("../assets/lunbo/store02.jpg"),
                    str:"艾草青团礼盒"
                }
             
            ]
        }
    }
}
</script>

<style scoped>
    .storebox{
        width: 3.57rem;
        height: 2.2rem;
        margin: 0 auto;
        
    }
    .wordbox{
        height: .58rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: .16rem 0;
    }
    h3{
        font-size: .26rem;
        font-weight: 600;
    }
    ul{
        display: flex;
        overflow: auto;
    }
    li{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 1.32rem;
        margin-right: .12rem;
    }
</style>