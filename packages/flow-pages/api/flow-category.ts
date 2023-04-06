import type { Page, ResData } from "@yusui/types";

import { request } from ".";

export interface FlowCategory {
  /** 主键id */
  id?: string;
  /** 分类名称 */
  name?: string;
  /** 上级id */
  parentId?: number;
  /** 分类备注 */
  remark?: string;
  /** 排序 */
  sort?: number;
}

export function getList(params: Page & FlowCategory) {
  return request.get<ResData<FlowCategory[]>>("/sapier-flow/flow-category/list", { params });
}

export function getTree(params: Page & FlowCategory) {
  return request.get<ResData<FlowCategory[]>>("/sapier-flow/flow-category/tree", { params });
}

export function create(data: FlowCategory) {
  return request.post("/sapier-flow/flow-category/save", data);
}

export function update(data: FlowCategory) {
  return request.post("/sapier-flow/flow-category/update", data);
}

export function remove(ids: string) {
  return request.post("/sapier-flow/flow-category/remove", {}, { params: { ids } });
}
