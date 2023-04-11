import type { Page, ResRecords } from "@yusui/types";
import type { Whether } from "../constants";

import { request, useRequest } from ".";

export interface TableTemplate {
  id?: string;
  /** 表名 */
  tableName?: string;
  /** 表注释 */
  tableComment?: string;
  /** 表引擎 */
  tableEngine?: string;
  /** 表主键策略 */
  tablePrimary?: string;
  /** 数据库字段 */
  tableFields?: string | TableField[];
}

export interface TableField {
  /** 字段名称 */
  name?: string;
  /** 字段备注 */
  comment?: string;
  /** 字段类型 */
  type?: FieldType;
  /** 字段长度 */
  size?: number;
  /** 小数位 */
  point?: number;
  /** 默认值 */
  default?: string;
  /** 是否主键 */
  primary?: Whether;
  /** 是否允许为空 */
  permitNull?: Whether;
}

export enum FieldType {
  bigint = "bigint",
  blob = "blob",
  char = "char",
  date = "date",
  datetime = "datetime",
  decimal = "decimal",
  double = "double",
  enum = "enum",
  float = "float",
  int = "int",
  longblob = "longblob",
  longtext = "longtext",
  mediumblob = "mediumblob",
  mediumint = "mediumint",
  mediumtext = "mediumtext",
  set = "set",
  smallint = "smallint",
  text = "text",
  time = "time",
  timestamp = "timestamp",
  tinyblob = "tinyblob",
  tinyint = "tinyint",
  tinytext = "tinytext",
  varbinary = "varbinary",
  varchar = "varchar",
  year = "year"
}

export function getList(params: Page & TableTemplate) {
  return request.get<ResRecords<TableTemplate[]>>("/sapier-flow/dev-table/list", { params });
}
export function useTableTemplateList() {
  return useRequest<TableTemplate[]>("/sapier-flow/dev-table/list", {
    params: { size: -1 },
    dataPath: "res.data.records"
  });
}

export function create(data: TableTemplate) {
  return request.post("/sapier-flow/dev-table/save", data);
}

export function update(data: TableTemplate) {
  return request.post("/sapier-flow/dev-table/update", data);
}

export function remove(ids: string) {
  return request.post("/sapier-flow/dev-table/remove", {}, { params: { ids } });
}

export function deploy(data: Pick<TableTemplate, "id">) {
  return request.post("/sapier-flow/dev-table/deploy", data);
}
