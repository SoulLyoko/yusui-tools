import { request } from ".";

export interface FlowDefinition {
  /**
   * 流程定义数据
   */
  flowData?: string;
  /**
   * 流程KEY
   */
  flowKey?: string;
  /**
   * 流程定义ID
   */
  flowModuleId?: string;
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
   * 分组ID
   */
  groupId?: string;
  /**
   * 流程备注
   */
  remarks?: string;
  /**
   * 排序
   */
  sort?: number;
  status?: number;
  /**
   * 版本号
   */
  version?: number;
  /**
   * 主版本
   */
  mainVersion?: number;
}

export function getList(params: any) {
  return request.get("/sapier-flow/flow-definition/list", { params });
}

export function getDetail(params: { flowModuleId?: string; flowDeployId?: string }) {
  return request.get("/sapier-flow/flow-definition/detail", { params });
}

export function create(data: Pick<FlowDefinition, "flowKey" | "flowName" | "remarks">) {
  return request.post("/sapier-flow/flow-definition/save", data);
}

export function update(data: FlowDefinition) {
  return request.post("/sapier-flow/flow-definition/update", data);
}

export function deploy(data: { flowModuleId?: string }) {
  return request.post("/sapier-flow/flow-definition/deployFlow", data);
}
