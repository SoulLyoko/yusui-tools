import { createApp } from 'vue'

import { mixModules } from '../../../packages/mix/modules'
import App from './App.vue'

import './styles/main.css'

const app = createApp(App)
app.use(mixModules())
app.mount('#app')
