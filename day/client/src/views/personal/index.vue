<template>
    <div class="wrap">
       <Head />
       <div class="header1">
           <h2>
               <img :src="obj.avatar" alt="">
           </h2>
           <p>{{obj.nickname}}</p>
       </div>
    </div>
</template>
<script>
import Head from "../../components/header"
import router from "@/router/index"

export default {
    data(){
        return {
                obj:{}
        }
    },
    components:{
        Head
    },
    created(){
       this.obj=this.$route.query.objs
    }
}
</script>
<style lang="scss">
@import "../../static/common.scss";

.header1{
    width:100%;
    height: pxTorem(120px);
    background:green;
    color:#fff;
    padding-bottom:pxTorem(50px);
    border-bottom-right-radius:pxTorem(50px);
    border-bottom-left-radius:pxTorem(50px);
    h2{
        width:100%;
        padding: pxTorem(20px) 0;
        text-align: center;
        align-items: center;
        img{
            width:pxTorem(60px);
            border-radius: 50%
        }
    }
    p{
        width:100%;
        text-align: center;
        font-size: pxTorem(15px)
    }
}
</style>

