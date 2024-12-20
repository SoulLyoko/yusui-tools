import type { FlowFormData } from '../types'
import type { AvueFormColumn } from '@smallwei/avue'

import FlowTemplateSetter from '../components/FlowTemplateSetter.vue'

export const redTemplateColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'redTemplate',
    type: 'dynamic',
    component: FlowTemplateSetter,
    dataKey: 'redTemplateDic',
    value: [],
  },
]
