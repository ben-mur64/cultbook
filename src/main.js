import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false

let data = {
  people: mock,
  friends: new Set(),
  profile: {
    id: 0,
    full_name: "Robert Olmstead",
    avatar: "/images/lovecraft.jpg",
    god: "None"
  },
  recompute: 0
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
