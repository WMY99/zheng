import Vue from "vue";
import Vuex from "vuex"
import request from "../utils/request"
Vue.use(Vuex)
const store=new Vuex.Store({
  data(){
    return {
    }
  },
    state:{

    },  
     actions:{

    },
     mutations:{
        getUser(){
                request.get("/api/user/info",this.arr).then(res => {
                  }).catch(error => {
                    console.log(error);
                  });
            }
    }

})
window.store=store
export default store