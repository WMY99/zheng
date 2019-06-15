<template>
  <div class="list">
    <div @click="items(item)" class="items" v-for="(item,index) in list" :key="index">
      <div class="nav">
        <div>
          <span class="wen">{{item.applicationNumber}}</span>
        </div>
        <div>
          <span id="icon" class="icon_discovery icon iconfont">&#xeb97;</span>
          <span class="wen">待审批</span>
        </div>
      </div>
      <div class="connten">
        <div>申请人：<span>{{item.nickname}}</span></div>
        <div>加班类型：<span>{{item.describes}}</span></div>
        <div>加班时间：<span>{{item.startTime}}</span></div>
        <div>加班时数：<span>{{item.type}}</span></div>
      </div>
    </div>
  </div>
</template>   
<script>
import router from "@/router"
export default {
  props:["list"],
  data() {
    return {};
  },
  created() {
  },
  methods:{
    items:function(item){
       router.push("/detail/"+item.list_type+"/"+item.applicationNumber)
      
    }
  }
  
};
</script>
<style lang="scss">
@import "../static/common.scss";
.list{
  margin-top: pxTorem(15px);
    background: rgba(0,0,0,.05)
}
.nav {
  display: flex;
  justify-content: space-between;
  padding: pxTorem(10px) 0;
}
#icon {
  font-size: pxTorem(23px);
}
.wen {
  font-size: pxTorem(18px);
}
.connten{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap 

}
.connten div{
  width:45%;
  margin:  pxTorem(10px) pxTorem(5px);
  font-size: pxTorem(15px);

}
.items{
  margin: pxTorem(20px) 0;
  background: #fff;
  padding: 0 pxTorem(10px)

}
</style>

