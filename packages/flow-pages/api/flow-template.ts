import type { Page, ResRecords } from '@yusui/types'

import { useRequest } from 'vue-request'

import { useConfigProvider } from '../composables'

export interface FlowTemplate {
  /** 流程模型数据 */
  flowData?: string
  /** 流程KEY */
  flowKey?: string
  /** 流程名称 */
  flowName?: string
  /** 分类ID */
  categoryId?: string
  /** 主键id */
  id?: string
  /** 流程备注 */
  remarks?: string
  /** 排序 */
  sort?: number
  /** 业务状态 */
  status?: number
  /** 版本号 */
  version?: number
}

export function useFlowTemplateApi() {
  const { request } = useConfigProvider()
  const url = {
    /** 流程模板列表 */
    list: '/sapier-flow/dev-flow/list',
    /** 新增流程模板 */
    save: '/sapier-flow/dev-flow/save',
    /** 更新流程模板 */
    update: '/sapier-flow/dev-flow/update',
    /** 删除流程模板 */
    remove: '/sapier-flow/dev-flow/remove',
  }
  const getList = (params: Page & FlowTemplate) => request.get<ResRecords<FlowTemplate[]>>(url.list, { params })
  const useList = () => useRequest(() => getList({ size: -1 }).then(res => res.data.records))
  const create = (data: FlowTemplate) => request.post(url.save, data)
  const update = (data: FlowTemplate) => request.post(url.update, data)
  const remove = (ids: string) => request.post(url.remove, {}, { params: { ids } })
  return {
    url,
    getList,
    useList,
    create,
    update,
    remove,
  }
}
