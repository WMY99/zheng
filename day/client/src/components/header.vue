<template>
     <div :class="type?'green header':'header'">
      <div>
        <span @click="back" class="icon_left iconfont">&#xeba7;</span>
      </div>
      <div class="title">{{type==="vacation"? "休假详情" :title}}</div>
      <div class="rights">
        <span class="icon_doc iconfont">&#xeb9a;</span>
       <router-link to="/search" v-if="type? '': 'no'"> <span class="icon_search iconfont">&#xebb1;</span></router-link>
      </div>
    </div>
</template>
<script>
export default {
  props:["type"],
    data(){
        return{
            title:""
        }
    },
    created(){
      this.title = this.$route.meta.title;
    },
    methods:{
      back:function(){
       this.$router.back()
      }
    }
}
</script>
<style lang="scss">
@import "../static/common.scss";

.header {
  height: pxTorem(44px);
  align-items: center;
  padding: 0 pxTorem(20px);
  display: flex;
  justify-content: space-between;
}
.header span {
  font-size: pxTorem(25px);
}
.title {
  font-size: pxTorem(20px);
}

.rights span {
  margin: 0 pxTorem(5px);
}
.no{
  display: none
}
.green{
  background: green;
  color: #fff;
}
</style>


