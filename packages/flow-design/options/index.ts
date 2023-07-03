import type { AvueFormGroup } from '@smallwei/avue'
import type { FlowFormData } from '../types'

import {
  assigneeColumn,
  baseColumn,
  buttonColumn,
  circulateColumn,
  formPropertyColumn,
  gatewayColumn,
  multiInstanceColumn,
  noteColumn,
  processColumn,
  propertyColumn,
  sequenceFlowColumn,
  serialColumn,
  serviceTaskColumn,
  userTaskColumn,
} from '.'

export * from './assignee'
export * from './base'
export * from './button'
export * from './circulate'
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
    { label: '基本配置', prop: 'baseGroup', column: baseColumn },
    { label: '表单配置', prop: 'formPropertyGroup', collapse: false, column: formPropertyColumn },
    { label: '扩展属性', prop: 'propertyGroup', collapse: false, column: propertyColumn },
  ],
  endEvent: [
    { label: '基本配置', prop: 'baseGroup', column: baseColumn },
    { label: '表单配置', prop: 'formPropertyGroup', collapse: false, column: formPropertyColumn },
    { label: '扩展属性', prop: 'propertyGroup', collapse: false, column: propertyColumn },
    // { label: '执行监听', prop: 'executionListenerGroup', collapse: false, column: executionListenerColumn },
  ],
  userTask: [
    { label: '基本配置', prop: 'baseGroup', column: [...baseColumn, ...userTaskColumn] },
    { label: '人员配置', prop: 'assigneeGroup', column: assigneeColumn },
    { label: '多实例配置', prop: 'multiInstanceGroup', collapse: false, column: multiInstanceColumn },
    { label: '按钮配置', prop: 'buttonGroup', collapse: false, column: buttonColumn },
    { label: '表单配置', prop: 'formPropertyGroup', collapse: false, column: formPropertyColumn },
    // { label: '任务监听', prop: 'taskListenerGroup', collapse: false, column: taskListenerColumn },
    // { label: '执行监听', prop: 'executionListenerGroup', collapse: false, column: executionListenerColumn },
    // { label: '时限控制', prop: 'timeLimitGroup', collapse: false, column: timeLimitColumn },
    { label: '扩展属性', prop: 'propertyGroup', collapse: false, column: propertyColumn },
  ],
  serviceTask: [
    { label: '基本配置', prop: 'baseGroup', column: baseColumn },
    { label: '服务配置', prop: 'serviceGroup', column: serviceTaskColumn },
    { label: '扩展属性', prop: 'propertyGroup', collapse: false, column: propertyColumn },
  ],
  circulateTask: [
    { label: '基本配置', prop: 'baseGroup', column: baseColumn },
    { label: '传阅配置', prop: 'circulateGroup', column: circulateColumn },
    { label: '按钮配置', prop: 'buttonGroup', collapse: false, column: buttonColumn },
    { label: '表单配置', prop: 'formPropertyGroup', collapse: false, column: formPropertyColumn },
  ],
  sequenceFlow: [
    { label: '基本配置', prop: 'baseGroup', column: baseColumn },
    { label: '条件配置', prop: 'sequenceFlowGroup', column: sequenceFlowColumn },
    { label: '扩展属性', prop: 'propertyGroup', collapse: false, column: propertyColumn },
  ],
  parallelGateway: [
    { label: '基本配置', prop: 'baseGroup', column: baseColumn },
    { label: '网关配置', prop: 'baseGroup', column: gatewayColumn },
  ],
  process: [
    { label: '流程配置', prop: 'baseGroup', column: processColumn },
    { label: '流水号配置', prop: 'serialGroup', column: serialColumn },
    { label: '扩展属性', prop: 'propertyGroup', collapse: false, column: propertyColumn },
  ],
  group: [
    { label: '基本配置', prop: 'baseGroup', column: baseColumn },
    { label: '多实例配置', prop: 'multiInstanceGroup', collapse: false, column: multiInstanceColumn },
    { label: '扩展属性', prop: 'propertyGroup', collapse: false, column: propertyColumn },
  ],
  note: [{ label: '基本配置', prop: 'baseGroup', column: noteColumn }],
}
