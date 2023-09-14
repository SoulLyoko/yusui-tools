import type { MaybeRef } from '@vueuse/core'
import type { AvueFormColumn, AvueFormDefaults } from '@smallwei/avue'
import type { FormPropertyItem } from '@yusui/flow-design'
import type { FlowDetail } from '@yusui/flow-pages'

import { nextTick, ref, unref, watchEffect } from 'vue'

export function mergeColumn(target: AvueFormColumn[], source: FormPropertyItem[]) {
  target.forEach((col) => {
    const find = source?.find(e => e.prop === col.prop)
    if (!find)
      return
    col.display = find.display
    col.disabled = find.disabled
    col.detail = find.detail
    col.readonly = find.readonly
    const rules = col.rules ?? []
    if (find.required && rules?.some(e => e.required))
      return
    else if (find.required)
      col.rules?.push({ required: true, message: `${col.label}为必填项` })
    else
      col.rules = rules.filter(e => !e.required)

    // 子表单
    if (col.children?.column?.length && find.children?.length)
      mergeColumn(col.children?.column, find.children)
  })
}

export function useFormDefaults(flowDetail: MaybeRef<FlowDetail>) {
  const defaults = ref<AvueFormDefaults>({})

  watchEffect(async () => {
    const { formProperty } = unref(flowDetail)?.properties || {}
    if (!formProperty?.length)
      return
    await nextTick()
    mergeColumn(Object.values(defaults.value), formProperty)
  })

  return defaults
}
