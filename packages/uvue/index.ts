import type { App } from 'vue'
import type { UvueConfig } from './types'

import components from './components'
import { useConfigProvider } from './composables'

export * from './components'
export * from './composables'
export * from './types'

export default {
  install(app: App, options?: UvueConfig) {
    useConfigProvider(options)
    Object.entries(components).forEach(([key, value]) => {
      app.component(key, value)
    })
  },
}
