import type { UvueFormOption } from '../types'
import type { _CollapseRef } from 'uview-plus/types/comps/collapse'
import type { Ref } from 'vue'

import { nextTick, ref } from 'vue'

export function useCollapse(option: Ref<UvueFormOption>) {
  const collapseRef = ref<_CollapseRef>()
  const defaultCollapsed = option.value.group?.filter(g => g.collapse).map(g => g.prop!) ?? []
  const collapsed = ref<string[]>(defaultCollapsed)
  async function initCollapse() {
    await nextTick()
    await nextTick()
    collapseRef.value?.init()
  }
  function onCollapseChange(activeNames: string | { name: string, status: 'open' | 'close' }[]) {
    const activeValues = Array.isArray(activeNames) ? activeNames.filter(e => e.status === 'open').map(e => e.name) : [activeNames]
    collapsed.value = activeValues
  }

  return { collapseRef, collapsed, initCollapse, onCollapseChange }
}
