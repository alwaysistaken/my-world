import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Highlight from './highLiter.js'; // from 路径是highlight.js的路径，纯属自定义


Vue.config.productionTip = false;


Vue.use(Highlight);

new Vue({
    router,
    store,
    render: function(h) { return h(App) }
}).$mount('#app')