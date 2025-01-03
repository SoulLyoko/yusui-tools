import type { CollectionsData, IconifyInfo, IconsData, IconSelectProps } from '../types'
import type { Ref } from 'vue'

import { useFetch } from '@vueuse/core'
import { computed, ref, watchEffect } from 'vue'

export function useRemoteIcons(props: IconSelectProps, popVisible: Ref<boolean>) {
  const activeTab = ref('')

  const fetchColectionsUrl = computed(() => `https://api.iconify.design/collections?prefixes=${typeof props.collections === 'string' ? props.collections : ''}`)
  const { data: collectionsData, execute: fetchColections } = useFetch(fetchColectionsUrl, { immediate: false }).json<CollectionsData>()

  const fetchIconsUrl = computed(() => `https://api.iconify.design/collection?prefix=${activeTab.value}`)
  const { data: iconsData, isFetching: loading, execute: fetchIcons } = useFetch(fetchIconsUrl, { immediate: false }).json<IconsData>()

  const iconInfoList = computed<IconifyInfo[]>(() => {
    if (typeof props.collections === 'string' && collectionsData.value) {
      const collections = Object.entries(collectionsData.value).map(([prefix, collection]) => ({ ...collection, prefix }))
      return props.collections.split(',').map((n) => {
        if (n.endsWith('-'))
          return collections.filter(e => e.prefix.includes(n))
        else
          return collections.filter(e => e.prefix === n)
      }).flat().filter(e => e)
    }
    return []
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

  watchEffect(() => {
    if (popVisible.value && activeTab.value && typeof props.collections == 'string')
      fetchIcons()
  })

  watchEffect(async () => {
    if (popVisible.value && typeof props.collections === 'string') {
      await fetchColections()
      // activeTab.value = Object.keys(collectionsData.value ?? {})[0]
      activeTab.value = iconInfoList.value?.[0]?.prefix ?? ''
    }
  })
  return { iconInfoList, iconsData, icons, loading, activeTab }
}
