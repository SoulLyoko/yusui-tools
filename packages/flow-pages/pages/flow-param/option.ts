import type { FlowParam } from '@yusui/flow-pages'

import { defineTableOption, whetherDic } from '@yusui/flow-pages'

export const tableOption = defineTableOption<FlowParam>({
  rowKey: 'id',
  column: [
    { label: '配置名称', prop: 'paramName', search: true },
    { label: '配置Key', prop: 'paramKey', search: true },
    { label: '备注', prop: 'remark' },
    { label: '系统内置', prop: 'paramType', type: 'switch', dicData: whetherDic },
    { label: '配置值', prop: 'paramValue', type: 'textarea', maxRows: 20, span: 24, overHidden: true },
  ],
})
