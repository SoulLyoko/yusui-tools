import type { Page, ResData, ResRecords } from '@yusui/types'
import type { DicItem } from '@smallwei/avue'
import type { Whether } from '../constants'
import type { FlowStatus, HandleType, TaskStatus } from './flow-task'
import type { TableField } from './table-template'
import type { RequestInstance } from '../types'

import { useRes } from '@yusui/composables'

/** 流程参数 */
export interface FlowParam {
  id?: string
  /** 配置Key */
  paramKey?: string
  /** 配置名称 */
  paramName?: string
  /** 配置值 */
  paramValue?: string
  /** 是否系统内置 */
  paramType?: Whether
  /** 备注 */
  remark?: string
}

export interface FlowParamTaskStatus {
  label?: TaskStatus
  value?: TaskStatus
  style?: { fill?: string, stroke?: string, strokeWidth?: number }
}
export interface FlowParamHandleType {
  label?: HandleType
  value?: HandleType
}
export interface FlowParamFlowStatus {
  label?: FlowStatus
  value?: FlowStatus
}

export interface FlowParamMap {
  /** 流程办理状态 */
  'flow.task.status': FlowParamTaskStatus[]
  /** 流程操作类型 */
  'flow.handle.type': FlowParamHandleType[]
  /** 流程状态 */
  'flow.status': FlowParamFlowStatus[]
  /** 自动建表设计默认字段 */
  'table.default.fields': TableField[]
  /** 只有一个节点时自动选择 */
  'flow.approval.autocheck': boolean
  /** 自动填入意见 */
  'flow.approval.autocomment': boolean
  /** 流程动态审批人 */
  'flow.trends.user': DicItem[]
  /** 审批树人名的排列方向 */
  'flow.approval.tree.horizontal': boolean
}
export type FlowParamValue<K> = K extends keyof FlowParamMap ? FlowParamMap[K] : any

export function useFlowParamApi(request: RequestInstance) {
  const url = {
    /** 流程参数列表 */
    list: '/sapier-flow/flow-param/list',
    /** 新增流程参数 */
    save: '/sapier-flow/flow-param/save',
    /** 更新流程参数 */
    update: '/sapier-flow/flow-param/update',
    /** 删除流程参数 */
    remove: '/sapier-flow/flow-param/remove',
    /** 获取所有流程参数键值对 */
    all: '/sapier-flow/flow-param/getAllParam',
    /** 根据key获取流程参数 */
    key: '/sapier-flow/flow-param/getParam',
  }
  const getList = (params: Page & FlowParam) => request.get<ResRecords<FlowParam[]>>(url.list, { params })
  /** 获取所有流程参数键值对 */
  const getParams = () => request.get<ResData<FlowParamMap>>(url.all)
  const useParams = useRes(getParams, { res: 'data' })
  /** 根据key获取流程参数 */
  const getParam = <K extends keyof FlowParamMap>(key: K) => request.get<ResData<FlowParamValue<K>>>(url.key, { params: { paramKey: key } })
  const useParam = <K extends keyof FlowParamMap>(key: K) => useRes(getParam, { res: 'data', modify: false, defaultParams: [key] })
  const create = (data: FlowParam) => request.post(url.save, data)
  const update = (data: FlowParam) => request.post(url.update, data)
  const remove = (ids: string) => request.post(url.remove, {}, { params: { ids } })
  return {
    url,
    getList,
    getParams,
    useParams,
    getParam,
    useParam,
    create,
    update,
    remove,
  }
}
