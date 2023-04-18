import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

export const userTaskColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '驳回节点',
    prop: 'rollbackNode',
    type: 'select',
    params: { filterType: 'bpmn:UserTask' },
  },
  {
    label: '重新提交后回到驳回人',
    prop: 'backToRejecter',
    type: 'switch',
    value: false,
  },
]
