import { dic } from "./dic";

export const checkbox = {
  type: "checkbox",
  label: "多选框组",
  icon: "el-icon-folder-checked",
  group: "表单组件",
  settings: [
    ...dic.settings!,
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
