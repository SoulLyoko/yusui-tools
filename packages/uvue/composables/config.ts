import type { UvueConfig } from '../types'

import { merge } from 'lodash-es'
import { inject, reactive } from 'vue'

const globalConfigKey = 'uvueCrudConfig'
const globalConfig: UvueConfig = reactive({
  listOption: {
    rowKey: 'id',
    sticky: {},
    search: {},
    empty: {},
    loadmore: {},
    backTop: {},
    cellGroup: {},
    cell: {},
  },
  formOption: {
    menuBtn: true,
    submitBtn: true,
    submitText: '提交',
    emptyBtn: true,
    emptyText: '清空',
    delBtn: false,
    delText: '删除',
  },
})

export function useConfigProvider(config?: UvueConfig, provide?: (key: any, value: any) => any) {
  const mergedConfig = merge(globalConfig, config || {})
  if (provide && typeof provide === 'function') {
    provide(globalConfigKey, mergedConfig)
    return mergedConfig
  }
  else {
    return inject<UvueConfig>(globalConfigKey) || mergedConfig
  }
}
