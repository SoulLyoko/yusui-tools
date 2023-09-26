import type { FlowPagesConfig } from '@yusui/flow-pages'

import { reactive } from 'vue'
import { cloneDeep, merge } from 'lodash-es'

import { CONFIG_DEFAULT } from '../constants'

const globalConfigState = reactive(cloneDeep(CONFIG_DEFAULT))
export function useConfigProvider(config?: FlowPagesConfig) {
  return merge(globalConfigState, config)
}
