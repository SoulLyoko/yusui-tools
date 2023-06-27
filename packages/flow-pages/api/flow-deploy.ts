import type { Page, ResData } from '@yusui/types'
import type { FlowDefinition } from './flow-definition'

import { useConfigProvider } from '../composables'

export enum IsMainVersion {
  '否' = 0,
  '是' = 1,
}

/** 已部署流程 */
export interface FlowDeploy extends FlowDefinition {
  /** 部署id */
  flowDeployId?: string
  /** 是否主版本 */
  mainVersion?: IsMainVersion
}

export function useFlowDeployApi() {
  const { request } = useConfigProvider()
  const url = {
    /** 流程部署列表 */
    list: '/sapier-flow/flow-deploy/list',
    /** 更新流程 */
    update: '/sapier-flow/flow-deploy/update',
    /** 删除流程 */
    remove: '/sapier-flow/flow-deploy/remove',
    /** 流程部署详情 */
    detail: '/sapier-flow/flow-deploy/detail',
  }
  const getList = (params: Page & FlowDeploy) => request.get<ResData<FlowDeploy[]>>(url.list, { params })
  const getDetail = (params: { flowModuleId?: string; flowDeployId?: string }) => request.get(url.detail, { params })
  const update = (data: FlowDeploy) => request.post(url.update, data)
  const remove = (ids: string) => request.post(url.remove, {}, { params: { ids } })
  return {
    url,
    getList,
    getDetail,
    update,
    remove,
  }
}
