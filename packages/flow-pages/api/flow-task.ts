import type { ResData } from '@yusui/types'
import type { FlowFormData } from '@yusui/flow-design'

import { request } from '.'

/**
 * 流程信息
 */
export interface FlowDetail {
  /** 流转记录 */
  flowHistory?: FlowHistory[]
  /** 实例详情 */
  flowInstance?: FlowInstance
  /** 当前表单数据 */
  formData?: Record<string, any>
  /** 流程详情 */
  process?: ProcessDetail
  /** 当前节点配置 */
  properties?: FlowFormData
  /** 当前任务详情 */
  task?: TaskDetail
}

/** 实例详情 */
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
  /** 实例状态 */
  status: number
}
/** 流程定义详情 */
export interface ProcessDetail {
  /** 流程定义数据 */
  flowData?: string
  /** 主键id */
  flowDeployId?: string
  /** 流程KEY */
  flowKey?: string
  /** 流程名称 */
  flowName?: string
  /** 表单配置数据 */
  formOption?: string
  /** 表单路径 */
  formPath?: string
  /** 版本号 */
  version?: number
}
/** 任务详情 */
export interface TaskDetail {
  /** 审批人 */
  assignee?: string
  /** 审批人名 */
  assigneeName?: string
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
  /** 任务状态 */
  status?: number
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
export interface FlowHistory {
  id?: string
  createUser?: string
  createTime?: string
  updateUser?: string
  updateTime?: string
  status?: number
  isDeleted?: number
  tenantId?: string
  /** 任务id */
  taskId?: string
  /** 流程实例id */
  flowInstanceId?: string
  /** 流程部署id */
  flowDeployId?: string
  /** 子流程id */
  subProcessId?: string
  /** 表单id */
  instanceVariableId?: string
  /** 来源任务id */
  sourceTaskId?: string
  /** 来源节点key */
  sourceTaskNodeKey?: string
  /** 任务节点key */
  taskNodeKey?: string
  /** 任务节点名称 */
  taskNodeName?: string
  /** 任务节点类型 */
  taskNodeType?: string
  /** 操作类型 */
  type?: number
  /** 审批人 */
  assignee?: string
  /** 审批人名 */
  assigneeName?: string
  /** 审批意见 */
  comment?: FlowComment
  /** 办理时长 */
  duration?: number
  /** 接收时间 */
  startTime?: string
  /** 处理时间 */
  endTime?: string
}
/** 意见 */
export interface FlowComment {
  id?: string
  createUser?: string
  createTime?: string
  updateUser?: string
  updateTime?: string
  status?: number
  isDeleted?: number
  tenantId?: string
  /** 任务id */
  taskId?: string
  /** 流程实例id */
  flowInstanceId?: string
  type?: number
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

/** 获取流程详细信息 */
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
