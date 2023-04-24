import type { ResData } from '@yusui/types'
import type { FlowFormData } from '@yusui/flow-design'
import type { FlowDeploy } from './flow-deploy'

import { request } from '.'

export const enum TaskStatus {
  '已办' = 1,
  '待办' = 2,
  '失败' = 3,
  '撤销' = 4,
}
export const enum FlowStatus {
  '已办结' = 1,
  '未办结' = 2,
}
export const enum HandleType {
  '系统执行' = 1,
  '用户办理' = 2,
  '任务撤销' = 3,
  '任务退回' = 4,
}

/** 流程详情 */
export interface FlowDetail {
  /** 流转记录 */
  flowHistory?: FlowHistory[]
  /** 流程实例详情 */
  flowInstance?: FlowInstance
  /** 当前表单数据 */
  formData?: Record<string, any>
  /** 流程部署信息 */
  process?: FlowDeploy
  /** 当前节点配置 */
  properties?: FlowFormData
  /** 当前任务详情 */
  task?: FlowTask
}

/** 流程实例详情 */
export interface FlowInstance {
  /** 发起人 */
  createUser?: string
  flowInstanceId: string
  flowDeployId: string
  flowModuleId: string
  /** 表单数据对应的数据表名 */
  formDataTable: string
  /** 优先级 */
  priority: number
  /** 标题 */
  title: string
  /** 流水号 */
  serialNumber: string
  /** 流程实例状态 */
  status: FlowStatus
}
/** 流程任务详情 */
export interface FlowTask {
  /** 审批人 */
  assignee?: string
  /** 审批人名 */
  assigneeName?: string
  /** 时长 */
  duration?: number
  /** 任务处理时间 */
  endTime?: string
  /** 流程部署id */
  flowDeployId?: string
  /** 流程实例id */
  flowInstanceId?: string
  /** 表单id */
  instanceVariableId?: string
  /** 来源任务id */
  sourceTaskId?: string
  /** 来源节点key */
  sourceTaskNodeKey?: string
  /** 任务接收时间 */
  startTime?: string
  /** 任务状态 */
  status?: TaskStatus
  /** 子流程id */
  subProcessId?: string
  /** 任务id */
  taskId?: string
  /** 任务节点key */
  taskNodeKey?: string
  /** 任务节点名称 */
  taskNodeName?: string
  /** 任务节点类型 */
  taskNodeType?: string
}
/** 流程历史 */
export interface FlowHistory extends FlowTask {
  id?: string
  /** 操作类型 */
  type?: HandleType
  /** 审批意见 */
  comment?: FlowComment
}
/** 意见 */
export interface FlowComment {
  id?: string
  status?: number
  /** 任务id */
  taskId?: string
  /** 流程实例id */
  flowInstanceId?: string
  /** 操作类型 */
  type?: HandleType
  /** 审批人 */
  assignee?: string
  /** 意见 */
  comment?: string
}

/** 提交任务数据 */
export interface CommitTaskData {
  /** 审批人集合 */
  assignee?: Record<string, string>
  /** 审批意见 */
  comment?: string
  /** 流程部署id */
  flowDeployId?: string
  /** 流程实例ID */
  flowInstanceId?: string
  /** 流程任务ID */
  taskId?: string
  /** 是否调试模式，调试模式任务执行逻辑但不提交 */
  isDebug?: boolean
  /** 表单数据 */
  variables?: FlowVariable[]
  /** 流向 */
  outgoing?: string[]
}

/** 转换的表单数据 */
export interface FlowVariable {
  key?: string
  value?: any
  type?: string
}

/** 审批节点数据 */
export interface ApprovalNode {
  id?: string
  title?: string
  type?: string
  /** 父级id */
  parentId?: string
  /** 节点id，只有一级节点有 */
  taskNodeKey?: string
  /** 节点配置，只有一级节点有 */
  taskNodeProperties?: any
  /** 流进线id，只有一级节点有 */
  incoming?: string
  /** 用户id只有用户节点有 */
  userId?: string
  children?: ApprovalNode[]
}

/** 获取流程详情 */
export function getFlowDetail(params: { flowKey?: string; taskId?: string; flowInstanceId?: string }) {
  return request.get<ResData<FlowDetail>>('/sapier-flow/flow-run/queryPublishFlowDetail', { params })
}

/** 获取审批节点 */
export function getApprovalNodes(data: { flowKey?: string; variables?: FlowVariable[]; taskId?: string }) {
  return request.post<ResData<ApprovalNode[]>>('/sapier-flow/flow-run/queryApprovalNode', data)
}

/** 发起 */
export function startTask(data: CommitTaskData) {
  return request.post('/sapier-flow/flow-run/startProcess', data)
}

/** 发送 */
export function commitTask(data: CommitTaskData) {
  return request.post('/sapier-flow/flow-run/commitTask', data)
}

/** 保存草稿 */
export function saveDraft(data: CommitTaskData) {
  return request.post('/sapier-flow/flow-run/saveDraft', data)
}

/** 撤销 */
export function revokeTask(data: CommitTaskData) {
  return request.post('/sapier-flow/flow-run/revokeTask', data)
}
