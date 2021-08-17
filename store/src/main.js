import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 导入全局默认样式
import "./assets/css/global.css";

// 引入element UI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 引入axios
import axios from "axios";

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
