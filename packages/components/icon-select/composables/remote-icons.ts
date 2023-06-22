import type { CollectionsData, IconSelectProps, IconsData } from '../types'
import type { Ref } from 'vue'

import { computed, ref, watchEffect } from 'vue'
import { useFetch } from '@vueuse/core'

export function useRemoteIcons(props: IconSelectProps, popVisible: Ref<boolean>) {
  const activeTab = ref('')

  const fetchColectionsUrl = computed(() => `https://api.iconify.design/collections?prefixes=${typeof props.collections === 'string' ? props.collections : ''}`)
  const { data: collectionsData, execute: fetchColections } = useFetch(fetchColectionsUrl, { immediate: false }).json<CollectionsData>()

  const fetchIconsUrl = computed(() => `https://api.iconify.design/collection?prefix=${activeTab.value}`)
  const { data: iconsData, isFetching: loading, execute: fetchIcons } = useFetch(fetchIconsUrl, { immediate: false }).json<IconsData>()

  watchEffect(async () => {
    if (popVisible.value && typeof props.collections === 'string') {
      await fetchColections()
      activeTab.value = Object.keys(collectionsData.value ?? {})[0]
    }
  })

  watchEffect(() => {
    if (popVisible.value && activeTab.value && typeof props.collections == 'string')
      fetchIcons()
  })

  const icons = computed<string[]>(() => {
    const { categories, uncategorized, prefix } = iconsData.value ?? {}
    if (uncategorized) {
      return uncategorized?.map((icon: string) => `${prefix}:${icon}`)
    }
    else if (categories) {
      const flatedIcons = Object.values(categories)?.flat().map(icon => `${prefix}:${icon}`) ?? []
      return [...new Set(flatedIcons)]
    }
    return []
  })

  return { collectionsData, iconsData, icons, loading, activeTab }
}
