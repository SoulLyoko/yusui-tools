import type { UvueListEmitFn, UvueListProps } from '../types'

import { useVModel } from '@vueuse/core'

export function useSearch(props: UvueListProps, emit: UvueListEmitFn) {
  const searchValue = useVModel(props, 'searchValue')
  const searchListeners = {
    onSearch: (value: string) => emit('search', value),
    onChange: (value: string) => emit('searchChange', value),
    onCustom: (value: string) => emit('searchCustom', value),
    onBlur: (value: string) => emit('searchBlur', value),
    onFocus: (value: string) => emit('searchFocus', value),
    onClear: () => emit('searchClear'),
    onClick: () => emit('searchClick'),
    onClickIcon: () => emit('searchClickIcon'),
  }

  return { searchValue, searchListeners }
}
