import type { AvueCrudColumn, AvueCrudOption } from '@smallwei/avue'
import type { FlowOps } from '@yusui/flow-pages'

const opsCrudColumn: AvueCrudColumn[] = [
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
    label: '任务状态',
    prop: 'status',
    type: 'select',
    search: true,
    searchValue: 2,
    dicUrl: '/sapier-flow/flow-param/getParam',
    dicQuery: { paramKey: 'flow.task.status' },
  },
].map(e => ({ ...e, display: false }))

const circulateFormColumn: AvueCrudColumn[] = [
  { label: '审批人', prop: 'assignee' },
  { label: '节点名称', prop: 'taskNodeName' },
  { label: '接收时间', prop: 'startTime', type: 'datetime', format: 'YYYY-MM-DD HH:mm:ss', valueFormat: 'YYYY-MM-DD HH:mm:ss' },
  { label: '结束时间', prop: 'endTime', type: 'datetime', format: 'YYYY-MM-DD HH:mm:ss', valueFormat: 'YYYY-MM-DD HH:mm:ss' },
  { label: '耗时', prop: 'duration' },
  { label: '传阅意见', prop: 'comment' },
].map(e => ({ ...e, hide: true }))

export const tableOption: AvueCrudOption<FlowOps> = {
  rowKey: 'id',
  align: 'center',
  index: true,
  border: true,
  stripe: true,
  searchMenuSpan: 6,
  menu: true,
  addBtn: false,
  column: [...opsCrudColumn, ...circulateFormColumn],
}
