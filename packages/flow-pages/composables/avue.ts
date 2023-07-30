import type { AvueCrudOption } from '@smallwei/avue'

import { reactive } from 'vue'
import { useConfigProvider } from '@yusui/flow-pages'

export function defineTableOption<T>(option: AvueCrudOption<T>) {
  const { tableOption } = useConfigProvider()
  return reactive({ ...tableOption, ...option } as AvueCrudOption<T>)
}
