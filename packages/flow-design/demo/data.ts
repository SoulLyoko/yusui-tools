import type { TurboData } from '../extensions'

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
