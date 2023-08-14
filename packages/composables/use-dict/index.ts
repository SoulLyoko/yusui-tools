import type { DicItem } from '@smallwei/avue'
import type { UseDictOptions, UseDictReturn } from './types'

import { computed, unref } from 'vue'
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

  function getDict(): Promise<DicItem[]> {
    const { request } = config
    const { dicQuery = {}, dicHeaders = {}, dicFormatter, dicMethod = 'get', dicData, dicUrl } = options
    if (dicData) {
      return Promise.resolve(unref(dicData))
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

  const { dicUrl, dicQuery } = options
  const cacheKey = dicUrl ? dicUrl + (dicQuery ? `?${serialize(dicQuery)}` : '') : undefined
  const requestResult = useRequest(getDict, { cacheKey })
  const { data } = requestResult

  const selectedItem = computed(() => {
    const unrefValue = unref(options.modelValue)
    if (Array.isArray(unrefValue))
      return filterTree(data.value ?? [], item => unrefValue?.some(e => e === item[dicProps.value!]))
    else
      return findTree(data.value ?? [], item => item[dicProps.value!] === unrefValue)
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
