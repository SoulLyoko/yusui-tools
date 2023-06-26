import type { AvueFormColumn } from '@smallwei/avue'
import type { FlowFormData } from '../types'

export const circulateColumn: AvueFormColumn<FlowFormData>[] = [
  {
    label: '',
    labelWidth: 0,
    prop: 'circulate',
    type: 'dynamic',
    children: {
      type: 'form',
      index: false,
      column: [
        { label: '名称', prop: 'name', span: 24 },
        {
          label: '人员配置',
          prop: 'assignee',
          type: 'dynamic',
          span: 24,
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
        },
      ],
    },
    value: [],
  },
]
