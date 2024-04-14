import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

const eventNameDic = [
  { label: '创建', value: 'create', desc: 'create' },
  { label: '指派', value: 'assignment', desc: 'assignment' },
  { label: '完成', value: 'complete', desc: 'complete' },
  { label: '删除', value: 'delete', desc: 'delete' },
  { label: '更新', value: 'update', desc: 'update' },
  { label: '超时', value: 'timeout', desc: 'timeout' },
  { label: '全部', value: 'all', desc: 'all' },
]
const eventTypeDic = [
  { label: '类', value: 'class', desc: 'class' },
  { label: '接口', value: 'api', desc: 'api' },
  { label: '表达式', value: 'expression', desc: 'expression' },
  { label: '代理表达式', value: 'delegateExpression', desc: 'delegateExpression' },
]
// const fieldTypeDic = [
//   { label: '字符串', value: 'string', desc: 'string' },
//   { label: '表达式', value: 'expression', desc: 'expression' },
// ]

export const taskListenerColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'executionListener',
    type: 'dynamic',
    children: {
      // type: 'form',
      // index: false,
      column: [
        { label: '事件', prop: 'name', type: 'select', dicData: eventNameDic },
        { label: '类型', prop: 'type', type: 'select', dicData: eventTypeDic },
        { label: '值', prop: 'value', type: 'textarea', minRows: 1, span: 24 },
        // {
        //   label: '字段',
        //   prop: 'fields',
        //   type: 'dynamic',
        //   span: 24,
        //   children: {
        //     column: [
        //       { label: '字段名', prop: 'fieldName' },
        //       { label: '类型', prop: 'fieldType', type: 'select', dicData: fieldTypeDic },
        //       { label: '值', prop: 'fieldValue' },
        //     ],
        //   },
        // },
      ],
    },
  },
]
