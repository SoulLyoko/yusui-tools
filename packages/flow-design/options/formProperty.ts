import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

import FlowFormProperty from '../components/FlowFormProperty.vue'

export const formPropertyColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'formProperty',
    type: 'dynamic',
    component: FlowFormProperty,
    value: [],
    tip: '需要覆盖默认表单配置时从这里添加',
  },
]
