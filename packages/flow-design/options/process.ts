import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

import FlowNodeSelect from '../flow-modeler/components/flow-node-select.vue'

export const processColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '跳过第一节点',
    prop: 'skipFirstNode',
    type: 'switch',
    labelWidth: 100,
    value: true,
  },
  {
    label: '默认驳回节点',
    prop: 'rollbackNode',
    type: 'select',
    labelWidth: 100,
    component: FlowNodeSelect,
    params: { filterType: 'userTask' },
  },
  {
    label: '优先级字段',
    prop: 'priority',
    type: 'select',
    filterable: true,
    allowCreate: true,
    defaultFirstOption: true,
  },
  {
    label: '表单标题',
    prop: 'formTitle',
    separator: '-',
    type: 'select',
    dataType: 'string',
    multiple: true,
    filterable: true,
    allowCreate: true,
    defaultFirstOption: true,
  },
  {
    label: '标题分隔符',
    prop: 'formTitleSeparator',
    value: '-',
    control(val) {
      return {
        formTitle: {
          separator: val,
        },
      }
    },
  },
]
