import type { FlowDefinition } from '@yusui/flow-pages'

import { defineTableOption, designFormOption } from '@yusui/flow-pages'

export const tableOption = defineTableOption<FlowDefinition>({
  rowKey: 'flowModuleId',
  dialogFullscreen: true,
  addBtn: false,
  editBtn: false,
  delBtn: false,
  menuWidth: 100,
  menuType: 'menu',
  menuBtnTitle: '操作',
  column: [
    ...designFormOption.column!.map((col, index) => {
      return {
        ...col,
        search: index < 2,
      }
    }),
    {
      label: '流程主版本',
      prop: 'mainVersion',
      formatter(row, value) {
        return value ? `V${value || ''}` : ''
      },
    },
  ],
})
