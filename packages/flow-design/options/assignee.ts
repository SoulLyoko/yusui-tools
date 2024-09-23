import type { FlowFormData } from '../types'
import type { AvueFormColumn } from '@smallwei/avue'

import FlowAssignee from '../components/FlowAssignee.vue'

export const assigneeColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'assignee',
    type: 'dynamic',
    component: FlowAssignee,
    value: [],
  },
]
