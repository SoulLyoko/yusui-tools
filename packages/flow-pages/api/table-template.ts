import type { Page, ResData, ResRecords } from '@yusui/types'
import type { Whether } from '../constants'
import type { RequestInstance } from '../types'

import { useRes } from '@yusui/composables'

/** 建表设计 */
export interface TableTemplate {
  id?: string
  /** 表名 */
  tableName?: string
  /** 表注释 */
  tableComment?: string
  /** 表引擎 */
  tableEngine?: string
  /** 表主键策略 */
  tablePrimary?: TablePrimary
  /** 数据库字段 */
  tableFields?: string | TableField[]
}

export enum TablePrimary {
  ASSIGN_ID = 'ASSIGN_ID',
  ASSIGN_UUID = 'ASSIGN_UUID',
  AUTO = 'AUTO',
  INPUT = 'INPUT',
  NONE = 'NONE',
}

export interface TableField {
  /** 字段名称 */
  name?: string
  /** 字段备注 */
  comment?: string
  /** 字段类型 */
  type?: FieldType
  /** 字段长度 */
  size?: number
  /** 小数位 */
  point?: number
  /** 默认值 */
  default?: string
  /** 是否主键 */
  primary?: Whether
  /** 是否允许为空 */
  permitNull?: Whether
}

export enum FieldType {
  bigint = 'bigint',
  blob = 'blob',
  char = 'char',
  date = 'date',
  datetime = 'datetime',
  decimal = 'decimal',
  double = 'double',
  enum = 'enum',
  float = 'float',
  int = 'int',
  longblob = 'longblob',
  longtext = 'longtext',
  mediumblob = 'mediumblob',
  mediumint = 'mediumint',
  mediumtext = 'mediumtext',
  set = 'set',
  smallint = 'smallint',
  text = 'text',
  time = 'time',
  timestamp = 'timestamp',
  tinyblob = 'tinyblob',
  tinyint = 'tinyint',
  tinytext = 'tinytext',
  varbinary = 'varbinary',
  varchar = 'varchar',
  year = 'year',
}

export function useTableTemplateApi(request: RequestInstance) {
  const url = {
    /** 数据库表列表 */
    list: '/sapier-flow/dev-table/list',
    /** 新增数据库表 */
    save: '/sapier-flow/dev-table/save',
    /** 更新数据库表 */
    update: '/sapier-flow/dev-table/update',
    /** 删除数据库表 */
    remove: '/sapier-flow/dev-table/remove',
    /** 部署数据库表 */
    deploy: '/sapier-flow/dev-table/deploy',
    /** 获取已存在的表字段 */
    getFields: '/sapier-flow/dev-table/getTableFields',
  }
  const getList = (params: Page & TableTemplate) => request.get<ResRecords<TableTemplate[]>>(url.list, { params })
  const useList = useRes(getList, { res: 'data.records', defaultParams: [{ size: -1 }] })
  const create = (data: TableTemplate) => request.post(url.save, data)
  const update = (data: TableTemplate) => request.post(url.update, data)
  const remove = (ids: string) => request.post(url.remove, {}, { params: { ids } })
  const deploy = (data: { id?: string }) => request.post(url.deploy, data)
  const getFields = (params: TableTemplate) => request.get<ResData<TableField[]>>(url.getFields, { params })
  return {
    url,
    getList,
    useList,
    create,
    update,
    remove,
    deploy,
    getFields,
  }
}
