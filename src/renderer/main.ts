import { createApp } from 'vue'
import './style.css'
import './assets/icon/iconfont.css'
import './assets/style.css'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'

import { db } from '../common/db'

console.log(db)

createApp(App).use(createPinia()).use(router).mount('#app')

// db('Chat')
//   .first()
//   .then(obj => {
//     console.log(obj)
//   })
//   .catch(err => {
//     console.log(err)
//   })
