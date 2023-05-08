import type { AvueCrudOption } from '@smallwei/avue'
import type { FlowParam } from '../../api'

import { whetherDic } from '../../constants'

export const tableOption: AvueCrudOption<FlowParam> = {
  rowKey: 'id',
  align: 'center',
  index: true,
  border: true,
  stripe: true,
  searchMenuSpan: 4,
  span: 24,
  column: [
    { label: '配置名称', prop: 'paramName' },
    { label: '配置Key', prop: 'paramKey' },
    { label: '配置值', prop: 'paramValue', type: 'textarea', overHidden: true },
    { label: '系统内置', prop: 'paramType', type: 'switch', dicData: whetherDic },
    { label: '备注', prop: 'remark' },
  ],
}
