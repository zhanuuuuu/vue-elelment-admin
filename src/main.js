import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css' // 初始化样式
import '@/styles/index.scss' // 全局自定义样式入口
import ElementUI from 'element-ui' // Element UI
import 'element-ui/lib/theme-chalk/index.css'
import animated from 'animate.css' // 动画库

Vue.use(ElementUI)
Vue.use(animated)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
