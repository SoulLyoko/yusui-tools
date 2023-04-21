import type { Page, ResRecords } from '@yusui/types'

import { request } from '.'

export enum TaskStatus {
  '已办' = 1,
  '待办' = 2,
}

/**
 * 流程运维信息
 */
export interface FlowOps {
  applyUserId?: string
  applyUserName?: string
  assignee?: string
  assigneeName?: string
  createTime?: string
  flowDeployId?: string
  flowInstanceId?: string
  flowKey?: string
  flowName?: string
  categoryId?: string
  instanceVariableId?: string
  processStartTime?: string
  processStatus?: number
  processTitle?: string
  serialNumber?: string
  sourceTaskId?: string
  sourceTaskNodeKey?: string
  startTime?: string
  status?: TaskStatus
  subProcessId?: string
  taskId?: string
  taskNodeKey?: string
  taskNodeName?: string
  taskNodeType?: string
  version?: number
}

export function getFlowList(params: Page & FlowOps) {
  return request.get<ResRecords<FlowOps>>('/sapier-flow/flow-ops/list', { params })
}
