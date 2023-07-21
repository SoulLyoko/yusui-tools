import type { AvueCrudOption } from '@smallwei/avue'
import type { FlowTemplate } from '@yusui/flow-pages'

export const tableOption: AvueCrudOption<FlowTemplate> = {
  rowKey: 'id',
  align: 'center',
  index: true,
  border: true,
  stripe: true,
  searchMenuSpan: 6,
  span: 24,
  column: [
    { label: '流程标识', prop: 'flowKey', search: true },
    { label: '流程名称', prop: 'flowName', search: true },
    { label: '流程备注', prop: 'remarks' },
    { label: '排序', prop: 'sort' },
  ],
}
