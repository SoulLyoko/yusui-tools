import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

export const assigneeColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'assignee',
    type: 'dynamic',
    children: {
      rowKey: 'type',
      addBtn: true,
      column: [
        {
          label: '类型',
          prop: 'type',
          type: 'select',
          width: 120,
          dicData: [
            { label: '用户', value: 'user' },
            { label: '部门', value: 'dept' },
            { label: '岗位', value: 'post' },
            { label: '动态', value: 'dynamic' },
            { label: '指定节点', value: 'userTask' },
            { label: '自定义', value: 'custom' },
          ],
        },
        { label: '值', prop: 'value' },
      ],
    },
    value: [],
  },
]
