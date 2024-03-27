import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

import FlowParticipate from '../components/FlowParticipate.vue'

export const participateColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'participateConfig',
    type: 'dynamic',
    component: FlowParticipate,
    value: [],
  },
]
