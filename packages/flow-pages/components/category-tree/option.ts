import type { AvueTreeOption } from '@smallwei/avue'
import type { FlowCategory } from '@yusui/flow-pages'

export const treeOption: AvueTreeOption<FlowCategory> = {
  defaultExpandAll: true,
  props: { label: 'name', value: 'id' },
  filter: true,
  formOption: {
    span: 24,
    column: [
      {
        label: '分类名称',
        prop: 'name',
        rules: [{ required: true, message: '请输入分类名称' }],
      },
      // {
      //   label: "分类标识",
      //   prop: "code",
      //   rules: [{ required: true, message: "请输入分类标识" }]
      // },
      {
        label: '描述',
        prop: 'remark',
      },
      {
        label: '排序',
        prop: 'sort',
        type: 'number',
      },
    ],
  },
}
