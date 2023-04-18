import type { Page, ResData } from '@yusui/types'
import type { FlowDefinition } from './flow-definition'

import { request } from '.'

export enum IsMainVersion {
  '否' = 0,
  '是' = 1,
}

export interface FlowDeploy extends FlowDefinition {
  /** 部署id */
  flowDeployId?: string
  /** 是否主版本 */
  mainVersion?: IsMainVersion
}

export function getList(params: Page & FlowDeploy) {
  return request.get<ResData<FlowDeploy[]>>('/sapier-flow/flow-deploy/list', { params })
}

export function getDetail(params: { flowModuleId?: string; flowDeployId?: string }) {
  return request.get('/sapier-flow/flow-deploy/detail', { params })
}

export function update(data: FlowDeploy) {
  return request.post('/sapier-flow/flow-deploy/update', data)
}

export function getPublishFlow() {
  return request.get<ResData<FlowDeploy[]>>('/sapier-flow/flow-run/queryPublishFlowList')
}
