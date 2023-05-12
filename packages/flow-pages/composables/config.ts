import type { App } from 'vue'
import type { FlowPagesConfig } from '../types'

import { inject } from 'vue'
import { merge } from 'lodash-es'

import { CONFIG_DEFAULT, CONFIG_PROVIDE_KEY } from '../constants'

export function useConfigProvider(app?: App, config?: FlowPagesConfig) {
  if (app && config) {
    app.provide(CONFIG_PROVIDE_KEY, merge(CONFIG_DEFAULT, config))
    return config
  }
  return inject(CONFIG_PROVIDE_KEY)!
}
