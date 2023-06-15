import type { Page, ResRecords } from '@yusui/types'
import type { FlowTask } from './flow-task'
import type { FlowOps } from './flow-ops'

import { useConfigProvider } from '../composables'

/** 传阅 */
export interface FlowCirculate extends FlowTask {
  id?: string
  /** 意见 */
  comment?: string
}
export interface FlowCirculateOps extends FlowOps {
  id?: string
  /** 意见 */
  comment?: string
}

export function useFlowCirculateApi() {
  const { request } = useConfigProvider()
  const url = {
    /** 传阅待办/已办列表 */
    list: '/sapier-flow/flow-circulate/userTaskList',
    opslist: '/sapier-flow/flow-circulate-ops/list',
    update: '/sapier-flow/flow-circulate-ops/update',
    remove: '/sapier-flow/flow-circulate-ops/remove',
  }
  const getCirculateList = (params: Page & FlowCirculate) => request.get<ResRecords<FlowCirculate>>(url.list, { params })
  const getCirculateOpsList = (params: Page & FlowCirculateOps) => request.get<ResRecords<FlowCirculateOps>>(url.list, { params })
  const updateCirculate = (data: FlowCirculateOps) => request.post(url.update, data)
  const removeCirculate = (ids: string) => request.post(url.remove, {}, { params: { ids } })
  return {
    url,
    getCirculateList,
    getCirculateOpsList,
    updateCirculate,
    removeCirculate,
  }
}
