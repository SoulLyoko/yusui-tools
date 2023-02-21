import type { AvueCrudOption } from "@smallwei/avue";

export interface FormTemplate {
  createBy?: string;
  createDept?: string;
  createTime?: string;
  id?: string;
  isDeleted?: 0 | 1;
  key?: string;
  name?: string;
  remark?: string;
  rev?: number;
  /** 表单json */
  source?: string;
  status?: number;
  tableId?: string;
  updateBy?: string;
  updateTime?: string;
}

export const tableOption: AvueCrudOption<FormTemplate> = {
  rowKey: "id",
  align: "center",
  index: true,
  border: true,
  stripe: true,
  searchMenuSpan: 4,
  column: [
    { label: "表单名称", prop: "name" },
    { label: "表单标识", prop: "key" },
    { label: "备注", prop: "remark" },
    { label: "表单配置", prop: "source", display: false }
  ]
};
