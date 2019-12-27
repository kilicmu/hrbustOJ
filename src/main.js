import Vue from 'vue';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css'
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';


/*templates*/
import App from '@/app.vue';
import indexShow from '@/views/home/home.vue'
import threeCards from '@/views/home/threeCards.vue'
import Header from '@/views/header.vue'
import processPic from '@/views/problems/process.vue'
import newLi from '@/views/problems/newLi.vue'

import '@/styles/animate.css'
import '@/js/textline.js'
import '@/sass/config.scss'
import api from "@/api.js"

/* 第三方 */
import echarts from "echarts";
import VueResource from 'vue-resource'
import VueClipboard from 'vue-clipboard2'

Vue.prototype.$echarts = echarts;

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

new Vue({
    el: '#app',
    router: router,

    render: h => h(App),
    mounted() {
        if (document.documentElement.offsetWidth > 1300) {
            document.documentElement.style.fontSize = document.documentElement.offsetWidth / 100 + 'px';
        } else {
            document.documentElement.style.fontSize = 13 + "px";
        }
    }
});


// window.onresize = function () {
//     if (document.documentElement.offsetWidth > 1300) {
//         document.documentElement.style.fontSize = document.documentElement.offsetWidth / 100 + 'px';
//     } else {
//         document.documentElement.style.fontSize = 13 + "px";
//     }
// }