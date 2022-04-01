<template>
    <div class="banner">
        <ul>
            <li>
                <img src="../assets/lunbo/banner01.jpg" >
            </li>
            <li>
                <img src="../assets/lunbo/banner02.jpg" >
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Banner"
}
</script>

<style scoped>
    .banner{
        width: 100%;
        height: 1.7rem;
        overflow: auto;
    }
    ul{
        width: 7.5rem;
        display: flex;
    }
    .banner li{
        width: 3.75rem;
        height: 1.7rem;
    }
    .banner img{
        width: 100%;
        height:1.7rem;
    }
</style>