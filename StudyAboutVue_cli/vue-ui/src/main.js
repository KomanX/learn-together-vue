import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;//生产模式下禁用提示

new Vue({
  render: h => h(App)
}).$mount("#app");
