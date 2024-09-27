import type { UvueConfig } from './types'
import type { App } from 'vue'

import { useDictConfigProvider } from '@yusui/composables'

import { useConfigProvider } from './composables'

export * from './components'
export * from './composables'
export * from './types'

export default {
  install(app: App, config?: UvueConfig) {
    useConfigProvider(config, app.provide)
    useDictConfigProvider({ request: config?.request })
    // Object.entries(components).forEach(([key, value]) => {
    //   app.component(key, value)
    // })
  },
}
