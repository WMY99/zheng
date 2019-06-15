<template>
  <div class="tab">
    <div @click="tab(item.status)" v-for="item in list" :key="item.id" class="item" :class="{hover:index==item.status}">
         
           <div>
                <span class="icon_im_more iconfont" v-html="item.icon"> {{ item.icon }}</span>
            </div>
            <div class="title"> {{ item.title }}</div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index:0,
      list: [
        {
          title: "待处理",
          icon: "&#xeb9f;",
          status:0
        },
        {
          title: "已发送",
          icon: "&#xebb8;",
          status:1
        },
        {
          title: "已处理",
          icon: "&#xeba1;",
          status:2
        }
      ]
    };
  },
  methods:{
    tab(status){
      this.index=status
      this.$emit("tab",status)
    }
  }
};
</script>
<style lang="scss">
@import "../../static/common.scss";

.tab {
  display: flex;
  justify-content: space-around;
  margin-top: pxTorem(10px);
  box-shadow: 0 pxTorem(5px) pxTorem(28px) #bebcbc;
}
.tab .title {
  font-size: pxTorem(18px);
  margin-top: pxTorem(5px);
}
.tab .item {
  text-align: center;
  margin: pxTorem(10px) 0;
}
.item span {
  font-size: pxTorem(25px);
}
.hover{
  color: green
}
</style>


