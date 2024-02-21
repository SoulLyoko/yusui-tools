import type { Ref } from 'vue'
import type { IconSelectProps, IconifyInfo, IconsData } from '../types'

import { computed, ref, watchEffect } from 'vue'

export function useLocalIcons(props: IconSelectProps, popVisible: Ref<boolean>) {
  const iconInfoList = ref<IconifyInfo[]>([])
  const iconsData = ref<IconsData>({})
  const loading = ref(false)
  const activeTab = ref('')

  const icons = computed<string[]>(() => {
    const { prefix, icons } = iconsData.value
    return Object.keys(icons ?? {}).map(icon => `${prefix}:${icon}`)
  })

  watchEffect(() => {
    if (popVisible.value && Array.isArray(props.collections)) {
      iconInfoList.value = props.collections.map(e => e.info)
      activeTab.value = iconInfoList.value[0].prefix ?? ''
    }
  })

  watchEffect(() => {
    if (popVisible.value && activeTab.value && Array.isArray(props.collections)) {
      const findCollection = props.collections.find(e => e.info.prefix === activeTab.value)
      iconsData.value = findCollection?.icons ?? {}
    }
  })

  return { iconInfoList, iconsData, icons, loading, activeTab }
}
