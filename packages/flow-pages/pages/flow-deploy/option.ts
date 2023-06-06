import type { AvueCrudOption } from '@smallwei/avue'
import type { FlowDeploy } from '../../api'

import { formOption } from '../../components/design-steps/option'

export const tableOption: AvueCrudOption<FlowDeploy> = {
  rowKey: 'flowDeloyId',
  align: 'center',
  index: true,
  border: true,
  stripe: true,
  searchMenuSpan: 6,
  tabs: true,
  dialogFullscreen: true,
  addBtn: false,
  editBtn: false,
  delBtn: false,
  menuWidth: 250,
  column: [
    ...(formOption.column! as any),
    {
      label: '流程版本',
      prop: 'version',
      formatter(row, value) {
        return value ? `V${value || ''}` : ''
      },
    },
    {
      label: '是否主版本',
      prop: 'mainVersion',
      type: 'select',
      dicData: [
        { label: '否', value: 0 },
        { label: '是', value: 1 },
      ],
    },
  ],
}
