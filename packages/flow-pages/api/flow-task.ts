import type { Page, ResData, ResRecords } from "@yusui/types";
import type { FlowDeploy } from "./flow-deploy";
import type { FlowFormData } from "@yusui/flow-design";

import { request } from ".";

/**
 * 流程信息
 */
export interface FlowDetail {
  /** 流转记录 */
  flowHistory?: TaskDetail[];
  /** 当前表单数据 */
  formData?: Record<string, any>;
  /** 流程详情 */
  process?: ProcessDetail;
  /** 当前节点配置 */
  properties?: FlowFormData;
  /** 当前任务详情 */
  task?: TaskDetail;
}

/**
 * 流程详情
 */
export interface ProcessDetail {
  /** 流程定义数据 */
  flowData?: string;
  /** 主键id */
  flowDeployId?: string;
  /** 流程KEY */
  flowKey?: string;
  /** 流程名称 */
  flowName?: string;
  /** 表单配置数据 */
  formOption?: string;
  /** 表单路径 */
  formPath?: string;
  /** 版本号 */
  version?: number;
}
export enum TaskStatus {
  "已办" = 1,
  "待办" = 2
}
/** 任务详情 */
export interface TaskDetail {
  /** 审批人 */
  assignee: string;
  /** 审批人名 */
  assigneeName: string;
  createTime: string;
  createUser: string;
  /** 流程部署id */
  flowDeployId: string;
  /** 流程实例id */
  flowInstanceId: string;
  /** 表单id */
  instanceVariableId: string;
  /** 来源任务id */
  sourceTaskId: string;
  /** 来源节点key */
  sourceTaskNodeKey: string;
  /** 任务状态 */
  status: TaskStatus;
  /** 子流程id */
  subProcessId: string;
  /** 任务id */
  taskId: string;
  /** 任务节点key */
  taskNodeKey: string;
  /** 任务节点名称 */
  taskNodeName: string;
  /** 任务节点类型 */
  taskNodeType: string;
  tenantId: string;
  updateTime: string;
  updateUser: string;
}

export interface CommitTaskData {
  /** 审批人集合 */
  assignee?: Record<string, string>;
  /** 流程部署id */
  flowDeployId?: string;
  /** 流程实例ID */
  flowInstanceId?: string;
  /** 流程任务ID */
  taskId?: string;
  /** 是否调试模式，调试模式任务执行逻辑但不提交 */
  isDebug?: boolean;
  /** 表单数据 */
  variables?: FlowVariable[];
  outgoing?: string[];
}

export interface FlowVariable {
  key?: string;
  value?: any;
  type?: string;
}

export interface ApprovalNode {
  id?: string;
  title?: string;
  type?: string;
  /** 父级id */
  parentId?: string;
  /** 节点id，只有一级节点有 */
  taskNodeKey?: string;
  /** 节点配置，只有一级节点有 */
  taskNodeProperties?: any;
  /** 流进线id，只有一级节点有 */
  incoming?: string;
  /** 用户id只有用户节点有 */
  userId?: string;
  children?: ApprovalNode[];
}

export function getFlowDetail(params: { flowKey?: string; taskId?: string; flowInstanceId?: string }) {
  return request.get<ResData<FlowDetail>>("/sapier-flow/flow-run/queryPublishFlowDetail", { params });
}

export function startFlow(data: CommitTaskData) {
  return request.post("/sapier-flow/flow-run/startProcess", data);
}

export function commitTask(data: CommitTaskData) {
  return request.post("/sapier-flow/flow-run/commitTask", data);
}

export function getApprovalNodes(data: { flowKey?: string; variables?: FlowVariable[]; taskId?: string }) {
  return request.post<ResData<ApprovalNode[]>>("/sapier-flow/flow-run/queryApprovalNode", data);
}
