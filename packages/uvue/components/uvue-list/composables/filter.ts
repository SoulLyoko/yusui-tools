import type { UvueListEmitFn, UvueListProps } from '../types'

import { useVModel } from '@vueuse/core'

export function useFilter(props: UvueListProps, emit: UvueListEmitFn) {
  const filterForm = useVModel(props, 'filterForm')
  const filterListeners = {
    onChange: (value: object) => emit('filterChange', value),
  }

  return { filterForm, filterListeners }
}
