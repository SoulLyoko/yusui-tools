import type { FlowOps } from '@yusui/flow-pages'

import { TaskStatus, defineTableOption } from '@yusui/flow-pages'

export const tableOption = defineTableOption<FlowOps>({
  rowKey: 'id',
  menu: false,
  addBtn: false,
  column: [
    { label: '流程名称', prop: 'flowName' },
    { label: '流程标识', prop: 'flowKey' },
    {
      label: '流程分类',
      prop: 'categoryId',
      type: 'select',
      search: true,
      dicUrl: '/sapier-flow/flow-category/list',
      props: { label: 'name', value: 'id' },
    },
    { label: '标题', prop: 'processTitle', search: true },
    { label: '流水号', prop: 'serialNumber' },
    { label: '当前节点', prop: 'taskNodeName' },
    { label: '审批人', prop: 'assigneeName' },
    { label: '申请人', prop: 'applyUserName' },
    { label: '接收时间', prop: 'startTime' },
    {
      label: '状态',
      prop: 'status',
      type: 'select',
      search: true,
      searchValue: TaskStatus['待办'],
      dicUrl: '/sapier-flow/flow-param/getParam',
      dicQuery: { paramKey: 'flow.task.status' },
    },
  ],
})
