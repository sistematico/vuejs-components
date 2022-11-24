import { createApp } from 'vue'
import 'virtual:windi.css'
import App from './App.vue'
import router from './router'
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import '@vime/core/themes/default.css'

createApp(App).use(router).use(VueHighlightJS).mount('#app')
