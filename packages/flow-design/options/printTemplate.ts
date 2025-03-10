import type { FlowFormData } from '../types'
import type { AvueFormColumn } from '@smallwei/avue'

import FlowTemplateSetter from '../components/FlowTemplateSetter.vue'

export const printTemplateColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'printTemplate',
    type: 'dynamic',
    component: FlowTemplateSetter,
    dataKey: 'printTemplateDic',
    value: [],
  },
]
