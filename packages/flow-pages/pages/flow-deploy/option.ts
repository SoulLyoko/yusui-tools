import type { FlowDeploy } from '@yusui/flow-pages'

import { defineTableOption, designFormOption } from '@yusui/flow-pages'

export const tableOption = defineTableOption<FlowDeploy>({
  rowKey: 'flowDeloyId',
  dialogFullscreen: true,
  addBtn: false,
  editBtn: false,
  delBtn: false,
  menuWidth: 100,
  menuType: 'menu',
  menuBtnTitle: '操作',
  column: [
    ...(designFormOption.column! as any),
    { prop: 'sort', hide: true },
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
})
