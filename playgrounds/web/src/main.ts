import { createApp } from 'vue'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'

import App from './App.vue'
import { mixModules, setupRouterComponents } from '../../../packages/mix/modules'

import './styles/main.css'
import 'uno.css'

const app = createApp(App)
app.use(mixModules({
  router: {
    routes: setupLayouts(setupRouterComponents(routes)),
  },
}))
app.mount('#app')
