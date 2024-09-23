import type { UseDictOptions, UseDictReturn } from './types'
import type { DicItem } from '@smallwei/avue'
import type { MaybeRefOrGetter } from 'vue'

import { filterTree, findTree, serialize } from '@yusui/utils'
import { get } from 'lodash-unified'
import { computed, unref, watch } from 'vue'
import { useRequest } from 'vue-request'

import { useDictConfigProvider } from './config'
import { mergeDicProps } from './constants'

export * from './config'
export * from './constants'
export * from './types'

function toValue(source: MaybeRefOrGetter) {
  return typeof source === 'function' ? source() : unref(source)
}

export function useDict(options: UseDictOptions = {}): UseDictReturn {
  const config = useDictConfigProvider(options)
  const dicProps = mergeDicProps(options.props)

  const { dicUrl, dicQuery } = options
  const cacheKey = dicUrl ? dicUrl + (dicQuery ? `?${serialize(dicQuery)}` : '') : undefined
  const requestResult = useRequest(getDict, { cacheKey })
  const { data, mutate } = requestResult

  function getLabel(item?: DicItem) {
    return get(item, dicProps.label!)
  }
  function getValue(item?: DicItem) {
    return get(item, dicProps.value!)
  }
  function getDesc(item?: DicItem) {
    return get(item, dicProps.desc!)
  }
  function getDisabled(item?: DicItem) {
    return get(item, dicProps.disabled!)
  }

  function getDict(): Promise<DicItem[]> {
    const { request } = config
    const { dicQuery = {}, dicHeaders = {}, dicFormatter, dicMethod = 'get', dicUrl } = options
    if (options.dicData) {
      watch(() => options.dicData, () => mutate(toValue(options.dicData!)), { deep: true })
      return Promise.resolve(toValue(options.dicData))
    }
    else if (dicUrl && request) {
      return request({ url: dicUrl, method: dicMethod, params: dicQuery, data: dicQuery, headers: dicHeaders }).then((res) => {
        if (dicFormatter)
          return dicFormatter(res)
        else
          return get(res.data, dicProps.res!, [])
      })
    }
    else {
      return Promise.resolve([])
    }
  }

  const selectedItem = computed(() => {
    const value = toValue(options.modelValue)
    if (Array.isArray(value))
      return filterTree(data.value ?? [], item => value?.some(e => e === get(item, dicProps.value!)))
    else
      return findTree(data.value ?? [], item => value === get(item, dicProps.value!))
  })
  const selectedLabel = computed(() => {
    if (Array.isArray(selectedItem.value))
      return selectedItem.value?.map(e => get(e, dicProps.label!)).join(',')
    else
      return get(selectedItem.value, dicProps.label!) as string
  })

  return {
    ...requestResult,
    selectedItem,
    selectedLabel,
    getLabel,
    getValue,
    getDesc,
    getDisabled,
  }
}
