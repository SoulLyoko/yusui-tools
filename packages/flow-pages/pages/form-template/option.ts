import type { FormTemplate } from '@yusui/flow-pages'

import { defineTableOption } from '@yusui/flow-pages'

export const tableOption = defineTableOption<FormTemplate>({
  rowKey: 'id',
  column: [
    { label: '表单标识', prop: 'formKey', search: true },
    { label: '表单名称', prop: 'formName', search: true },
    { label: '表单备注', prop: 'remarks' },
    { label: '排序', prop: 'sort', type: 'number' },
  ],
})
