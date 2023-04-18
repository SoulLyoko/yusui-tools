import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

import FlowNodeSelect from '../flow-modeler/components/flow-node-select.vue'

export const processColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '跳过第一节点',
    prop: 'skipFirstNode',
    type: 'switch',
    labelWidth: 100,
    value: true,
  },
  {
    label: '默认驳回节点',
    prop: 'rollbackNode',
    type: 'select',
    labelWidth: 100,
    component: FlowNodeSelect,
    params: { filterType: 'userTask' },
  },
  {
    label: '优先级',
    prop: 'priority',
  },
  {
    label: '表单标题',
    prop: 'formTitle',
  },
]
