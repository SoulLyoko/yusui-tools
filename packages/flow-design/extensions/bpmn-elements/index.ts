import type { LogicFlow } from '@logicflow/core'

import { h } from '@logicflow/core'
import {
  EndEventFactory,
  GatewayNodeFactory,
  StartEventFactory,
  TaskNodeFactory,
  icons,
  sequenceFlowFactory,
  useDefinition,
} from '@logicflow/extension'

import { NoteFlow } from './note-flow'
import { Note } from './note'
import { ProcessNode } from './process'
import { SubProcess } from './sub-process'

export class BpmnElements {
  static pluginName = 'BpmnElements'
  constructor({ lf }: { lf: LogicFlow }) {
    lf.definition = {}
    lf.useDefinition = useDefinition(lf.definition)
    // 流程根节点
    lf.register(ProcessNode)
    // 子流程
    // eslint-disable-next-line no-new
    new SubProcess({ lf })
    // 开始事件
    lf.register({ ...StartEventFactory(lf), type: 'startEvent' })
    // 结束事件
    lf.register({ ...EndEventFactory(lf), type: 'endEvent' })
    // 互斥网关
    lf.register(GatewayNodeFactory('exclusiveGateway', icons.exclusiveIcon))
    // 并行网关
    lf.register(GatewayNodeFactory('parallelGateway', icons.parallelIcon))
    // 用户任务
    lf.register(TaskNodeFactory('userTask', icons.userTaskIcon))
    // 服务任务
    lf.register(TaskNodeFactory('serviceTask', icons.serviceTaskIcon))
    // 传阅任务
    lf.register(TaskNodeFactory('circulateTask', [h('path', { d: icons.manualTaskIcon, fill: 'none', stroke: 'black', transform: 'scale(30)' })]))
    // 流转线
    lf.register({ ...sequenceFlowFactory(), type: 'sequenceFlow' })
    // 注释节点
    lf.register(Note)
    // 注释线
    lf.register(NoteFlow)
    lf.setDefaultEdgeType('sequenceFlow')
  }
}
