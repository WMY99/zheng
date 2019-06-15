<template>
    <div class="wrap">
          <Head :type="type"/>
          <div class="one">
            <div class="left">
                    <img class="img" :src="obj.avatar" alt="">
            </div>
            <div class="right">
                <ul>
                    <li class="user">
                        <div>
                            <span>申请人姓名：</span>
                        <span>{{obj.nickname}}</span>
                        </div>
                        <span @click="personal(obj)" class="iconfont you">&#xe630;</span>
                    </li>
                    <li>
                        <span>直接主管：</span>
                        <span></span>
                    </li>
                    <li>
                        <span>申请单号：</span>
                        <span>{{obj.applicationNumber}}</span>
                    </li>
                    <li>
                        <span>发起时间：</span>
                        <span>{{obj.updated_at}}</span>
                    </li>
                    
                </ul>
            </div>
          </div>
        <div class="back">
        <div class="detail">
                <h2>申请信息</h2>
                <ul>
                    <li>
                        <span>加班日期</span>
                        <span>{{obj.updated_at}}</span>
                    </li>
                    <li>
                        <span>加班类型</span>
                        <span>{{obj.describes}}</span>
                    </li>
                    <li>
                        <span>加班起始时间</span>
                        <span>{{obj.startTime}}</span>
                    </li>
                    <li>
                        <span>加班截止时间</span>
                        <span>{{obj.endTime}}</span>
                    </li>
                    <li>
                        <span>共计时数</span>
                        <span>{{obj.type}}</span>
                    </li>
                </ul>
          </div>
          <div class="why">
              <h2>加班事由</h2>
              <textarea name="" placeholder="最多可以输入200个字"></textarea>
          </div>
          <div class="file">
              <h2>上传附件</h2>
              <ul>
                  <li v-for="(item,index) in list" :key="index">
                      <img :src="'http://localhost:3000'+item" alt="">
                  </li>
              </ul>
          </div>
        </div>
        <footer class="footers">
           <button @click="history"><span class="icon_left iconfont history">&#xeba7;</span>历史</button>
          <div class="btns">
               <button class="quxiao" @click="quxiao">取消</button>
           <button class="sure" @click="sure">确定</button>
          </div>

        </footer>
    </div>
</template>
<script>
import request from "@/utils/request"
import router from "@/router/index"
import Head from "../../components/header"

export default {
  data() {
    return {
        obj:{},
        list:[]
        
    };
  },
  components:{
      Head
  },
  props: {
    type: String,
    id:String
  },
  created(){
      this.getData()

  },
  methods:{
      getData(){
          request.get(`/api/apply/${this.type}`,{
                applicationNumber:this.id
          }).then(res=>{
              this.obj=res.data
              this.list=res.data.annex
          })
      },
      quxiao:function(){
          this.$router.back()
      },
      history:function(){
         request.get("/api/task/history",{
             applicationNumber:this.obj.applicationNumber
         }).then(res=>{
           if(res.code==1){
               this.$router.push({
                   path:"/history",
                  query:{
                        obj:res,
                        title:"已查阅历史记录"
                  }
                   
               })
           }
         })
      },
      sure(){
            this.$router.push("/home")
      },
      personal(obj){
            this.$router.push({
                    path:"/personal",
                    query:{
                         objs:obj
                        }
                });
      }
  }
};
</script>

<style lang="scss">
@import "../../static/common.scss";
html,
body,
#app,
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
    background:rgba(0,0,0,.03);
}
.one{
    display: flex;
    height: pxTorem(120px);
    background:green;
    color:#fff;
    padding-bottom:pxTorem(50px);
    border-bottom-right-radius:pxTorem(50px);
    border-bottom-left-radius:pxTorem(50px)
}
.left{
    width:20%;
    text-align: center;
    align-items: center;
     margin: 0 pxTorem(10px);
     line-height: 16;
    .img{
        width:pxTorem(60px);
        height: pxTorem(60px);
     
        border-radius: 50%
    }
}
.right{
        .you{
            font-size: pxTorem(13px);
            align-items: center
        }
        li{
            margin: pxTorem(10px) 0;
           
            font-size: pxTorem(14px)
        }
        .user{
            display: flex;
            justify-content: space-between
        }
}
.back{
    width:100%;
    flex:1;
    position: relative;
    top:pxTorem(-40px);
    overflow-y: auto;
    .detail{
        margin: 0 pxTorem(30px);
        background: #FFF;
        border-radius: pxTorem(15px);
        h2{
            font-size: pxTorem(16px);
            padding: pxTorem(10px) pxTorem(10px)
        }
        ul{
            margin:0 pxTorem(9px);
            li{
                font-size: pxTorem(13px);
                padding: pxTorem(5px);
             
                display: flex;
                justify-content: space-between
            }
        }
    }
    .why{
          margin: pxTorem(20px) pxTorem(30px);
        background: #FFF;
        border-radius: pxTorem(15px);
       
        h2{
            font-size: pxTorem(16px);
            padding: pxTorem(10px) pxTorem(10px)
        }
        textarea{
            border-top:pxTorem(1px) solid #ccc;
            // padding:0 pxTorem(15px);
           font-size: pxTorem(13px);
           width:100%;
            height: pxTorem(60px);         
        }
    }
    .file{
          margin:0 pxTorem(30px);
          padding: pxTorem(20px) 0;
        background: #FFF;
        border-radius: pxTorem(15px);
        h2{
            font-size: pxTorem(16px);
            padding:0 pxTorem(15px)  pxTorem(5px)
        }
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                margin: pxTorem(5px) ;
                img{
                    width:pxTorem(70px);
                    height: pxTorem(50px)
                }
            }
        }
    }
}
.footers{
    width:100%;
    display: flex;
    height: pxTorem(50px);
    justify-content: space-between;
  button{
       font-size: pxTorem(15px);
       padding: 0 pxTorem(30px);
       .history{
           font-size: pxTorem(15px);
           margin-right: pxTorem(15px)
       }
      
   }
  .btns{
      display: flex;
      flex:1;
      justify-content: space-around;
     button{
       font-size: pxTorem(15px);
       width:100%;
   }
   .sure{
       background: green;
       color: #FFF;
   }
   .quxiao{
       background: rgba(0,0,0,.06)
   }
  }
}
</style>

