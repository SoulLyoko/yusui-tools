import type { AvueFormGroup } from '@smallwei/avue'
import type { FlowFormData } from '../types'

import {
  assigneeColumn,
  baseColumn,
  buttonColumn,
  executionListenerColumn,
  formPropertyColumn,
  gatewayColumn,
  multiInstanceColumn,
  noteColumn,
  processColumn,
  propertyColumn,
  sequenceFlowColumn,
  serialColumn,
  serviceTaskColumn,
  taskListenerColumn,
  timeLimitColumn,
  userTaskColumn,
} from '.'

export * from './assignee'
export * from './base'
export * from './button'
export * from './executionListener'
export * from './formProperty'
export * from './gateway'
export * from './multiInstance'
export * from './note'
export * from './process'
export * from './property'
export * from './sequenceFlow'
export * from './serial'
export * from './serviceTask'
export * from './taskListener'
export * from './timeLimit'
export * from './userTask'

export const defaultGroup: AvueFormGroup<FlowFormData>[] = [{ label: '基本配置', prop: 'base', column: baseColumn }]

export const defaultOptions: Record<string, AvueFormGroup<FlowFormData>[]> = {
  startEvent: [
    { label: '基本配置', prop: 'base', column: baseColumn },
    { label: '表单配置', prop: 'formProperty', collapse: false, column: formPropertyColumn },
    { label: '扩展属性', prop: 'property', collapse: false, column: propertyColumn },
  ],
  endEvent: [
    { label: '基本配置', prop: 'base', column: baseColumn },
    { label: '表单配置', prop: 'formProperty', collapse: false, column: formPropertyColumn },
    { label: '扩展属性', prop: 'property', collapse: false, column: propertyColumn },
    { label: '执行监听', prop: 'executionListener', collapse: false, column: executionListenerColumn },
  ],
  userTask: [
    { label: '基本配置', prop: 'base', column: [...baseColumn, ...userTaskColumn] },
    { label: '人员配置', prop: 'assignee', collapse: true, column: assigneeColumn },
    { label: '多实例配置', prop: 'multiInstance', collapse: false, column: multiInstanceColumn },
    { label: '按钮配置', prop: 'button', collapse: false, column: buttonColumn },
    { label: '表单配置', prop: 'formProperty', collapse: false, column: formPropertyColumn },
    { label: '任务监听', prop: 'taskListener', collapse: false, column: taskListenerColumn },
    { label: '执行监听', prop: 'executionListener', collapse: false, column: executionListenerColumn },
    { label: '时限控制', prop: 'timeLimit', collapse: false, column: timeLimitColumn },
    { label: '扩展属性', prop: 'property', collapse: false, column: propertyColumn },
  ],
  serviceTask: [
    { label: '基本配置', prop: 'base', column: baseColumn },
    { label: '服务配置', prop: 'service', collapse: true, column: serviceTaskColumn },
    { label: '扩展属性', prop: 'property', collapse: false, column: propertyColumn },
  ],
  sequenceFlow: [
    { label: '基本配置', prop: 'base', column: baseColumn },
    { label: '条件配置', prop: 'sequenceFlow', collapse: true, column: sequenceFlowColumn },
    { label: '扩展属性', prop: 'property', collapse: false, column: propertyColumn },
  ],
  parallelGateway: [
    { label: '基本配置', prop: 'base', column: baseColumn },
    { label: '网关配置', prop: 'base', column: gatewayColumn },
  ],
  process: [
    { label: '流程配置', prop: 'base', column: processColumn },
    { label: '流水号配置', prop: 'serial', collapse: true, column: serialColumn },
    { label: '扩展属性', prop: 'property', collapse: false, column: propertyColumn },
  ],
  // subProcess: [
  //   { label: "基本配置", prop: "base", column: baseColumn },
  //   { label: "人员配置", prop: "assignee", collapse: true, column: assigneeColumn },
  //   { label: "多实例配置", prop: "multiInstance", collapse: false, column: multiInstanceColumn },
  //   { label: "扩展属性", prop: "property", collapse: false, column: propertyColumn }
  // ],
  group: [
    { label: '基本配置', prop: 'base', column: baseColumn },
    { label: '多实例配置', prop: 'multiInstance', collapse: false, column: multiInstanceColumn },
    { label: '扩展属性', prop: 'property', collapse: false, column: propertyColumn },
  ],
  note: [{ label: '基本配置', prop: 'base', column: noteColumn }],
}
