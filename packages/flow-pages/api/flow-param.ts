import type { Page, ResData, ResRecords } from '@yusui/types'
import type { Whether } from '../constants'
import type { FlowStatus, HandleType, TaskStatus } from './flow-task'
import type { TableField } from './table-template'

import { request, useRequest } from '.'

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
}
export type FlowParamValue<K> = K extends keyof FlowParamMap ? FlowParamMap[K] : any

export function getList(params: Page & FlowParam) {
  return request.get<ResRecords<FlowParam[]>>('/sapier-flow/flow-param/list', { params })
}
export function getAllParams() {
  return request.get<ResData<FlowParamMap>>('/sapier-flow/flow-param/getAllParam')
}

/** 根据key获取流程参数 */
export function getParam<K>(key: K) {
  return request.get<ResData<FlowParamValue<K>>>('/sapier-flow/flow-param/getParam', { params: { paramKey: key } })
}
export function useFlowParam<K>(key: K) {
  return useRequest(() => getParam<K>(key).then(res => res.data))
}

export function create(data: FlowParam) {
  return request.post('/sapier-flow/flow-param/save', data)
}

export function update(data: FlowParam) {
  return request.post('/sapier-flow/flow-param/update', data)
}

export function remove(ids: string) {
  return request.post('/sapier-flow/flow-param/remove', {}, { params: { ids } })
}
