import type { App } from 'vue'
import type { FlowPagesConfig } from './types'

import { useConfigProvider } from './composables'
import * as PagesComonents from './pages'

export * from './api'
export * from './composables'
export * from './constants'
export * from './flow-form'
export * from './pages'
export * from './types'
export * from './utils'

export default {
  install(app: App, config?: FlowPagesConfig) {
    useConfigProvider(config)
    Object.entries(PagesComonents).forEach(([key, component]) => {
      app.component(key, component)
    })
  },
}
