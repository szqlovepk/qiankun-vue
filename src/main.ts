import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./index.less";
import * as echarts from "echarts";
import Cookies from "js-cookie";
import myPlugin from "@/plugins";
// import locale from "element-ui/lib/locale/lang/en";

// 国际化设置
// Vue.use(ElementUI, { locale });
Vue.use(ElementUI);
Vue.use(myPlugin);
Vue.prototype.$echarts = echarts;
Vue.prototype.$Cookies = Cookies;
Vue.config.productionTip = false;

let vm: any = null;
function render(props: any = {}) {
  const { container } = props;
  vm = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

if ((window as any).__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = (window as any).__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props: any) {
  console.log("[vue] props from main framework", props);
  render(props);
}
export async function unmount() {
  vm.$destroy();
  vm.$el.innerHTML = "";
  vm = null;
}
export default vm;
