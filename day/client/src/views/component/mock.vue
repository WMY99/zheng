<template>
    <div v-if="flag" class="mock" @click="ChildClick(flag)">
        <div class="box" @click.stop>
            <div @click="news(item.title)" v-for="(item,index) in list1" :key="index">
                <span class="icon_gift iconfont" v-html="item.icon"></span>
                <div>{{item.title}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["flag"],
  data() {
    return {
      flag1: false,
      list1: [
        {
          title: "加班",
          icon: "&#xebbb;",
          type: "overtimer"
        },
        {
          title: "休假",
          icon: "&#xebbb;",
          type: "vacation"
        }
      ]
    };
  },
  methods: {
    ChildClick: function(flag) {
      this.$emit("ListenChild", flag);
    },
    news(data) {
     this.$router.push({
        path:'/new',
        query:{
          item:data
        }
        
      })
    // this.$router.push("/new",data)
    }
  }
};
</script>

