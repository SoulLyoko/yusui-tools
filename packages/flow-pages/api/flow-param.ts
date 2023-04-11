import type { Page, ResRecords } from "@yusui/types";
import type { Whether } from "../constants";

import { request } from ".";

export interface FlowParam {
  id?: string;
  /** 配置Key */
  paramKey?: string;
  /** 配置名称 */
  paramName?: string;
  /** 配置值 */
  paramValue?: string;
  /** 是否系统内置 */
  paramType?: Whether;
  /** 备注 */
  remark?: string;
}

export function getList(params: Page & FlowParam) {
  return request.get<ResRecords<FlowParam[]>>("/sapier-flow/flow-param/list", { params });
}
export function getAllParams() {
  return request.get("/sapier-flow/flow-param/getAllParam");
}
export function getParam(key: FlowParam["paramKey"]) {
  return request.get("/sapier-flow/flow-param/getParam", { params: { paramKey: key } });
}

export function create(data: FlowParam) {
  return request.post("/sapier-flow/flow-param/save", data);
}

export function update(data: FlowParam) {
  return request.post("/sapier-flow/flow-param/update", data);
}

export function remove(ids: string) {
  return request.post("/sapier-flow/flow-param/remove", {}, { params: { ids } });
}
