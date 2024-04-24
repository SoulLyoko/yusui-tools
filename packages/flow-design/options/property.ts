import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

const nameDic = [
  { label: '通过时更新', value: 'upSend', desc: 'upSend' },
  { label: '接收时更新', value: 'upReceive', desc: 'upReceive' },
]

export const propertyColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'property',
    type: 'dynamic',
    children: {
      column: [
        {
          label: '属性名',
          prop: 'name',
          type: 'select',
          dicData: nameDic,
          filterable: true,
          allowCreate: true,
          defaultFirstOption: true,
        },
        { label: '属性值', prop: 'value', type: 'textarea', minRows: 1 },
      ],
    },
    value: [],
  },
]
