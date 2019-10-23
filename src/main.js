import Vue from 'vue';
import ViewUI from 'view-design';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import indexShow from './views/home.vue'
import mainContent from './views/content.vue'
import threeCards from './views/threeCards.vue'
import 'view-design/dist/styles/iview.css'
import Header from'./views/header.vue'
import './styles/animate.css'
import './js/adapt.js'

Vue.use(VueRouter);
Vue.use(ViewUI);

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

Vue.component('index-show', indexShow)
Vue.component('main-content', mainContent)
Vue.component('all-header', Header)
Vue.component('three-cards', threeCards)

new Vue({
    el: '#app',
    router: router,

    render: h => h(App)
});

