import type { Page, ResRecords } from '@yusui/types'
import type { FlowTask } from './flow-task'
import type { RequestInstance } from '../types'

import { useRes } from '@yusui/composables'

/** 流程运维 */
export interface FlowOps extends FlowTask {
  /** 申请人 */
  applyUserId?: string
  applyUserName?: string
  flowKey?: string
  flowName?: string
  categoryId?: string
  processStartTime?: string
  processStatus?: number
  processTitle?: string
  serialNumber?: string
  version?: number
}

export function useFlowOpsApi(request: RequestInstance) {
  const url = {
    /** 流程运维列表 */
    list: '/sapier-flow/flow-ops/list',
  }
  const getTaskOpsList = (params: Page & FlowOps) => request.get<ResRecords<FlowOps[]>>(url.list, { params })
  const useTaskOpsList = useRes(getTaskOpsList, { res: 'data.records', defaultParams: [{ size: -1 }] })
  return {
    url,
    getTaskOpsList,
    useTaskOpsList,
  }
}
