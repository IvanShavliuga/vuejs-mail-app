import Vue from 'vue'
import App from './App.vue'
import store from './data/store'

export const eventBus = new Vue();

let vm=new Vue({
  el: '#app',
  render: h => h(App),
  store
})
