import type { FlowFormData } from '../types'
import type { AvueFormColumn } from '@smallwei/avue'

export const noteColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '节点id',
    prop: 'id',
    readonly: true,
  },
  {
    label: '节点描述',
    prop: 'name',
    type: 'textarea',
  },
]
