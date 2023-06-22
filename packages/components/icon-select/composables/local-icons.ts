import type { CollectionsData, IconSelectProps, IconsData } from '../types'
import type { Ref } from 'vue'

import { computed, ref, watchEffect } from 'vue'

export function useLocalIcons(props: IconSelectProps, popVisible: Ref<boolean>) {
  const collectionsData = ref<CollectionsData>({})
  const iconsData = ref<IconsData>({})
  const loading = ref(false)
  const activeTab = ref('')

  watchEffect(() => {
    if (popVisible.value && Array.isArray(props.collections)) {
      collectionsData.value = Object.fromEntries(props.collections.map(e => [e.info.prefix, e.info]))
      activeTab.value = Object.keys(collectionsData.value ?? {})[0]
    }
  })

  watchEffect(() => {
    if (popVisible.value && activeTab.value && Array.isArray(props.collections)) {
      const findICollection = props.collections.find(e => e.info.prefix === activeTab.value)
      iconsData.value = findICollection?.icons ?? {}
    }
  })

  const icons = computed<string[]>(() => {
    const { prefix, icons } = iconsData.value
    return Object.keys(icons ?? {}).map(icon => `${prefix}:${icon}`)
  })

  return { collectionsData, iconsData, icons, loading, activeTab }
}
