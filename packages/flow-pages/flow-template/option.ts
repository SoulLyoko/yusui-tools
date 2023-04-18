import type { AvueCrudOption } from '@smallwei/avue'
import type { FlowTemplate } from '../api/flow-template'

export const tableOption: AvueCrudOption<FlowTemplate> = {
  rowKey: 'id',
  align: 'center',
  index: true,
  border: true,
  stripe: true,
  searchMenuSpan: 4,
  span: 24,
  column: [
    { label: '流程标识', prop: 'flowKey' },
    { label: '流程名称', prop: 'flowName' },
    { label: '流程模型数据', prop: 'flowData', display: false },
    { label: '流程备注', prop: 'remarks' },
    { label: '排序', prop: 'sort' },
    // { label: "分类ID", prop: "categoryId" }
    // { label: "业务状态", prop: "status" },
    // { label: "版本号", prop: "version" }
  ],
}
