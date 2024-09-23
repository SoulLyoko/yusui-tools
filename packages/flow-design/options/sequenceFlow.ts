import type { FlowFormData } from '../types'
import type { AvueFormColumn } from '@smallwei/avue'

export const sequenceFlowColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '条件表达式',
    prop: 'conditionsequenceflow',
  },
  {
    label: '是否为默认分支',
    prop: 'defaultConditions',
    labelWidth: 120,
    type: 'switch',
    value: false,
    control(val, form) {
      form.isDefaultFlow = val
      return {}
    },
  },
]
