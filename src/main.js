import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import store from './store.js'
import axios from 'axios'
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts


// axios.defaults.withCredentials = false
// axios.defaults.baseURL = "http://47.96.72.124:8080/"
axios.defaults.baseURL = "http://127.0.0.1:8080/"
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')