import type { AvueCrudOption } from "@smallwei/avue";
import type { FormTemplate } from "../api/form-template";

export const tableOption: AvueCrudOption<FormTemplate> = {
  rowKey: "id",
  align: "center",
  index: true,
  border: true,
  stripe: true,
  searchMenuSpan: 4,
  span: 24,
  column: [
    { label: "表单标识", prop: "formKey" },
    { label: "表单名称", prop: "formName" },
    { label: "表单配置", prop: "formOption", display: false },
    { label: "表单备注", prop: "remarks" },
    { label: "排序", prop: "sort", type: "number" }
    // { label: "分类ID", prop: "categoryId" },
    // { label: "主键id", prop: "id" },
    // { label: "状态", prop: "status", type: "number" },
    // { label: "版本号", prop: "version", type: "number" }
  ]
};
