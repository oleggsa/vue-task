import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import './assets/style.css'


new Vue({
  render: h => h(App),
  el: '#app',
  store
})