import type { Ref } from 'vue'
import type { ResRecords } from '@yusui/types'

import { useRequest } from 'vue-request'

import { useConfigProvider } from '../composables'

/** 常用意见 */
export interface CommonComment {
  id?: string
  content?: string
  type?: string
  sort?: number
}

export function useCommonCommentApi() {
  const { request } = useConfigProvider()
  const url = {
    /** 常用意见列表 */
    list: '/sapier-flow/flow-user-common/list',
    /** 新增意见 */
    save: '/sapier-flow/flow-user-common/save',
    /** 更新意见 */
    update: '/sapier-flow/flow-user-common/update',
    /** 删除意见 */
    remove: '/sapier-flow/flow-user-common/remove',
    /** 批量更新意见 */
    batchUpdate: '/sapier-flow/flow-user-common/batchUpdate',
  }
  const getList = (type?: string) => request.get<ResRecords<CommonComment[]>>(url.list, { params: { type, ascs: 'sort' } })
  const useList = (type: Ref<string | undefined>) => useRequest(() => getList(type.value).then(res => res.data.records), { refreshDeps: [type] })
  const create = (data: CommonComment) => request.post(url.save, data)
  const update = (data: CommonComment) => request.post(url.update, data)
  const remove = (ids: string) => request.post(url.remove, {}, { params: { ids } })
  const batchUpdate = (data: CommonComment[]) => request.post(url.batchUpdate, data)
  return {
    url,
    getList,
    useList,
    create,
    update,
    remove,
    batchUpdate,
  }
}
