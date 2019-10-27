import Vue from 'vue';
import ViewUI from 'view-design';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import indexShow from './views/home.vue'
import answer from './views/answer.vue'
import mainContent from './views/content.vue'
import threeCards from './views/threeCards.vue'
import 'view-design/dist/styles/iview.css'
import Header from './views/header.vue'
import processPic from './views/process.vue'
import './styles/animate.css'
import newLi from './views/newLi.vue'
import echarts from "echarts";
import VueResource from 'vue-resource'
import './js/textline.js'
import $ from 'jquery'
import './js/textline.js'

Vue.prototype.CODE_SUBMIT_URL = "/problem/submit";



Vue.prototype.$echarts = echarts;

Vue.use(VueRouter);
Vue.use(ViewUI);
Vue.use(VueResource);

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
Vue.component('main-content', mainContent)
Vue.component('all-header', Header)
Vue.component('three-cards', threeCards)
Vue.component('process-pic', processPic)
Vue.component('new-li', newLi)

new Vue({
    el: '#app',
    router: router,

    render: h => h(App),
    mounted() {
        document.documentElement.style.fontSize = "21.17px";
    }
});




window.onresize = function () {
    var w = document.documentElement.offsetWidth;
    document.documentElement.style.fontSize = w / 100 + 'px';
}