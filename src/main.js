import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./plugins/element.js"
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/fonts/iconfont.css"
// 导入全局样式表
import "@/assets/css/global.css"

import axios from "axios"
// 配置请求的跟路径
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/login'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
