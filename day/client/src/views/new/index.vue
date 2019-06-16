<template>
    
    <div class="wrap">
        <Head />
        <div class="headers">
            <div class="left">
                <img :src="obj.avatar" alt="">
            </div>
            <div class="right">
            <div class="list">
                <p>
                    <span>申请人姓名：</span>
                    <span>{{obj.nickname}}</span>
                </p>
                <p>
                    <span @click="personal(obj)" class="iconfont you">&#xe630;</span>
                </p>

            </div>
          <div class="list">
              <p>
                  <span>直接主管</span>
              <span>哇哈哈</span>
              </p>
              <span></span>
          </div>
              
            </div>
        </div>
           <div class="back">
        <div class="detail">
                <h2>申请信息</h2>
                <ul>
                    <li>
                        <span>{{tit}}日期</span>
                        <span>
                             <el-date-picker
                                    v-model="value1"
                                    type="date"
                                    placeholder="选择日期">
                             </el-date-picker>
                        </span>
                    </li>
                    <li>
                        <span>{{tit}}类型</span>
                        <select  @change="select" :value="value">
                                <option value ="">请选择</option>
                                <option v-for="(item,index) in this[this.type+'Type']" :key="index" 
                                :value ="item.type">{{item.name}}</option>
                                
                        </select>
                    </li>
                    <li>
                        <span>{{tit}}起始时间</span>
                        <span>
                                <el-time-picker
                                        v-model="value2"
                                        placeholder="起始时间">
                                </el-time-picker>
                         </span>
                    </li>
                    <li>
                        <span>{{tit}}截止时间</span>
                        <span>
                         <el-time-picker
                                    v-model="value3"
                                    :picker-options="{
                                    
                                    }"
                                    placeholder="结束时间">
                        </el-time-picker>
                        </span>
                    </li>
                    <li>
                        <span>共计时数</span>
                        <span></span>
                    </li>
                </ul>
          </div>
          <div class="why">
              <h2>{{tit}}事由</h2>
              <textarea name="" v-model="text" placeholder="最多可以输入200个字"></textarea>
          </div>
          <div class="file">
              <h2>上传附件</h2>
             <input class="file" type="file" value="arr"  @change="file"  multiple>
          </div>
        </div>
        <footer class="footers">
          <div class="btns">
               <button class="quxiao" @click="quxiao">取消</button>
           <button class="sure" @click="sure">确定</button>
          </div>

        </footer>
    </div>
</template>
<script>
import Head from "../../components/header"
// import {mapMutations} from "vuex"

import request from "../../utils/request"
export default {
    data(){
        return {
            obj:{},
           tit:"",
           value1:"",
           value2:"",
            value3:"",
            value:"",
            text:"",
            types:"",
            type:"overtime",
            arr:"",
            num:5,
            overtimeType:[
                {
                    type:1,
                    name:"节假日加班"
                }, {
                    type:2,
                    name:"周末加班"
                }, {
                    type:3,
                    name:"没做完加班"
                }
            ],
             vacationType:[
                {
                    type:1,
                    name:"节假日休班"
                }, {
                    type:2,
                    name:"周末休假"
                }
            ]
        }
    },
    components:{
         Head
    },
    props:{
        item:Object
    },
    created(){
        this.getdata()
     this.tit=this.$route.query.item
      if(this.tit=="加班"){
                    this.type="overtime"
               }else{
                    this.type="vacation"
               }
    },
    methods:{
    //   ...mapMutations(["getUser"],data)
         getdata(){
             request.get("/api/user/info",this.arr).then(res => {
                    this.obj=res.data
                  }).catch(error => {
                    console.log(error);
                  });
         },
         quxiao:function(){
             this.$router.back()
         },
         personal:function(obj){
             this.$router.push({
                path:"/personal",
                query:{
                objs:obj
                }
            });
         },
         file:function(){
                console.log(this.arr)
         },
         select:function(e){
            this.value=e.target.value
           
         },
         sure(){
          if(this.value1=="" || this.value2=="" || this.value3==""){
              alert("信息不完整")
          }else{
                var d = this.value2
                const youWant= d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + 
                d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
            var d=this.value3    
                const endtime= d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + 
                d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
                console.log(this.value)
                
            request.post("/api/apply/"+this.type,{
               startTime:youWant,
               endTime:endtime,
               describe:this.text,
               type:this.value,
               annex:[]
            }).then(res=>{
                if(res.code===1){
                    this.$router.push({
                        path:"/history",
                        query:{
                            res:res,
                            title:"添加成功"
                        }
                    })
                }
            })
          }
         }
        



    }

}
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
.headers{
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
    img{
        width:pxTorem(60px);
        height: pxTorem(60px);
       line-height: pxTorem(60px);
        border-radius: 50%
    }
}
.right{
    flex: 1;
    margin-right: pxTorem(20px);
        .you{
            font-size: pxTorem(13px);
            align-items: center
        }
        .list{
            display: flex;
            justify-content: space-between;
            margin: pxTorem(20px) 0;
            span{
                 font-size: pxTorem(15px)
            }
            p{
                font-size: pxTorem(15px)
            }
        }
        // .user{
        //     display: flex;
        //     justify-content: space-between
        // }
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

