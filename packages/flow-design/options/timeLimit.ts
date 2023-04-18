import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

export const timeLimitColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'timeLimit',
    type: 'dynamic',
    children: {
      column: [
        { label: '名称', prop: 'name' },
        { label: '最小值', prop: 'min', type: 'number' },
        { label: '最大值', prop: 'max', type: 'number' },
      ],
    },
    value: [],
  },
]
