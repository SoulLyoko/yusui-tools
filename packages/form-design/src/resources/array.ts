import type { Resource } from "../types";

export const array: Resource = {
  type: "array",
  label: "数组",
  icon: "el-icon-full-screen",
  group: "表单组件",
  settings: [
    {
      label: "最大数量",
      prop: "limit",
      type: "number"
    }
  ]
};

export const img = { ...array, type: "img", label: "图片", icon: "el-icon-picture" };
export const url = { ...array, type: "url", label: "超链接", icon: "el-icon-link" };
