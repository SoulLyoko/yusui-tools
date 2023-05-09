import type { Page, ResData } from '@yusui/types'

import { useConfigProvider } from '../composables'

export interface FlowFile {
  /** 附件目录 */
  categoryId?: string
  /** 实例ID */
  flowInstanceId?: string
  /** 任务ID */
  taskId?: string
  /** 任务节点名称 */
  taskNodeName?: string
  /** 附件名称 */
  fileName?: string
  /** 附件类型 */
  fileType?: string
  /** 附件大小 */
  fileSize?: number
  /** 附件地址 */
  fileUrl?: string
  /** 附件描述 */
  description?: string
  /** 初始附件标识 */
  rootMark?: string
  /** 附件版本 */
  version?: number
  /** 最后版本 */
  isLatest?: number
  createTime?: string
}

export function useFlowFileApi() {
  const { request } = useConfigProvider()
  const url = {
    /** 文件列表 */
    list: '/sapier-flow/flow-file/list',
    /** 保存文件 */
    save: '/sapier-flow/flow-file/save',
    /** 删除文件 */
    remove: '/sapier-flow/flow-file/remove',
  }
  const getList = (params: Page & FlowFile) => request.get<ResData<FlowFile[]>>(url.list, { params })
  const create = (data: FlowFile) => request.post(url.save, data)
  const remove = (ids: string) => request.post(url.remove, {}, { params: { ids } })
  return {
    getList,
    create,
    remove,
  }
}
