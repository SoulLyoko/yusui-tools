import type { AvueCrudOption } from '@smallwei/avue'
import type { FlowDefinition } from '../../api/flow-definition'

import { formOption } from '../../components/design-steps/option'

export const tableOption: AvueCrudOption<FlowDefinition> = {
  rowKey: 'flowModuleId',
  align: 'center',
  index: true,
  border: true,
  stripe: true,
  searchMenuSpan: 4,
  tabs: true,
  dialogFullscreen: true,
  addBtn: false,
  editBtn: false,
  delBtn: false,
  menuWidth: 300,
  column: [
    ...formOption.column!,
    {
      label: '流程主版本',
      prop: 'mainVersion',
      formatter(row, value) {
        return value ? `V${value || ''}` : ''
      },
    },
  ],
}
