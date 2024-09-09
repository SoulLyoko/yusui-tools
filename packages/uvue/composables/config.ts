import type { UvueConfig } from '../types'

import { reactive } from 'vue'

const globalConfigState = reactive<UvueConfig>({
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
export function useConfigProvider(config?: typeof globalConfigState) {
  return Object.assign(globalConfigState, config)
}
