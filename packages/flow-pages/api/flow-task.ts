import type { Page, ResData, ResRecords } from "@yusui/types";
import type { FlowDeploy } from "./flow-deploy";

import { request } from ".";
/**
 * 流程信息
 */
export interface FlowDetail {
  /**
   * 流转记录
   */
  flowHistory?: Record<string, any>[];
  /**
   * 当前表单数据
   */
  formData?: Record<string, any>;
  /**
   * 流程信息
   */
  process?: ProcessDetail;
  /**
   * 当前节点配置（含按钮配置、表单配置）
   */
  properties?: Record<string, any>;
}

/**
 * 流程详情
 */
export interface ProcessDetail {
  /**
   * 流程定义数据
   */
  flowData?: string;
  /**
   * 主键id
   */
  flowDeployId?: string;
  /**
   * 流程KEY
   */
  flowKey?: string;
  /**
   * 流程名称
   */
  flowName?: string;
  /**
   * 表单配置数据
   */
  formOption?: string;
  /**
   * 表单路径
   */
  formPath?: string;
  /**
   * 版本号
   */
  version?: number;
}

export interface StartFlowData {
  /**
   * 审批人集合
   */
  assignee?: { [key: string]: any };
  /**
   * 流程部署id
   */
  flowDeployId?: string;
  /**
   * 流程模型id
   */
  flowModuleId?: string;
  /**
   * 是否调试模式，调试模式任务执行逻辑但不提交
   */
  isDebug?: boolean;

  variables?: any;
}

export interface CommitTaskData {
  /**
   * 审批人集合
   */
  assignee?: { [key: string]: any };
  /**
   * 流程实例ID
   */
  flowInstanceId?: string;
  /**
   * 是否调试模式，调试模式任务执行逻辑但不提交
   */
  isDebug?: boolean;
  /**
   * 流程任务ID
   */
  taskId?: string;

  variables?: any;
}

export function getFlowDetail(params: FlowDeploy) {
  return request.get<ResData<FlowDetail>>("/sapier-flow/flow-run/queryPublishFlowDetail", { params });
}

export function startFlow(data: StartFlowData) {
  return request.post("/sapier-flow/flow-run/startProcess", data);
}

export function commitTask(data: CommitTaskData) {
  return request.post("/sapier-flow/flow-run/commitTask", data);
}
