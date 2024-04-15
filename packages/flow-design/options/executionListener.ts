import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

const eventNameDic = [
  { label: '开始', value: 'start', desc: 'start' },
  { label: '结束', value: 'end', desc: 'end' },
  { label: '任务', value: 'task', desc: 'task' },
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

export const executionListenerColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'executionListener',
    type: 'dynamic',
    children: {
      // type: 'form',
      // index: false,
      column: [
        { label: '名称', prop: 'name', type: 'select', dicData: eventNameDic },
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
