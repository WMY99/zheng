import Axios from "axios"
import router from "../router/index";
const request=Axios.create({
    baseURL:"http://localhost:3000/"
})


//请求之前拦截
request.interceptors.request.use((config)=>{
    return{
        ...config,
        headers:{
                ...config.headers,
                token:window.localStorage.getItem("token")
        }
    }
}),(error)=>{
        return promises.reject(error)
}
//响应前拦截
request.interceptors.response.use(response=>{
    return response.data
}),error=>{
        const response=error.response
        const status=response.status
        console.log(response)
       if(status>400){
           switch(status){
               case 401:
                router.push("/login")
                break;
                case 404:
                    alert("找不到页面")
                    break
           }
       }
        return promises.reject(error)
}
export default{
    get(url,data){
        return request.get(url,{
            params:data
        })
    },
    post(url,data){
        return request.post(url,data)
    }
}