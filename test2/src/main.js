import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import * as svgicon from 'vue-svgicon'
import './assets/icon'
Vue.use(svgicon, { tagName: 'svgicon', width: 100, height: 100 })

new Vue({
  render: h => h(App),
}).$mount('#app')
