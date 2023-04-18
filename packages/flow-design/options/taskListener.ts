import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

const eventNameDic = [
  { label: '创建', value: 'create' },
  { label: '指派', value: 'assignment' },
  { label: '完成', value: 'complete' },
  { label: '删除', value: 'delete' },
  { label: '更新', value: 'update' },
  { label: '超时', value: 'timeout' },
]
const eventTypeDic = [
  { label: '类', value: 'class' },
  { label: '表达式', value: 'expression' },
  { label: '代理表达式', value: 'delegateExpression' },
]
const fieldTypeDic = [
  { label: '字符串', value: 'string' },
  { label: '表达式', value: 'expression' },
]

export const taskListenerColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'executionListener',
    type: 'dynamic',
    children: {
      type: 'form',
      index: false,
      column: [
        { label: '事件', prop: 'eventName', type: 'select', dicData: eventNameDic },
        { label: '类型', prop: 'eventType', type: 'select', dicData: eventTypeDic },
        { label: '值', prop: 'eventValue', type: 'textarea', minRows: 1, span: 24 },
        {
          label: '字段',
          prop: 'fields',
          type: 'dynamic',
          span: 24,
          children: {
            column: [
              { label: '字段名', prop: 'fieldName' },
              { label: '类型', prop: 'fieldType', type: 'select', dicData: fieldTypeDic },
              { label: '值', prop: 'fieldValue' },
            ],
          },
        },
      ],
    },
  },
]
