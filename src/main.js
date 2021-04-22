import { createApp } from 'vue'
// import { auth } from './firebase'

import App from './App.vue'
import router from './router'
//import store from './store'
//import Vue from 'vue'

createApp(App).use(router).mount('#app')

// let exists
// auth.onAuthStateChanged(() => {
//     if(!exists) exists = new Vue(
//     {
//         router,
//     //      store,
//         render: a => a(App)
        
//     }).$mount('#app')
// })


