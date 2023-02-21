import { request } from ".";

export interface FlowTemplate {
  /**
   * 流程模型数据
   */
  flowData?: string;
  /**
   * 流程KEY
   */
  flowKey?: string;
  /**
   * 流程名称
   */
  flowName?: string;
  /**
   * 分组ID
   */
  groupId?: string;
  /**
   * 主键id
   */
  id?: string;
  /**
   * 流程备注
   */
  remarks?: string;
  /**
   * 排序
   */
  sort?: number;
  /**
   * 业务状态
   */
  status?: number;
  /**
   * 版本号
   */
  version?: number;
}

export function getList(params: any) {
  return request.get("/sapier-flow/dev-flow/list", { params });
}

export function create(data: FlowTemplate) {
  return request.post("/sapier-flow/dev-flow/submit", data);
}

export function update(data: FlowTemplate) {
  return request.post("/sapier-flow/dev-flow/submit", data);
}

export function remove(ids: string) {
  return request.post("/sapier-flow/dev-flow/remove", {}, { params: { ids } });
}
