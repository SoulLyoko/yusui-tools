import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

import FlowButton from '../components/FlowButton.vue'

export const buttonColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'button',
    type: 'dynamic',
    component: FlowButton,
    value: [],
    tip: '需要覆盖默认按钮配置时从这里添加',
  },
]
