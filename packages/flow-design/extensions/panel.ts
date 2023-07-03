import type { LogicFlow } from '@logicflow/core'

import { DndPanel as _DndPanel } from '@logicflow/extension'

export class Panel extends _DndPanel {
  constructor({ lf }: { lf: LogicFlow }) {
    super({ lf })
    this.setPatternItems([
      {
        label: '框选',
        icon: 'https://api.iconify.design/bpmn/lasso-tool.svg?width=24&height=24',
        callback() {
          lf.openSelectionSelect()
          lf.once('selection:selected', lf.closeSelectionSelect)
        },
      },
      {
        type: 'group',
        label: '子流程',
        icon: 'https://api.iconify.design/bpmn/subprocess-expanded.svg?width=24&height=24',
      },
      {
        type: 'startEvent',
        text: '开始',
        label: '开始节点',
        icon: 'https://api.iconify.design/bpmn/start-event.svg?width=24&height=24',
      },
      {
        type: 'endEvent',
        text: '结束',
        label: '结束节点',
        icon: 'https://api.iconify.design/bpmn/end-event.svg?width=24&height=24',
      },
      {
        type: 'userTask',
        label: '用户任务',
        icon: 'https://api.iconify.design/bpmn/user-task.svg?width=24&height=24',
      },
      {
        type: 'serviceTask',
        label: '服务任务',
        icon: 'https://api.iconify.design/bpmn/service-task.svg?width=24&height=24',
      },
      {
        type: 'circulateTask',
        label: '传阅任务',
        icon: 'https://api.iconify.design/bpmn/manual-task.svg?width=24&height=24',
      },
      {
        type: 'exclusiveGateway',
        label: '互斥网关',
        icon: 'https://api.iconify.design/bpmn/gateway-xor.svg?width=24&height=24',
      },
      {
        type: 'parallelGateway',
        label: '并行网关',
        icon: 'https://api.iconify.design/bpmn/gateway-parallel.svg?width=24&height=24',
      },
      {
        type: 'note',
        label: '注释',
        icon: 'https://api.iconify.design/bpmn/text-annotation.svg?width=24&height=24',
      },
    ])
  }
}
