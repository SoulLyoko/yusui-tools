import type { FlowTemplate } from '@yusui/flow-pages'

import { defineTableOption } from '@yusui/flow-pages'

export const tableOption = defineTableOption<FlowTemplate>({
  rowKey: 'id',
  column: [
    { label: '流程标识', prop: 'flowKey', search: true },
    { label: '流程名称', prop: 'flowName', search: true },
    { label: '流程备注', prop: 'remarks' },
    { label: '排序', prop: 'sort' },
  ],
})
