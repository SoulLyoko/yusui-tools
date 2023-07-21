import type { AvueCrudOption } from '@smallwei/avue'
import type { FormTemplate } from '@yusui/flow-pages'

export const tableOption: AvueCrudOption<FormTemplate> = {
  rowKey: 'id',
  align: 'center',
  index: true,
  border: true,
  stripe: true,
  searchMenuSpan: 6,
  span: 24,
  column: [
    { label: '表单标识', prop: 'formKey', search: true },
    { label: '表单名称', prop: 'formName', search: true },
    { label: '表单备注', prop: 'remarks' },
    { label: '排序', prop: 'sort', type: 'number' },
  ],
}
