import type { UvueConfig } from '../types'

import { reactive } from 'vue'
import { merge } from 'lodash-es'

const globalConfigState = reactive<UvueConfig>({})
export function useConfigProvider(config?: typeof globalConfigState) {
  return merge(globalConfigState, config)
}
