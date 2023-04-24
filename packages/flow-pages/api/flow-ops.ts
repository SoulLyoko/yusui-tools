import type { Page, ResRecords } from '@yusui/types'
import type { FlowTask } from './flow-task'

import { request } from '.'

/**
 * 流程运维信息
 */
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

export function getFlowList(params: Page & FlowOps) {
  return request.get<ResRecords<FlowOps>>('/sapier-flow/flow-ops/list', { params })
}
