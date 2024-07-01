import type { DicItem } from '@smallwei/avue'
import type { AxiosInstance } from 'axios'

import { ref } from 'vue'
import { useRequest } from 'vue-request'
import { get } from 'lodash-es'
import { serialize, treeMap } from '@yusui/utils'

export interface UseDictOptions {
  props?: {
    label?: string
    value?: string
    children?: string
    disabled?: string
    res?: string
  }
  dicData?: DicItem[]
  dicUrl?: string
  dicQuery?: object
  dicHeaders?: object
  dicFormatter?: (res: any) => DicItem[]
  dicMethod?: string
}

export function useDict(options: UseDictOptions, request?: AxiosInstance) {
  const { props = {}, dicData, dicUrl, dicQuery = {}, dicHeaders, dicFormatter, dicMethod = 'get' } = options
  if (dicData)
    return { data: ref(dicData) }
  else if (!dicUrl || !request)
    return { data: ref([] as DicItem[]) }

  function getDict() {
    const {
      label = 'label',
      value = 'value',
      children = 'children',
      disabled = 'disabled',
      res: dataPath = 'data',
    } = props
    return request!({ url: dicUrl, method: dicMethod, params: dicQuery, data: dicQuery, headers: dicHeaders }).then((res) => {
      if (dicFormatter) {
        return dicFormatter(res)
      }
      else {
        const data = get(res.data, dataPath, [])
        return treeMap(
          data,
          (item: any) => {
            return { label: item[label], value: item[value], disabled: item[disabled] }
          },
          { childrenKey: children },
        )
      }
    })
  }

  const cacheKey = dicUrl + (dicQuery ? `?${serialize(dicQuery)}` : '')
  return useRequest<DicItem[]>(getDict, { cacheKey })
}
