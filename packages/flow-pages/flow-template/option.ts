import type { AvueCrudOption } from "@smallwei/avue";

/** 表单类型 */
export enum FlowFormType {
  /** 内置 */
  Internal = 0,
  /** 外置 */
  External = 1
}

export interface ModelTemplate {
  categoryId?: string;
  createBy?: string;
  createDept?: string;
  createTime?: string;
  deployId?: string;
  formKey?: string;
  formType?: FlowFormType;
  description?: string;
  icon?: string;
  id?: string;
  isDeleted?: number;
  modelKey?: string;
  modelXml?: string;
  name?: string;
  layoutId?: string;
  layoutJson?: string;
  status?: number;
  updateBy?: string;
  updateTime?: string;
  version?: number;
  scope?: any;
}

export const tableOption: AvueCrudOption<ModelTemplate> = {
  rowKey: "id",
  align: "center",
  index: true,
  border: true,
  stripe: true,
  searchMenuSpan: 4,
  column: [
    { label: "模型名称", prop: "name" },
    { label: "模型标识", prop: "modelKey" },
    { label: "模型描述", prop: "description" },
    // { label: "所属分类", prop: "categoryId" },
    // { label: "图标", prop: "icon" },
    // { label: "权限", prop: "scope" },
    { label: "流程图", prop: "modelXml", display: false }
  ]
};
