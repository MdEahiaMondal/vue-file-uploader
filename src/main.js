import { createApp } from 'vue'
import App from './App.vue'

import SpecialUploader from './main-entry'

const app = createApp(App)
app.use(SpecialUploader, { img: '' })
app.mount('#app')
