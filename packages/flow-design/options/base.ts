import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

export const baseColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '节点id',
    prop: 'id',
    readonly: true,
  },
  {
    label: '节点名称',
    prop: 'name',
  },
  {
    label: '节点描述',
    prop: 'desc',
  },
]
