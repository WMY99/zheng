<template>
  <div class="page">
   <Head />
    <Tab @tab="table" />
    <div class="conts">
      <Title @titl="tit" :tag="types"/>
      <List :list="list"/>
    </div>
    <button id="button" @click="btn">
      <span class="icon_add iconfont">&#xeb8f;</span>发起任务
    </button>
    <Mock :flag="flag" @ListenChild="ShowChild"/>
  </div>
</template>
<script>
import List from "../../components/index";
import Head from "../../components/header";
import Tab from "../component/tab";
import Title from "../component/title";
import Mock from "../component/mock";
import request from "../../utils/request";
import{mapMutations} from "vuex"
export default {
  data() {
    return {
      flag: false,
      types:"overtime",
      arr: {
        page: 1,
        pageSize: 5,
        create_at: 0,
        type: "overtime",
        status: 0
      },
      list:[]
    };
  },
  created() {
    this.requests();
    this.getUser()
  },
  components: {
    List,
    Title,
    Tab,
    Head,
    Mock
  },
  methods: {
     ...mapMutations(["getUser"]),
    btn: function() {
      this.flag = !this.flag;
    },
    requests() {
      request.get("/api/task/list",this.arr).then(res => {
          this.list=res.data
        }).catch(error => {
          console.log(error);
        });
    },
    table:function(status){
        this.arr.status=status
        this.types="overtime"
        this.arr.type=this.types
        this.requests()
    },
    tit(type){
       this.types=type
       this.arr.type=type
       this.requests()
    },
     ShowChild: function (data) {
      this.flag=!data
    }
    
  }
};
</script>

<style lang="scss" >
@import "../../static/common.scss";
html,
body,
#app,
.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
}

.table {
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  padding: pxTorem(10px) 0;
  margin-top: pxTorem(15px);
}
.table .title {
  overflow: hidden;
  border: 1px solid green;
  font-size: pxTorem(18px);
  border-radius: pxTorem(20px);
}
.table .title span {
  padding: pxTorem(5px) pxTorem(20px);
  display: inline-block;
  color: green;
}
.table .title span:nth-child(1) {
  border-right: 1px solid #666;
}
.table .title .active {
  background: green;
  color: #fff;
}
.icon {
  box-sizing: border-box;
}
.icon span {
  font-size: pxTorem(25px);
  padding: 0 pxTorem(3px);
}
.conts {
  flex: 1;
  overflow-y: auto;
}
#button {
  position: fixed;
  bottom: pxTorem(90px);
  right: pxTorem(15px);
  font-size: pxTorem(18px);
  padding: pxTorem(5px) pxTorem(20px);
  background: green;
  color: #fff;
  border-radius: pxTorem(30px);
}
#button span {
  font-size: pxTorem(20px);
  margin-right: pxTorem(5px);
}
.mock {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
}
.hide {
  display: none;
}
.box {
  background: #fff;
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: pxTorem(18px);
  position: absolute;
  bottom: 0;
  left: 0;
  padding: pxTorem(20px) 0;
  z-index: 999;
}
.box span {
  font-size: pxTorem(25px);
  margin: pxTorem(25px) 0;
}
</style>


