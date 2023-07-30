import type { FlowPagesConfig } from '../types'

import { reactive } from 'vue'
import { merge } from 'lodash-es'

import { CONFIG_DEFAULT } from '../constants'

const globalConfigState = reactive(CONFIG_DEFAULT)
export function useConfigProvider(config?: FlowPagesConfig) {
  return merge(globalConfigState, config)
}
