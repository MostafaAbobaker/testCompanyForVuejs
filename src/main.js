import Vue from 'vue'
import App from './App.vue'
import './assets/css/animate.css'
// import './assets/css/owl.carousel.min.css'
// import './assets/css/owl.theme.default.min.css'
import './assets/css/fontawesome.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/style.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
