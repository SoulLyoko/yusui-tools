import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

import FlowNodeSelect from '../flow-modeler/components/flow-node-select.vue'

export const userTaskColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '驳回节点',
    prop: 'rollbackNode',
    type: 'select',
    component: FlowNodeSelect,
    params: { filterType: 'userTask' },
  },
  {
    label: '重新提交后回到驳回人',
    prop: 'backToRejecter',
    type: 'switch',
    value: false,
  },
]
