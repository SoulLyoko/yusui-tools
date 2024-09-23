import type { CrudListOption, ProCrudOption } from '../types'
import type { AvueCrudInstance, TableRowData } from '@smallwei/avue'

import { pick } from 'lodash-es'
import { computed, inject } from 'vue'

export function useCrudInstance<T = any>() {
  const crudRef = inject<AvueCrudInstance<T>>('crud')

  const tableOption = computed<ProCrudOption<T>>(() => crudRef?.tableOption ?? {})
  const tableData = computed(() => crudRef?.list ?? [])

  function getItemValue(option: CrudListOption, key: keyof CrudListOption, row: TableRowData<T>, index: number) {
    const propKeyOrFn = option[key]
    if (typeof propKeyOrFn === 'function')
      return propKeyOrFn(row, index)
    else
      return row[propKeyOrFn!]
  }

  function getMenuSlots<T extends Record<string, any>>(slots: T): Pick<T, 'menu' | 'menu-btn'> {
    return pick(slots, 'menu', 'menu-btn')
  }

  function getPermission(action: string, row: any, index: number) {
    const { permission, tableOption, config } = crudRef ?? {}
    if (typeof permission === 'function')
      return permission(action, row, index)
    else
      return permission?.[action] ?? tableOption?.[action] ?? config?.[action]
  }

  return {
    crudRef,
    tableOption,
    tableData,
    getMenuSlots,
    getItemValue,
    getPermission,
  }
}
