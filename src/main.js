import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//import Video from 'video.js'
//import 'video.js/dist/video-js.css'

//Vue.prototype.$video = Video

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')

