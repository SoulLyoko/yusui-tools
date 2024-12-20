import type { FlowFormData } from '../types'
import type { AvueFormColumn } from '@smallwei/avue'

import FlowParticipateSetter from '../components/FlowParticipateSetter.vue'

export const participateColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'participateConfig',
    type: 'dynamic',
    component: FlowParticipateSetter,
    value: [],
  },
]
