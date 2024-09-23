import type { FlowFormData } from '../types'
import type { AvueFormColumn } from '@smallwei/avue'

export const serviceTaskColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '类',
    prop: 'className',
  },
  {
    label: '异步',
    prop: 'isAsync',
    type: 'switch',
    value: false,
  },
]
