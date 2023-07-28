import type { Page, ResData, ResRecords } from '@yusui/types'
import type { DicItem } from '@smallwei/avue'
import type { Whether } from '../constants'
import type { FlowStatus, HandleType, TaskStatus } from './flow-task'
import type { TableField } from './table-template'
import type { RequestInstance } from '../types'

import { useRequest } from 'vue-request'

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
  style?: { fill?: string; stroke?: string; strokeWidth?: number }
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
  'flow.task.status': FlowParamTaskStatus[]
  'flow.handle.type': FlowParamHandleType[]
  'flow.status': FlowParamFlowStatus[]
  'table.default.fields': TableField[]
  'flow.default.comment': string
  'flow.approval.autocheck': 'true' | 'fasle'
  'flow.approval.autocomment': 'true' | 'fasle'
  'flow.trends.user': DicItem[]
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
  const getAllParam = () => request.get<ResData<FlowParamMap>>(url.all)
  /** 根据key获取流程参数 */
  const getParam = <K extends string = keyof FlowParamMap>(key: K) => request.get<ResData<FlowParamValue<K>>>(url.key, { params: { paramKey: key } })
  const useParam = <K extends string = keyof FlowParamMap>(key: K) => useRequest(() => getParam<K>(key).then(res => res.data))
  const create = (data: FlowParam) => request.post(url.save, data)
  const update = (data: FlowParam) => request.post(url.update, data)
  const remove = (ids: string) => request.post(url.remove, {}, { params: { ids } })
  return {
    url,
    getList,
    getAllParam,
    getParam,
    useParam,
    create,
    update,
    remove,
  }
}
