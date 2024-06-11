import type { AvueFormGroup } from '@smallwei/avue'
import type { FlowFormData } from '../types'

import {
  approvalColumn,
  assigneeColumn,
  baseColumn,
  buttonColumn,
  executionListenerColumn,
  formPropertyColumn,
  gatewayColumn,
  multiInstanceColumn,
  noteColumn,
  noticeColumn,
  participateColumn,
  printTemplateColumn,
  processColumn,
  propertyColumn,
  redTemplateColumn,
  sequenceFlowColumn,
  serviceTaskColumn,
  taskListenerColumn,
} from '.'

export * from './approval'
export * from './assignee'
export * from './base'
export * from './button'
export * from './executionListener'
export * from './formProperty'
export * from './gateway'
export * from './multiInstance'
export * from './note'
export * from './notice'
export * from './participate'
export * from './printTemplate'
export * from './process'
export * from './property'
export * from './redTemplate'
export * from './sequenceFlow'
export * from './serviceTask'
export * from './taskListener'
export * from './timeLimit'

export const defaultGroup: AvueFormGroup<FlowFormData>[] = [{ label: '基本配置', prop: 'base', column: baseColumn }]

export const defaultOptions: Record<string, AvueFormGroup<FlowFormData>[]> = {
  startEvent: [
    { label: '基本配置', prop: 'baseGroup', column: baseColumn },
    { label: '表单配置', prop: 'formPropertyGroup', column: formPropertyColumn },
    { label: '扩展属性', prop: 'propertyGroup', column: propertyColumn },
    { label: '执行监听', prop: 'executionListenerGroup', column: executionListenerColumn },
  ],
  endEvent: [
    { label: '基本配置', prop: 'baseGroup', column: baseColumn },
    { label: '表单配置', prop: 'formPropertyGroup', column: formPropertyColumn },
    { label: '扩展属性', prop: 'propertyGroup', column: propertyColumn },
    { label: '执行监听', prop: 'executionListenerGroup', column: executionListenerColumn },
  ],
  userTask: [
    { label: '基本配置', prop: 'baseGroup', column: baseColumn },
    { label: '人员配置', prop: 'assigneeGroup', column: assigneeColumn },
    { label: '审批配置', prop: 'approval', column: approvalColumn },
    { label: '按钮配置', prop: 'buttonGroup', column: buttonColumn },
    { label: '表单配置', prop: 'formPropertyGroup', column: formPropertyColumn },
    { label: '任务监听', prop: 'taskListenerGroup', column: taskListenerColumn },
    { label: '执行监听', prop: 'executionListenerGroup', column: executionListenerColumn },
    // { label: '时限控制', prop: 'timeLimitGroup', column: timeLimitColumn },
    { label: '扩展属性', prop: 'propertyGroup', column: propertyColumn },
  ],
  serviceTask: [
    { label: '基本配置', prop: 'baseGroup', column: baseColumn },
    { label: '服务配置', prop: 'serviceGroup', column: serviceTaskColumn },
    { label: '扩展属性', prop: 'propertyGroup', column: propertyColumn },
  ],
  branchTask: [
    { label: '基本配置', prop: 'baseGroup', column: baseColumn },
    { label: '人员配置', prop: 'assigneeGroup', column: assigneeColumn },
    { label: '按钮配置', prop: 'buttonGroup', column: buttonColumn },
    { label: '表单配置', prop: 'formPropertyGroup', column: formPropertyColumn },
    { label: '扩展属性', prop: 'propertyGroup', column: propertyColumn },
  ],
  sequenceFlow: [
    { label: '基本配置', prop: 'baseGroup', column: baseColumn },
    { label: '条件配置', prop: 'sequenceFlowGroup', column: sequenceFlowColumn },
    { label: '扩展属性', prop: 'propertyGroup', column: propertyColumn },
  ],
  parallelGateway: [
    { label: '基本配置', prop: 'baseGroup', column: baseColumn },
    { label: '网关配置', prop: 'gatewayGroup', column: gatewayColumn },
  ],
  process: [
    { label: '基本配置', prop: 'baseGroup', column: processColumn },
    { label: '参与人员配置', prop: 'participateGroup', column: participateColumn },
    { label: '通知配置', prop: 'noticeGroup', column: noticeColumn },
    { label: '打印配置', prop: 'printTemplateGroup', column: printTemplateColumn },
    { label: '套红配置', prop: 'redTemplateGroup', column: redTemplateColumn },
    { label: '执行监听', prop: 'executionListenerGroup', column: executionListenerColumn },
    { label: '扩展属性', prop: 'propertyGroup', column: propertyColumn },
  ],
  group: [
    { label: '基本配置', prop: 'baseGroup', column: baseColumn },
    { label: '多实例配置', prop: 'multiInstanceGroup', column: multiInstanceColumn },
    { label: '扩展属性', prop: 'propertyGroup', column: propertyColumn },
  ],
  note: [{ label: '基本配置', prop: 'baseGroup', column: noteColumn }],
}
