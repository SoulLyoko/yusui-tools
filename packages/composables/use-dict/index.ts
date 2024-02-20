import type { DicItem } from '@smallwei/avue'
import type { UseDictOptions, UseDictReturn } from './types'

import { computed, toValue, watch } from 'vue'
import { useRequest } from 'vue-request'
import { get } from 'lodash-unified'
import { filterTree, findTree, serialize } from '@yusui/utils'

import { mergeDicProps } from './constants'
import { useDictConfigProvider } from './config'

export * from './config'
export * from './constants'
export * from './types'

export function useDict(options: UseDictOptions = {}): UseDictReturn {
  const config = useDictConfigProvider(options)
  const dicProps = mergeDicProps(options.props)

  const { dicUrl, dicQuery } = options
  const cacheKey = dicUrl ? dicUrl + (dicQuery ? `?${serialize(dicQuery)}` : '') : undefined
  const requestResult = useRequest(getDict, { cacheKey })
  const { data, mutate } = requestResult

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
          return dicFormatter(res.data)
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
      return filterTree(data.value ?? [], item => value?.some(e => e === item[dicProps.value!]))
    else
      return findTree(data.value ?? [], item => item[dicProps.value!] === value)
  })
  const selectedLabel = computed(() => {
    if (Array.isArray(selectedItem.value))
      return selectedItem.value?.map(e => e[dicProps.label!]).join(',')
    else
      return selectedItem.value?.[dicProps.label!] as string
  })

  return {
    ...requestResult,
    selectedItem,
    selectedLabel,
  }
}
