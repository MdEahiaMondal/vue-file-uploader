import { createApp } from 'vue'
import App from './App.vue'

import SpecialUploader from '/dist/library'

const app = createApp(App)
app.use(SpecialUploader)
app.mount('#app')
