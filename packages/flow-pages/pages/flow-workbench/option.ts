import type { AvueCrudOption } from '@smallwei/avue'
import type { FlowOps } from '@yusui/flow-pages'

export const tableOption: AvueCrudOption<FlowOps> = {
  rowKey: 'id',
  align: 'center',
  index: true,
  border: true,
  stripe: true,
  searchMenuSpan: 6,
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
  ],
}
