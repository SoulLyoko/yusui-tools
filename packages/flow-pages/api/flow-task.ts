import type { Page, ResData, ResRecords } from '@yusui/types'
import type { FlowFormData } from '@yusui/flow-design'
import type { FlowDeploy } from './flow-deploy'
import type { FlowOps } from './flow-ops'
import type { RequestInstance } from '../types'

import { useRequest } from 'vue-request'

/** 任务状态 */
export const enum TaskStatus {
  '已办' = 1,
  '待办' = 2,
  '失败' = 3,
  '撤销' = 4,
  '终止' = 5,
}
/** 流程状态 */
export const enum FlowStatus {
  '已办结' = 1,
  '未办结' = 2,
  '已终止' = 3,
}
/** 操作类型 */
export const enum HandleType {
  '系统执行' = 1,
  '用户办理' = 2,
  '任务撤销' = 3,
  '任务退回' = 4,
  '流程终止' = 5,
  '任务转办' = 6,
  '绿色通道' = 7,
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
  /** 自定义表单 */
  formPath?: string
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
  handleType?: HandleType
  /** 审批人 */
  assignee?: string
  /** 意见 */
  handleComment?: string
}

/** 提交任务数据 */
export interface CommitTaskData extends ApprovalFormData {
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
  /** 发起时携带文件ids */
  fileIds?: string
  /** 传阅id */
  id?: string
}

/** 审批窗口表单数据 */
export interface ApprovalFormData {
  /** 指定节点key */
  jumpTaskNodeKey?: string
  /** 审批人集合 */
  assignee?: Record<Required<ApprovalNode>['taskNodeKey'], Required<ApprovalNode>['userId']>
  /** 传阅人集合 */
  circulate?: Record<Required<ApprovalNode>['taskNodeKey'], Required<ApprovalNode>['userId']>
  /** 审批意见 */
  comment?: string
  /** 流向 */
  outgoing?: string[]
}

/** 获取审批节点的请求参数 */
export interface GetApprovalNodeParams {
  flowKey?: string
  /** 表单数据 */
  variables?: FlowVariable[]
  taskId?: string
  /** 是否从流程配置加载,false则返回全部 */
  loadConfig?: boolean
  /** 按钮key */
  buttonType?: string
  /** 指定节点key */
  jumpTaskNodeKey?: string
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
  /** 是否多选，只有一级节点有 */
  multiple?: boolean
  /** 用户id，只有用户节点有 */
  userId?: string
  children?: ApprovalNode[]
}

export type GetApprovalNodeResData = ResData<{ approvalNodeList: ApprovalNode[]; circulateNodeList: ApprovalNode[] }>

export function useFlowTaskApi(request: RequestInstance) {
  const url = {
    /** 获取已部署流程 */
    publishList: '/sapier-flow/flow-run/queryPublishFlowList',
    /** 待办/已办列表 */
    taskList: '/sapier-flow/flow-run/userTaskList',
    /** 任务详情 */
    detail: '/sapier-flow/flow-run/queryPublishFlowDetail',
    /** 获取审批人节点树 */
    approvalNode: '/sapier-flow/flow-run/queryApprovalNode',
    /** 发起任务 */
    start: '/sapier-flow/flow-run/startProcess',
    /** 提交任务 */
    commit: '/sapier-flow/flow-run/commitTask',
    /** 保存草稿 */
    draft: '/sapier-flow/flow-run/saveDraft',
    /** 撤销 */
    revoke: '/sapier-flow/flow-run/revokeTask',
    /** 终止 */
    terminate: '/sapier-flow/flow-run/terminateFlow',
    /** 撤回到发起 */
    withdraw: '/sapier-flow/flow-run/withdrawToStart',
    /** 转办 */
    transfer: '/sapier-flow/flow-run/transferTask',
    /** 退回 */
    reject: '/sapier-flow/flow-run/rollbackTask',
    /** 绿色通道 */
    green: '/sapier-flow/flow-run/greenTask',
    /** 传阅 */
    circulate: '/sapier-flow/flow-circulate/commitTask',
  }
  /** 获取流程详情 */
  const getFlowDetail = (params: { flowKey?: string; taskId?: string; flowInstanceId?: string }) => request.get<ResData<FlowDetail>>(url.detail, { params })
  /** 获取审批节点 */
  const getApprovalNode = (data: GetApprovalNodeParams) => request.post<GetApprovalNodeResData>(url.approvalNode, data)
  /** 发起 */
  const startTask = (data: CommitTaskData) => request.post(url.start, data)
  /** 发送 */
  const commitTask = (data: CommitTaskData) => request.post(url.commit, data)
  /** 保存草稿 */
  const saveDraft = (data: CommitTaskData) => request.post(url.draft, data)
  /** 撤销 */
  const revokeTask = (data: CommitTaskData) => request.post(url.revoke, data)
  /** 终止 */
  const terminateTask = (data: CommitTaskData) => request.post(url.terminate, data)
  /** 撤回到发起 */
  const withdrawTask = (data: CommitTaskData) => request.post(url.withdraw, data)
  /** 转办 */
  const transferTask = (data: CommitTaskData) => request.post(url.transfer, data)
  /** 退回 */
  const rejectTask = (data: CommitTaskData) => request.post(url.reject, data)
  /** 传阅 */
  const circulateTask = (data: CommitTaskData) => request.post(url.circulate, data)
  /** 绿色通道 */
  const greenChannel = (data: CommitTaskData) => request.post(url.green, data)
  /** 已部署列表 */
  const getPublishList = () => request.get<ResData<FlowDeploy[]>>(url.publishList)
  const usePublishList = () => useRequest(() => getPublishList().then(res => res.data))
  /** 待办/已办列表 */
  const getTaskList = (params: Page & FlowOps) => request.get<ResRecords<FlowOps[]>>(url.taskList, { params })
  return {
    url,
    getFlowDetail,
    getApprovalNode,
    startTask,
    commitTask,
    saveDraft,
    revokeTask,
    terminateTask,
    withdrawTask,
    transferTask,
    rejectTask,
    greenChannel,
    circulateTask,
    getPublishList,
    usePublishList,
    getTaskList,
  }
}
