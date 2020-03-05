import Vue from 'vue';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css'
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import store from './store'


/*templates*/
import App from '@/app.vue';
import indexShow from '@/views/home/home.vue'
import threeCards from '@/views/home/threeCards.vue'
import Header from '@/views/header/header.vue'
import processPic from '@/views/problems/process.vue'
import newLi from '@/views/problems/newLi.vue'
import MonacoEditor from 'monaco-editor-vue'

import '@/js/textline.js'
import '@/sass/config.scss'
import { api } from "@/api.js"
import regs from '@/regs.js'
/* 第三方 */
import echarts from "echarts";
import VueResource from 'vue-resource'
import VueClipboard from 'vue-clipboard2'

Vue.prototype.$echarts = echarts;
Vue.prototype.$api = api;
Vue.prototype.$regs = regs;


Vue.use(VueRouter);
Vue.use(ViewUI);
Vue.use(VueResource);
Vue.use(VueClipboard);




// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    ViewUI.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    ViewUI.LoadingBar.finish();
    window.scrollTo(0, 0);
});
//组件注册
Vue.component('index-show', indexShow)
Vue.component('all-header', Header)
Vue.component('three-cards', threeCards)
Vue.component('process-pic', processPic)
Vue.component('new-li', newLi)
Vue.component('MonacoEditor', MonacoEditor)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});
