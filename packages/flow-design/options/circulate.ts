import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

import FlowAssignee from '../components/FlowAssignee.vue'

export const circulateColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'circulate',
    type: 'dynamic',
    component: FlowAssignee,
    value: [],
  },
]
