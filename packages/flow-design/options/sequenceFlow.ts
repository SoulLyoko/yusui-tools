import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

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
  },
]
