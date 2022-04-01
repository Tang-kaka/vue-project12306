<template>
    <div class="storebox">
        <div class="wordbox">
            <h3>酒店预订</h3>
            <span>去领券，享更多优惠 ></span>
        </div>
        <ul>
            <li v-for="item in storelist" :key="item.str1">
                <img :src="item.img">
                <div class="wenzibox">
                    <p class="hotelname">{{item.str}}</p>        
                    <p class="fen" style="color: #3b99fb;"> <span class="pingfen">{{item.pingfen}}</span> 分</p>
                    <p class="price">
                        ¥<span class="nowprice">{{item.nowprice}}</span>
                        <span class="qi">起</span>
                        <span class="lastprice">¥{{item.lastprice}}</span>
                    </p>
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Hotel",
    props:["storelist"],
    data(){
        return{
           
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
        flex-wrap: wrap;
        justify-content: space-between;
    }
    li{
        width: 1.72rem;
        height: 2.74rem;
        border-radius: .1rem;
        box-shadow: 0 0 .05rem -0.01rem;
        display: flex;
        flex-direction: column;
        margin-top: .12rem;
    }
    img{
        width: 100%;
        height: 1.77rem;
        border-radius: .08rem;
        margin-left: .01rem;
    }
    .wenzibox{
        width: 100%;
        flex: 1;
        box-sizing: border-box;
        padding: 0 .1rem;
        /* display: flex;
        flex-direction: column;
        justify-content: space-evenly; */
        line-height: .28rem;
    }

    .hotelname{
        font-size: .2rem;
        font-weight: 600;
    }
    .pingfen{
        font-size: .2rem;
        font-weight: 600;
    }
    .price{
        color: #e6170f;
        font-size: .14rem;
    }
    .price .nowprice{
        font-size: .2rem;
        font-weight: 600;
        color: #e6170f;
    }
    .price span{
        color: #7a7979;
        font-size: .16rem;
    }
    .qi{
        margin: 0 .05rem;
    }
    .lastprice{
        text-decoration: line-through;
    }
</style>