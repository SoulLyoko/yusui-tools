import type { LogicFlow } from '@logicflow/core'
import type { SelectionSelect } from '@logicflow/extension'

import { DndPanel as _DndPanel } from '@logicflow/extension'

function getBpmnIcon(type: string) {
  return `https://api.iconify.design/bpmn/${type}.svg?width=24&height=24`
}

export class Panel extends _DndPanel {
  constructor({ lf }: { lf: LogicFlow }) {
    super({ lf })
    this.setPatternItems([
      {
        label: '框选',
        icon: getBpmnIcon('lasso-tool'),
        callback() {
          (lf.extension.selectionSelect as SelectionSelect).openSelectionSelect()
          lf.once('selection:selected', lf.closeSelectionSelect)
        },
      },
      {
        type: 'group',
        label: '子流程',
        icon: getBpmnIcon('subprocess-expanded'),
      },
      {
        type: 'startEvent',
        text: '开始',
        label: '开始节点',
        icon: getBpmnIcon('start-event'),
      },
      {
        type: 'endEvent',
        text: '结束',
        label: '结束节点',
        icon: getBpmnIcon('end-event'),
      },
      {
        type: 'userTask',
        label: '用户任务',
        icon: getBpmnIcon('user-task'),
      },
      {
        type: 'serviceTask',
        label: '服务任务',
        icon: getBpmnIcon('service-task'),
      },
      {
        type: 'branchTask',
        label: '分办任务',
        icon: getBpmnIcon('manual-task'),
      },
      {
        type: 'exclusiveGateway',
        label: '互斥网关',
        icon: getBpmnIcon('gateway-xor'),
      },
      {
        type: 'parallelGateway',
        label: '并行网关',
        icon: getBpmnIcon('gateway-parallel'),
      },
      {
        type: 'note',
        label: '注释',
        icon: getBpmnIcon('text-annotation'),
      },
    ])
  }
}
