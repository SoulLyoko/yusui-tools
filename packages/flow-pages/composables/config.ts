import { inject } from 'vue'

import { CONFIG_PROVIDE_KEY } from '../constants'

export function useConfigProvider() {
  const config = inject(CONFIG_PROVIDE_KEY)!
  return config
}
