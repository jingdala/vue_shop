import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./plugins/element.js"
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/fonts/iconfont.css"
import TreeTable from "vue-table-with-tree-grid"
// 导入全局样式表
import "@/assets/css/global.css"

import axios from "axios"
// 配置请求的跟路径
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1'
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})
Vue.prototype.$http = axios
Vue.component('tree-table', TreeTable)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
