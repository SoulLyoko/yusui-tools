import type { App } from 'vue'
import type { UvueConfig } from './types'

import { useConfigProvider } from './composables'

export * from './components'
export * from './composables'
export * from './types'

export default {
  install(app: App, config?: UvueConfig) {
    useConfigProvider(config, app.provide)
    // Object.entries(components).forEach(([key, value]) => {
    //   app.component(key, value)
    // })
  },
}
