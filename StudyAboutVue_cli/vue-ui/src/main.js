import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false //生产模式下禁用提示
Vue.use(ElementUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
