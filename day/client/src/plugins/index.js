import alerts from "@components/alert"

export default{
    install(vue){
        let alert=vue.extend(alerts)
        vue.prototype.$alert=text=>{
           new alert({
               propsData:{
                   text
               }
           })
        }
        alert.$mount()
        document.body.appendChild(alert,$el)
    }
}