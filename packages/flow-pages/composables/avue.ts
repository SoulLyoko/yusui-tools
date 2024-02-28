import type { AvueCrudOption } from '@smallwei/avue'

import { reactive, watch } from 'vue'
import { useConfigProvider } from '@yusui/flow-pages'

export function defineTableOption<T>(option: AvueCrudOption<T>) {
  const { tableOption } = useConfigProvider()
  const reactiveOption = reactive<AvueCrudOption<T>>({ ...tableOption, ...option })
  watch(tableOption!, () => Object.assign(reactiveOption, tableOption))
  return reactiveOption
}
