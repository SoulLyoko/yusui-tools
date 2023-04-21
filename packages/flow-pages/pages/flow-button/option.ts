import type { AvueCrudOption } from '@smallwei/avue'
import type { FlowButton } from '../../api/flow-button'

import { enumToDic } from '@yusui/utils'

import { FlowButtonApproval, FlowButtonDisplay, FlowButtonStatus, FlowButtonType } from '../../api/flow-button'

export const tableOption: AvueCrudOption<FlowButton & { buttonPreview: any }> = {
  rowKey: 'id',
  align: 'center',
  index: true,
  border: true,
  stripe: true,
  searchMenuSpan: 4,
  labelWidth: 130,
  column: [
    {
      label: '按钮名称',
      prop: 'name',
    },
    {
      label: '按钮标识',
      prop: 'buttonKey',
    },
    {
      label: '按钮图标',
      prop: 'icon',
      component: 'icon-select',
    },
    {
      label: '按钮类型',
      prop: 'buttonType',
      type: 'select',
      dicData: enumToDic(FlowButtonType),
    },
    {
      label: '默认显示条件',
      prop: 'display',
      type: 'select',
      multiple: true,
      dataType: 'string',
      value: 'false',
      dicData: enumToDic(FlowButtonDisplay),
    },
    {
      label: '默认审批窗口显示',
      prop: 'approval',
      type: 'select',
      multiple: true,
      dataType: 'string',
      value: 'false',
      dicData: enumToDic(FlowButtonApproval),
    },
    {
      label: '状态',
      prop: 'status',
      type: 'switch',
      value: 1,
      dicData: enumToDic(FlowButtonStatus),
    },
    {
      label: '排序',
      prop: 'sort',
      type: 'number',
      value: 0,
    },
    {
      label: '按钮预览',
      prop: 'buttonPreview',
      width: 200,
    },
  ],
}
