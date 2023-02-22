import type { Page, ResData, ResRecords } from "@yusui/types";
import type { FlowDefinition } from "./flow-definition";

import { request } from ".";

export interface FlowDeploy extends FlowDefinition {
  /**
   * 部署id
   */
  flowDeployId?: string;
  /**
   * 是否主版本
   */
  mainVersion?: 0 | 1;
}

export function getList(params: Page & FlowDeploy) {
  return request.get<ResData<FlowDeploy[]>>("/sapier-flow/flow-deploy/list", { params });
}

export function getDetail(params: { flowModuleId?: string; flowDeployId?: string }) {
  return request.get("/sapier-flow/flow-deploy/detail", { params });
}

export function update(data: FlowDeploy) {
  return request.post("/sapier-flow/flow-deploy/update", data);
}
