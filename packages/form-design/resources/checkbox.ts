import type { Resource } from "../types";

import { dic } from "../options";

export const checkbox: Resource = {
  name: "checkbox",
  title: "多选框组",
  icon: "el-icon-folder-checked",
  group: "表单组件",
  props: { type: "checkbox", label: "多选框组" },
  settings: [
    ...dic!,
    {
      label: "全选",
      prop: "all",
      type: "switch",
      value: false
    },
    {
      label: "边框",
      prop: "border",
      type: "switch",
      value: false
    },
    {
      label: "按钮",
      prop: "button",
      type: "switch",
      value: false
    },
    {
      label: "最多可选",
      prop: "min",
      type: "number"
    },
    {
      label: "最少可选",
      prop: "max",
      type: "number"
    }
  ]
};
