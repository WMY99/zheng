<template>
    <div class="table">
        <div></div>
        <div class="title" >
          <span  @click="tit(item.type)" :class="{active:tag===item.type}" v-for="item in list" :key="item.index">{{item.name}}</span>
        </div>
        <div class="icon">
          <span class="icon_file iconfont">&#xeb9d;</span>
          <span class="icon_gift iconfont">&#xeb9c;</span>
        </div>
      </div>
</template>
<script>
export default {
    props:["tag"],
    data(){
        return{
             type:"overtime",
            list:[
                {
                    name:"加班",
                    type:"overtime"
                },{
                    name:"休假",
                    type:"vacation"
                }
            ]
        }
    },
    computed:{
        get(){
            this.type=this.tag
        }
    },
  
    methods:{
        tit:function(type){
                this.type=type
                this.$emit("titl",type)
        }
    }
}
</script>
<style lang="scss">

</style>


