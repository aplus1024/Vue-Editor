import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App.vue'
import store from './store/store'

Vue.use(ElementUI)

var vueapp = new Vue({
	store, // inject store to all children
	el: '#app',
	render: h => h(App, {email: 'testhtml'})
})