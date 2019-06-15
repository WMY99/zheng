<template>
    <div class="page">
        <div class="header">
            <span class="关闭26 iconfont">&#xe64d;</span>
        </div>
        <h1>{{title}}</h1>
        <div class="cont">
            <div class="input">
                <div>
                    <input v-model="tel" type="text" placeholder="手机号码">
                </div>
                <div class="input">
                    <input type="text" v-model="code" placeholder="验证码">
                    <span class="button">获取验证码</span>
                </div>
            </div>
            <div class="login">
                <button class="btn" @click="btn">登录/注册</button>
            </div>
            <div class="titles">
                <button>使用账号密码登录</button>
            </div>
        </div>
        <div class="footer">
            <h2>使用以下方式进行账户注册/登录</h2>
            <div class="foot">
                <div></div>
                <div>
                    <img
                        src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1406388842,826642910&fm=27&gp=0.jpg"
                        alt=""
                    >
                </div>
                <div>
                    <img
                        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=436937017,337546424&fm=26&gp=0.jpg"
                        alt=""
                    >
                </div>
                <div></div>
            </div>
        </div>
    </div>
</template>
<script>
import request from '../../utils/request'
import roter from "../../router/index"

export default {
  data() {
    return {
      title: "",
      tel: "",
      code: "",
   TEL_REGEXP :/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/
    };
  },
  created() {
    this.title = this.$route.meta.title;
  },
  methods:{
      btn:function(){
          if(this.code!=="" && this.TEL_REGEXP.test(this.tel)){
             request.post("/api/login",{
              phone:this.tel,
              password:this.code
            }).then(data=>{
               window.localStorage.setItem("token",data.token)
              this.$router.push("/home")
          
            }).catch(error=>{
                alert(error.response.data.message)
            })
          }else{
              alert("账号或密码错误！")
          }
      }
  }
};
</script>

<style lang="scss">
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
.header {
  height: pxTorem(30px);
  margin-top: pxTorem(15px);
}
.header span {
  font-size: pxTorem(20px);
  margin: pxTorem(10px) pxTorem(20px);
}
h1 {
  font-size: pxTorem(25px);
  font-weight: 800;
  padding: pxTorem(20px);
  box-shadow: 0 pxTorem(5px) pxTorem(30px) #ccc;
  margin-top: pxTorem(5px);
}
.cont {
  flex: 1;
  margin-top: pxTorem(20px);
}
.cont input {
  border-bottom: pxTorem(1px) solid #ccc;
  font-size: pxTorem(18px);
  width: 100%;
  padding: pxTorem(10px) 0;
}
.cont .input {
  position: relative;
  margin: pxTorem(20px) 0;
  padding: 0 pxTorem(10px);
}
.cont .input:nth-child(2) {
  padding: 0 pxTorem(5px);
}
.button {
  font-size: pxTorem(15px);
  position: absolute;
  right: pxTorem(10px);
  background: none;
  bottom: pxTorem(2px);
  padding: pxTorem(5px) pxTorem(15px);
}
.login {
  margin: pxTorem(70px) pxTorem(30px) 0;
}
.btn {
  width: 100%;
  padding: pxTorem(5px) pxTorem(20px);
  font-size: pxTorem(20px);
  background: rgba(0, 0, 0, 0.2);
  border-radius: pxTorem(70px);
  color: #fff;
}
.titles {
  margin-top: pxTorem(30px);
  text-align: center;
}
.titles button {
  font-size: pxTorem(18px);
  color: green;
  background: none;
  border: none;
}
.footer {
  text-align: center;
}
h2 {
  font-size: pxTorem(15px);
}
.foot {
  display: flex;
  justify-content: space-around;
  margin: pxTorem(20px) 0 pxTorem(30px);
}
.foot div {
  text-align: center;
}
.foot img {
  width: pxTorem(45px);
  height: pxTorem(45px);
}
</style>



