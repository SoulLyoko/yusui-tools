import type { TableField, TableTemplate } from '@yusui/flow-pages'

import { FieldType, TablePrimary, defineTableOption, whetherDic } from '@yusui/flow-pages'
import { enumToDic } from '@yusui/utils'

const fieldsColumn = [
  { label: '字段名称', prop: 'name' },
  { label: '字段备注', prop: 'comment' },
  {
    label: '字段类型',
    prop: 'type',
    type: 'select',
    filterable: true,
    allowCreate: true,
    defaultFirstOption: true,
    dicData: enumToDic(FieldType),
  },
  { label: '字段长度', prop: 'size', type: 'number' },
  { label: '小数位', prop: 'point', type: 'number' },
  { label: '默认值', prop: 'default' },
  { label: '是否主键', prop: 'primary', type: 'switch', dicData: whetherDic, value: 0 },
  { label: '是否允许为空', prop: 'permitNull', type: 'switch', dicData: whetherDic, value: 1 },
]

export const tableOption = defineTableOption<TableTemplate & { defaultFields: TableField[]; editFields: TableField[] }>({
  rowKey: 'id',
  dialogFullscreen: true,
  column: [
    { label: '表名', prop: 'tableName', search: true },
    { label: '表注释', prop: 'tableComment', search: true },
    { label: '表引擎', prop: 'tableEngine' },
    {
      label: '表主键策略',
      prop: 'tablePrimary',
      type: 'select',
      filterable: true,
      allowCreate: true,
      defaultFirstOption: true,
      dicData: enumToDic(TablePrimary),
    },
    {
      label: '数据库字段',
      prop: 'editFields',
      hide: true,
      type: 'dynamic',
      children: {
        column: fieldsColumn,
      },
    },
    {
      label: '默认字段',
      prop: 'defaultFields',
      hide: true,
      type: 'dynamic',
      children: {
        addBtn: false,
        delBtn: false,
        column: fieldsColumn,
      },
    },
  ],
})
