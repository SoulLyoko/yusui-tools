import type { FlowPagesConfig } from '../types'

import { inject } from 'vue'

import { CONFIG_PROVIDE_KEY } from '../constants'

export function useConfigProvider() {
  const config = inject<FlowPagesConfig>(CONFIG_PROVIDE_KEY)!
  return config
}
