import type { MaybeRef } from '@vueuse/core'
import type { AvueFormDefaults } from '@smallwei/avue'
import type { FlowDetail } from '@yusui/flow-pages'

import { nextTick, ref, unref, watchEffect } from 'vue'

export function useFormDefaults(flowDetail: MaybeRef<FlowDetail>) {
  const defaults = ref<AvueFormDefaults>({})

  watchEffect(async () => {
    const { formProperty } = unref(flowDetail)?.properties || {}
    if (!formProperty?.length)
      return
    await nextTick()
    Object.keys(defaults.value).forEach((prop) => {
      const label = defaults.value[prop]?.label || ''
      const find = formProperty?.find(e => e.prop === prop)
      if (!find)
        return
      defaults.value[prop].display = find?.display
      defaults.value[prop].disabled = find?.disabled
      defaults.value[prop].detail = find?.detail
      defaults.value[prop].readonly = find?.readonly
      defaults.value[prop].rules = defaults.value[prop].rules ?? []
      if (find?.required && defaults.value[prop].rules?.some(e => e.required))
        return null
      else if (find?.required)
        defaults.value[prop].rules?.push({ required: true, message: `${label}为必填项` })
      else
        defaults.value[prop].rules = defaults.value[prop].rules?.filter(e => !e.required)
    })
  })

  return defaults
}
