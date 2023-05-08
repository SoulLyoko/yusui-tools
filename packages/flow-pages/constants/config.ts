import type { FlowPagesConfig } from '../types'

export const CONFIG_PROVIDE_KEY = 'flowPagesConfig'

export const CONFIG_DEFAULT: FlowPagesConfig = {
  request: (() => {}) as any,
}
