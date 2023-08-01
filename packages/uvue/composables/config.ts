import type { UvueConfig } from '../types'

import { reactive } from 'vue'

const globalConfigState = reactive<UvueConfig>({})
export function useConfigProvider(config?: typeof globalConfigState) {
  return Object.assign(globalConfigState, config)
}
