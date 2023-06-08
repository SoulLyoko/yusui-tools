import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

import flowText from '../components/flow-text.vue'

export const buttonColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'button',
    value: [],
    type: 'dynamic',
    children: {
      addBtn: false,
      delBtn: false,
      column: [
        { prop: '_index', hide: true },
        { label: '按钮名', prop: 'name', width: 100, component: flowText },
        { label: '按钮值', prop: 'buttonKey', width: 100, component: flowText },
        {
          label: '显示条件',
          prop: 'display',
          type: 'select',
          dataType: 'string',
          multiple: true,
        },
        {
          label: '审批窗口',
          prop: 'approval',
          type: 'select',
          dataType: 'string',
          multiple: true,
        },
      ],
    },
  },
]
