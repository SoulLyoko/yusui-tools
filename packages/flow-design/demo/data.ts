import type { AvueFormGroup } from '@smallwei/avue'
import type { TurboData } from '../types'

import { ref } from 'vue'

export function useGraphData() {
  const graphData = ref<TurboData>({})
  if (!import.meta.env.SSR) {
    import('../constants').then((module) => {
      graphData.value = module.defaultGraphData()
    })
  }
  return graphData
}

export function useOptions() {
  const options = ref<Record<string, AvueFormGroup[]>>({})
  if (!import.meta.env.SSR) {
    import('../options').then((module) => {
      options.value = module.defaultOptions
    })
  }
  return options
}
